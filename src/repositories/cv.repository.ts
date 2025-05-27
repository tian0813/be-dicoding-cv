import { PrismaClient, Prisma } from "@prisma/client";
import Cv from "../models/cv.model";
import { CreateCvDto, UpdateCvDto, CvFilters } from "../types/cv";
import { PaginationParams } from "../types/pagination";
import { getErrorMessage } from "../utils/error";
import { create } from "domain";

class CvRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async findAll(
    userId: number,
    pagination?: PaginationParams,
    filters?: CvFilters
  ): Promise<{ cvs: Cv[]; total: number } | string> {
    try {
      const page = pagination?.page || 1;
      const limit = pagination?.limit || 12;
      const skip = (page - 1) * limit;

      const where: Prisma.CvWhereInput = {
        isDeleted: false,
        userId,
        ...(filters?.search && {
          OR: [
            {
              appliedPosition: {
                contains: filters.search,
                mode: Prisma.QueryMode.insensitive,
              },
            },
            {
              jobTitle: {
                contains: filters.search,
                mode: Prisma.QueryMode.insensitive,
              },
            },
          ],
        }),
        ...(filters?.startDate && { createdAt: { gte: filters.startDate } }),
        ...(filters?.endDate && { createdAt: { lte: filters.endDate } }),
      };

      const [cvs, total] = await Promise.all([
        this.prisma.cv.findMany({
          where,
          skip,
          take: limit,
          orderBy: {
            createdAt: "desc",
          },
        }),
        this.prisma.cv.count({ where }),
      ]);

      return {
        cvs: cvs.map((cv) => Cv.fromEntity(cv)),
        total,
      };
    } catch (error) {
      return getErrorMessage(error);
    }
  }

  async findById(id: number, userId: number): Promise<Cv | null | string> {
    try {
      const cv = await this.prisma.cv.findFirst({
        where: {
          id,
          userId,
          isDeleted: false,
        } as Prisma.CvWhereInput,
      });

      return cv ? Cv.fromEntity(cv) : null;
    } catch (error) {
      return getErrorMessage(error);
    }
  }

  async create(cvData: CreateCvDto): Promise<Cv | string> {
    try {
      const cv = await this.prisma.cv.create({
        data: {
          appliedPosition: cvData.appliedPosition,
          jobTitle: cvData.jobTitle,
          technicalSkills: cvData.technicalSkills,
          profesionalExperience: cvData.profesionalExperience,
          rawText: cvData.rawText,
          matchScore: cvData.matchScore,
          user: {
            connect: {
              email: cvData.email,
            },
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        } as Prisma.CvCreateInput,
      });
      return Cv.fromEntity(cv);
    } catch (error) {
      return getErrorMessage(error);
    }
  }

  async update(id: number, cvData: UpdateCvDto): Promise<Cv | string> {
    try {
      const cv = await this.prisma.cv.update({
        where: { id } as Prisma.CvWhereUniqueInput,
        data: {
          ...cvData,
          updatedAt: new Date(),
        },
      });
      return Cv.fromEntity(cv);
    } catch (error) {
      return getErrorMessage(error);
    }
  }

  async softDelete(id: number): Promise<Cv | string> {
    try {
      const cv = await this.prisma.cv.update({
        where: { id } as Prisma.CvWhereUniqueInput,
        data: {
          isDeleted: true,
          updatedAt: new Date(),
        } as Prisma.CvUpdateInput,
      });
      return Cv.fromEntity(cv);
    } catch (error) {
      return getErrorMessage(error);
    }
  }
}

export default CvRepository;

import CvRepository from "../repositories/cv.repository";
import Cv from "../models/cv.model";
import { CreateCvDto, UpdateCvDto, CvFilters } from "../types/cv";
import { PaginationParams, PaginatedResult } from "../types/pagination";

class CvService {
  private cvRepository: CvRepository;

  constructor(cvRepository: CvRepository) {
    this.cvRepository = cvRepository;
  }

  async getAllCvs(
    userId: number,
    pagination?: PaginationParams,
    filters?: CvFilters
  ): Promise<PaginatedResult<Cv> | string> {
    const data = await this.cvRepository.findAll(userId, pagination, filters);

    if (typeof data === "string") {
      return data;
    }

    const { cvs, total } = data;

    const page = pagination?.page || 1;
    const limit = pagination?.limit || 12;
    const lastPage = Math.ceil(total / limit);

    return {
      data: cvs,
      meta: {
        total,
        page,
        lastPage,
        hasNextPage: page < lastPage,
        hasPrevPage: page > 1,
      },
    };
  }

  async getCvById(id: number, userId: number): Promise<Cv | string> {
    const cv = await this.cvRepository.findById(id, userId);
    if (typeof cv === "string") {
      return cv;
    }

    if (!cv) {
      return "Cv not found";
    }

    return cv;
  }

  async createCv(cvData: CreateCvDto): Promise<Cv | string> {
    if (
      !cvData.appliedPosition ||
      !cvData.jobTitle ||
      !cvData.technicalSkills ||
      !cvData.profesionalExperience ||
      !cvData.rawText
    ) {
      return "Applied Position, Job Title, Technicah Skill, Profesional Experience and Raw Text are required";
    }

    const result = await this.cvRepository.create(cvData);
    if (typeof result === "string") {
      return result;
    }

    return result;
  }

  async updateCv(
    userId: number,
    id: number,
    cvData: UpdateCvDto
  ): Promise<Cv | string> {
    const existingCv = await this.cvRepository.findById(id, userId);
    if (typeof existingCv === "string") {
      return existingCv;
    }

    if (!existingCv) {
      return "Cv not found";
    }

    const result = await this.cvRepository.update(id, cvData);
    if (typeof result === "string") {
      return result;
    }

    return result;
  }

  async softDelete(id: number, userId: number): Promise<Cv | string> {
    const cv = await this.cvRepository.findById(id, userId)
    if (typeof cv === "string") {
      return cv;
    }

    if (!cv) {
      return "Cv not found";
    }

    const result = await this.cvRepository.softDelete(id);
    if (typeof result === "string") {
      return result;
    }

    return result;
  }
}

export default CvService;

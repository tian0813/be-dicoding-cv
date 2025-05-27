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
}

export default CvService;

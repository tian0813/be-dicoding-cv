import { PrismaClient, Prisma } from "@prisma/client";
import Cv from "../models/cv.model";
import { CreateCvDto, UpdateCvDto, CvFilters } from "../types/cv";
import { PaginationParams } from "../types/pagination";
import { getErrorMessage } from "../utils/error";

class CvRepository {}

export default CvRepository;

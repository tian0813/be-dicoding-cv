import { NextFunction, Response } from "express";
import { responses } from "../constants";
import { AuthRequest } from "../middleware/auth";
import CvService from "../services/cv.service";
import { CvFilters } from "../types/cv";
import { PaginationParams } from "../types/pagination";

class CvController {}

export default CvController;

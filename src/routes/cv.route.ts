import { Router } from "express";
import CvController from "../controllers/cv.controller";
import CvService from "../services/cv.service";
import CvRepository from "../repositories/cv.repository";
import { PrismaClient } from "@prisma/client";

const router = Router();

export default router;

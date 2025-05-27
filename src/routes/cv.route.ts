import { Router } from "express";
import CvController from "../controllers/cv.controller";
import CvService from "../services/cv.service";
import CvRepository from "../repositories/cv.repository";
import { PrismaClient } from "@prisma/client";

const router = Router();

const prisma = new PrismaClient();
const cvRepository = new CvRepository(prisma);
const cvService = new CvService(cvRepository);
const cvController = new CvController(cvService);

router.get("/", (req, res, next) => cvController.getAllCvs(req, res, next));
router.get("/:id", (req, res, next) => cvController.getCvById(req, res, next));
router.post("/", (req, res, next) => cvController.createCv(req, res, next));
router.put("/:id", (req, res, next) => cvController.updateCv(req, res, next));
router.patch("/:id", (req, res, next) =>
  cvController.softDelete(req, res, next)
);

export default router;

import { NextFunction, Response } from "express";
import { responses } from "../constants";
import { AuthRequest } from "../middleware/auth";
import CvService from "../services/cv.service";
import { CvFilters } from "../types/cv";
import { PaginationParams } from "../types/pagination";

class CvController {
  private cvService: CvService;

  constructor(cvService: CvService) {
    this.cvService = cvService;
  }

  async getAllCvs(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.status(500).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const pagination: PaginationParams = {
        page: req.query.page ? parseInt(req.query.page as string) : undefined,
        limit: req.query.limit
          ? parseInt(req.query.limit as string)
          : undefined,
      };

      const filters: CvFilters = {
        search: req.query.search as string,
        startDate: req.query.startDate
          ? new Date(req.query.startDate as string)
          : undefined,
        endDate: req.query.endDate
          ? new Date(req.query.endDate as string)
          : undefined,
      };

      const result = await this.cvService.getAllCvs(
        req?.user.id,
        pagination,
        filters
      );

      if (typeof result === "string") {
        return res.status(400).json({
          success: false,
          message: result,
        });
      }

      res.status(200).json({
        success: true,
        message: responses.successGetCvs,
        ...result,
      });
    } catch (error) {
      next(error);
    }
  }

  async getCvById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.status(500).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const result = await this.cvService.getCvById(
        Number(req.params.id),
        req.user.id
      );

      if (typeof result === "string") {
        return res.status(400).json({
          success: false,
          message: result,
        });
      }

      return res.status(200).json({
        success: true,
        message: responses.successGetCvs,
        data: result.toDTO(),
      });
    } catch (error) {
      next(error);
    }
  }

  async createCv(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.status(500).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const result = await this.cvService.createCv({
        appliedPosition: req.body.appliedPosition,
        jobTitle: req.body.jobTitle,
        technicalSkills: req.body.technicalSkills,
        profesionalExperience: req.body.profesionalExperience,
        rawText: req.body.rawText,
        email: req.user.email,
      });

      if (typeof result === "string") {
        return res.status(400).json({
          success: false,
          message: result,
        });
      }

      res.status(201).json({
        success: true,
        message: responses.successCreateCv,
        data: result.toDTO(),
      });
    } catch (error) {
      next(error);
    }
  }

  async updateCv(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.status(500).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const result = await this.cvService.updateCv(
        req.user.id,
        Number(req.params.id),
        req.body
      );

      if (typeof result === "string") {
        return res.status(400).json({
          success: false,
          message: result,
        });
      }

      res.status(200).json({
        success: true,
        message: responses.successUpdateCv,
        data: result.toDTO(),
      });
    } catch (error) {
      next(error);
    }
  }

  async softDelete(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.status(500).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const result = await this.cvService.softDelete(
        Number(req.params.id),
        req.user.id
      );

      if (typeof result === "string") {
        return res.status(400).json({
          success: false,
          message: result,
        });
      }

      res.status(204).json({
        success: true,
        message: responses.successDeleteCv,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default CvController;

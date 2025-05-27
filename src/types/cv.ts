export type Cv = {
  id: number;
  appliedPosition: string;
  jobTitle: string;
  technicalSkills: String;
  profesionalExperience: string;
  rawText: string;
  matchScore?: number;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateCvDto = {
  appliedPosition: string;
  jobTitle: string;
  technicalSkills: string;
  profesionalExperience: string;
  rawText: string;
  matchScore?: number;
  email: string;
};

export type UpdateCvDto = {
  appliedPosition?: string;
  jobTitle?: string;
  technicalSkills?: string;
  profesionalExperience?: string;
  rawText?: string;
  matchScore?: number;
};

export interface CvFilters {
  search?: string;
  startDate?: Date;
  endDate?: Date;
}

export type Cv = {
  id: number;
  cv_text: string;
  parsed_cv?: any;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateCvDto = {
  cv_text: string;
  parsed_cv?: any;
  email: string;
}

export type UpdateCvDto = {
  cv_text?: string;
  parsed_cv?: any;
}

export interface CvFilters {
  search?: string;
  startDate?: Date;
  endDate?: Date;
}

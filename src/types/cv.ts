export type Cv = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateCvDto = {
  title: string;
  content: string;
  email: string;
}

export type UpdateCvDto = {
  title?: string;
  content?: string;
}

export interface CvFilters {
  search?: string;
  startDate?: Date;
  endDate?: Date;
}

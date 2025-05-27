import { type Cv as PrismaCv } from "@prisma/client";

class Cv {
  private id: number;
  private appliedPosition: string;
  private jobTitle: string;
  private technicalSkills: string;
  private profesionalExperience: string;
  private rawText: string;
  private matchScore: number | null;
  private createdAt: Date;

  constructor(
    id: number,
    appliedPosition: string,
    jobTitle: string,
    technicalSkills: string,
    profesionalExperience: string,
    rawText: string,
    matchScore: number | null,
    createdAt: Date
  ) {
    this.id = id;
    this.appliedPosition = appliedPosition;
    this.jobTitle = jobTitle;
    this.technicalSkills = technicalSkills;
    this.profesionalExperience = profesionalExperience;
    this.rawText = rawText;
    this.matchScore = matchScore;
    this.createdAt = createdAt;
  }

  static fromEntity(prismaCv: PrismaCv) {
    return new Cv(
        prismaCv.id,
        prismaCv.appliedPosition,
        prismaCv.jobTitle,
        prismaCv.technicalSkills,
        prismaCv.profesionalExperience,
        prismaCv.rawText,
        prismaCv.matchScore,
        prismaCv.createdAt
    )
  }

  toDTO() {
    return {
        id: this.id,
        appliedPosition: this.appliedPosition,
        jobTitle: this.jobTitle,
        technicalSkills: this.technicalSkills,
        profesionalExperience: this.profesionalExperience,
        rawText: this.rawText,
        matchScore: this.matchScore,
        createdAt: this.createdAt
    }
  }
}

export default Cv;

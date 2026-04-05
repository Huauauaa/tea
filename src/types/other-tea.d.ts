declare namespace OtherTea {
  type SectionId = "reprocessed" | "substitute";

  type Section = {
    id: SectionId;
    titleZh: string;
    titleEn: string;
  };

  type Subcategory = {
    slug: string;
    sectionId: SectionId;
    nameZh: string;
    nameEn: string;
    blurbZh: string;
    blurbEn: string;
    examplesZh: string;
    examplesEn: string;
  };
}

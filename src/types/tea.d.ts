declare namespace Tea {
  /** Main tea category (six types + Other) */
  type Category = {
    /** URL segment, e.g. green-tea */
    slug: string;
    name: string;
    nameZh: string;
    blurb: string;
    blurbEn: string;
    imageSrc?: string;
    imageAlt: string;
    imageAltZh: string;
  };
}

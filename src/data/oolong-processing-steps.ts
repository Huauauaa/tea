/** Traditional oolong processing sequence (simplified; varies by region & style). */
export const OOLONG_PROCESS_STEPS: {
  id: string;
  titleZh: string;
  titleEn: string;
  blurbZh: string;
  blurbEn: string;
}[] = [
  {
    id: "pluck",
    titleZh: "采摘",
    titleEn: "Plucking",
    blurbZh: "适采成熟度的一芽二、三叶。",
    blurbEn: "One bud, two or three leaves at proper maturity.",
  },
  {
    id: "wither",
    titleZh: "萎凋",
    titleEn: "Withering",
    blurbZh: "日光或室内失水，叶质变软。",
    blurbEn: "Sun or indoor moisture loss; leaves soften.",
  },
  {
    id: "zuoqing",
    titleZh: "做青",
    titleEn: "Qing processing",
    blurbZh: "摇青与晾青交替，控温控湿促进「走水」与轻微发酵。",
    blurbEn: "Tossing and resting in cycles — the key semi-oxidation stage.",
  },
  {
    id: "shaqing",
    titleZh: "杀青",
    titleEn: "Fixation",
    blurbZh: "高温终止酶活性，固定品质。",
    blurbEn: "High heat stops enzymes and sets the leaf.",
  },
  {
    id: "rounian",
    titleZh: "揉捻",
    titleEn: "Rolling",
    blurbZh: "塑形、破壁，利于后续干燥与冲泡出味。",
    blurbEn: "Shapes the leaf and breaks cell walls for drying and brewing.",
  },
  {
    id: "hongbei",
    titleZh: "干燥 / 烘焙",
    titleEn: "Drying / roasting",
    blurbZh: "去水足干；部分乌龙会多次烘焙以定香醇。",
    blurbEn: "Removes moisture; many oolongs are roasted in rounds for aroma.",
  },
];

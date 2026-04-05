export const OTHER_SECTIONS: OtherTea.Section[] = [
  {
    id: "reprocessed",
    titleZh: "再加工茶",
    titleEn: "Reprocessed tea",
  },
  {
    id: "substitute",
    titleZh: "代用茶（非茶科植物）",
    titleEn: "Tea substitutes (non-Camellia plants)",
  },
];

export const OTHER_SUBCATEGORIES: OtherTea.Subcategory[] = [
  {
    slug: "scented-tea",
    sectionId: "reprocessed",
    nameZh: "花茶",
    nameEn: "Scented / flower tea",
    blurbZh: "以茶叶为茶坯，与香花窨制而成，茶香与花香交融。",
    blurbEn:
      "Tea leaves scented with flowers — jasmine, rose, and similar aromatics layered into the leaf.",
    examplesZh: "如：茉莉花茶。",
    examplesEn: "e.g. jasmine tea.",
  },
  {
    slug: "compressed-tea",
    sectionId: "reprocessed",
    nameZh: "紧压茶",
    nameEn: "Compressed / pressed tea",
    blurbZh: "将茶叶蒸压成砖、饼、沱等形状，便于储运与陈化。",
    blurbEn:
      "Tea steamed and pressed into bricks, cakes, tuó, and other compact shapes for aging and travel.",
    examplesZh: "如：茶砖、茶饼。",
    examplesEn: "e.g. tea brick, tea cake.",
  },
  {
    slug: "extract-tea",
    sectionId: "reprocessed",
    nameZh: "萃取茶",
    nameEn: "Extracted / instant tea",
    blurbZh: "以浸提、浓缩、干燥等工艺制成速溶或高浓度茶制品。",
    blurbEn:
      "Concentrates, powders, and instant forms made by extraction and drying.",
    examplesZh: "如：茶粉、茶膏。",
    examplesEn: "e.g. tea powder, tea paste.",
  },
  {
    slug: "fruit-flavored-tea",
    sectionId: "reprocessed",
    nameZh: "果味茶",
    nameEn: "Fruit-flavored tea",
    blurbZh: "在茶中加入果香或果汁风味，口感更活泼。",
    blurbEn:
      "Tea with added fruit flavors or juice notes — bright, sweet-tart profiles.",
    examplesZh: "如：柠檬红茶。",
    examplesEn: "e.g. lemon black tea.",
  },
  {
    slug: "herbal-tisane",
    sectionId: "substitute",
    nameZh: "花草茶",
    nameEn: "Herbal tea / tisane",
    blurbZh: "以花卉、草本等非茶科植物冲泡，不含传统茶树叶片。",
    blurbEn:
      "Infusions of flowers and herbs — not from Camellia sinensis leaves.",
    examplesZh: "如：洋甘菊、玫瑰。",
    examplesEn: "e.g. chamomile, rose.",
  },
  {
    slug: "root-rhizome-tea",
    sectionId: "substitute",
    nameZh: "根茎类",
    nameEn: "Root / rhizome infusions",
    blurbZh: "以根茎类植物为主料，切片或干燥后冲泡。",
    blurbEn:
      "Roots and rhizomes dried or sliced for steeping — warming, earthy cups.",
    examplesZh: "如：牛蒡茶、姜茶。",
    examplesEn: "e.g. burdock tea, ginger tea.",
  },
  {
    slug: "grain-tea",
    sectionId: "substitute",
    nameZh: "谷物类",
    nameEn: "Grain tea",
    blurbZh: "以谷物焙炒或烘焙后冲泡，麦香、坚果香明显。",
    blurbEn:
      "Roasted grains steeped for a toasty, nutty liquor without tea leaves.",
    examplesZh: "如：苦荞茶、大麦茶。",
    examplesEn: "e.g. buckwheat tea, barley tea.",
  },
  {
    slug: "substitute-misc",
    sectionId: "substitute",
    nameZh: "其他",
    nameEn: "Others",
    blurbZh: "其他代用茶原料，如叶类等，同样不属于茶科植物。",
    blurbEn:
      "Other non-tea plant materials — leaves and similar — outside Camellia.",
    examplesZh: "如：荷叶茶。",
    examplesEn: "e.g. lotus leaf tea.",
  },
];

const bySlug = new Map(OTHER_SUBCATEGORIES.map((s) => [s.slug, s]));

export function getOtherSubBySlug(slug: string): OtherTea.Subcategory | undefined {
  return bySlug.get(slug);
}

export function isValidOtherSubSlug(slug: string): boolean {
  return bySlug.has(slug);
}

export function subsForSection(id: OtherTea.SectionId): OtherTea.Subcategory[] {
  return OTHER_SUBCATEGORIES.filter((s) => s.sectionId === id);
}

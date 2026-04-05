/** Six main types + Other; carousel uses entries that have imageSrc */
export const TEA_CATEGORIES: Tea.Category[] = [
  {
    slug: "green-tea",
    name: "Green Tea",
    nameZh: "绿茶",
    blurb: "不发酵，清汤绿叶，鲜爽度高。代表如龙井、碧螺春。",
    blurbEn:
      "Unfermented; clear liquor and green leaves; brisk and fresh. Examples: Longjing, Biluochun.",
    imageSrc:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Green tea — loose leaves and pale infusion",
    imageAltZh: "绿茶茶汤与茶叶",
  },
  {
    slug: "white-tea",
    name: "White Tea",
    nameZh: "白茶",
    blurb: "微发酵，素雅清淡。代表如白毫银针、白牡丹。",
    blurbEn:
      "Lightly fermented; delicate and mellow. Examples: Baihao Yinzhen, Bai Mudan.",
    imageSrc:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "White tea — light brew and teaware",
    imageAltZh: "白茶与茶具",
  },
  {
    slug: "yellow-tea",
    name: "Yellow Tea",
    nameZh: "黄茶",
    blurb: "轻发酵闷黄，黄汤黄叶。代表如君山银针、蒙顶黄芽。",
    blurbEn:
      "Light fermentation with “sealed yellowing”; yellow liquor and leaves. Examples: Junshan Yinzhen, Mengding Huangya.",
    imageSrc:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Yellow tea — golden liquor",
    imageAltZh: "黄茶茶汤",
  },
  {
    slug: "oolong-tea",
    name: "Oolong Tea",
    nameZh: "青茶（乌龙茶）",
    blurb: "半发酵乌龙茶，香高味醇。代表如铁观音、大红袍。",
    blurbEn:
      "Semi-fermented wulong; fragrant and full-bodied. Examples: Tieguanyin, Da Hong Pao.",
    imageSrc:
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Oolong tea — gaiwan and rolled leaves",
    imageAltZh: "乌龙茶与盖碗",
  },
  {
    slug: "black-tea",
    name: "Black Tea",
    nameZh: "红茶",
    blurb:
      "全发酵；英语 Black tea 对应中文「红茶」，与黑茶（Dark tea）不同。代表如正山小种、祁门红茶。",
    blurbEn:
      "Fully fermented. In English, “black tea” means Chinese hong cha (红茶), not hei cha (黑茶). Examples: Lapsang Souchong, Keemun.",
    imageSrc:
      "https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Black tea (hong cha) — amber-red infusion",
    imageAltZh: "红茶茶汤",
  },
  {
    slug: "dark-tea",
    name: "Dark Tea",
    nameZh: "黑茶",
    blurb:
      "后发酵；常称 Dark tea 或 Hei cha，以免与英语 Black tea（红茶）混淆。代表如普洱熟茶、安化黑茶。",
    blurbEn:
      "Post-fermented; often called dark tea or hei cha to avoid confusion with English “black tea” (hong cha). Examples: ripe Pu’er, Anhua hei cha.",
    imageSrc:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Dark tea (hei cha) — deep liquor and pressed tea",
    imageAltZh: "黑茶茶汤与茶饼",
  },
  {
    slug: "other",
    name: "Other",
    nameZh: "其他",
    blurb: "花茶、调味茶、再加工茶等，风味多样，随心而饮。",
    blurbEn:
      "Scented, flavored, and reprocessed teas — many styles to explore.",
    imageAlt: "Other tea types",
    imageAltZh: "其他茶类",
  },
];

export const CAROUSEL_SLIDES = TEA_CATEGORIES.filter((c) => c.imageSrc);

const bySlug = new Map(TEA_CATEGORIES.map((c) => [c.slug, c]));

export function getCategoryBySlug(slug: string): Tea.Category | undefined {
  return bySlug.get(slug);
}

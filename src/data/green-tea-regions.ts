/**
 * Schematic map: cx/cy in viewBox 0–1000×680.
 * lng/lat: GCJ-02（国测局坐标），与高德地图一致。
 */
export type GreenTeaMapMarker = {
  id: string;
  lng: number;
  lat: number;
  cx: number;
  cy: number;
  labelDx: number;
  labelDy: number;
  teaZh: string;
  teaEn: string;
  provinceZh: string;
  provinceEn: string;
};

/** Simplified mainland outline for infographic fallback */
export const CHINA_MAINLAND_SCHEMATIC_PATH =
  "M 85 420 C 72 280 195 195 340 188 L 515 182 C 652 178 758 218 835 305 L 895 395 C 918 498 835 598 695 612 L 455 622 C 315 628 175 558 118 468 C 92 432 88 428 85 420 Z";

export const GREEN_TEA_MAP_MARKERS: GreenTeaMapMarker[] = [
  {
    id: "longjing",
    lng: 120.15,
    lat: 30.24,
    cx: 798,
    cy: 352,
    labelDx: 12,
    labelDy: -6,
    teaZh: "西湖龙井",
    teaEn: "Longjing (West Lake)",
    provinceZh: "浙江",
    provinceEn: "Zhejiang",
  },
  {
    id: "biluochun",
    lng: 120.42,
    lat: 31.07,
    cx: 822,
    cy: 338,
    labelDx: 12,
    labelDy: 14,
    teaZh: "碧螺春",
    teaEn: "Biluochun",
    provinceZh: "江苏",
    provinceEn: "Jiangsu",
  },
  {
    id: "huangshan",
    lng: 118.14,
    lat: 30.27,
    cx: 748,
    cy: 392,
    labelDx: -118,
    labelDy: 4,
    teaZh: "黄山毛峰",
    teaEn: "Huangshan Maofeng",
    provinceZh: "安徽",
    provinceEn: "Anhui",
  },
  {
    id: "luan",
    lng: 116.52,
    lat: 31.75,
    cx: 718,
    cy: 378,
    labelDx: -102,
    labelDy: -18,
    teaZh: "六安瓜片",
    teaEn: "Lu'an Guapian",
    provinceZh: "安徽",
    provinceEn: "Anhui",
  },
  {
    id: "xinyang",
    lng: 114.09,
    lat: 32.15,
    cx: 658,
    cy: 362,
    labelDx: -108,
    labelDy: 0,
    teaZh: "信阳毛尖",
    teaEn: "Xinyang Maojian",
    provinceZh: "河南",
    provinceEn: "Henan",
  },
  {
    id: "lushan",
    lng: 116.0,
    lat: 29.58,
    cx: 732,
    cy: 368,
    labelDx: 12,
    labelDy: -22,
    teaZh: "庐山云雾",
    teaEn: "Lushan Yunwu",
    provinceZh: "江西",
    provinceEn: "Jiangxi",
  },
  {
    id: "enshi",
    lng: 109.48,
    lat: 30.28,
    cx: 618,
    cy: 408,
    labelDx: -115,
    labelDy: 8,
    teaZh: "恩施玉露",
    teaEn: "Enshi Yulu",
    provinceZh: "湖北",
    provinceEn: "Hubei",
  },
  {
    id: "mengding",
    lng: 103.08,
    lat: 30.08,
    cx: 528,
    cy: 428,
    labelDx: 12,
    labelDy: -4,
    teaZh: "蒙顶甘露",
    teaEn: "Mengding Ganlu",
    provinceZh: "四川",
    provinceEn: "Sichuan",
  },
  {
    id: "duyun",
    lng: 107.52,
    lat: 26.25,
    cx: 562,
    cy: 462,
    labelDx: 12,
    labelDy: 6,
    teaZh: "都匀毛尖",
    teaEn: "Duyun Maojian",
    provinceZh: "贵州",
    provinceEn: "Guizhou",
  },
];

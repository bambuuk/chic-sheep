import { StaticImageData } from "next/image";

export interface StareSheepInfo {
  title: string;
  description: string;
  features: string[];
  bgColor: string;
  textColor: string;
  img: StaticImageData;
  id: string;
  currentPrice: number;
  royalty: number;
  potentialUpside: number;
}

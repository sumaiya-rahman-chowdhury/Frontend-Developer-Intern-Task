import {  FaHeadset } from "react-icons/fa";
import { PiSealCheckBold } from "react-icons/pi";
import { RiExchangeFundsFill } from "react-icons/ri";

export type Policy = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export const policies: Policy[] = [
  {
    icon: RiExchangeFundsFill,
    title: "Easy Exchange Policy",
    description: "We offer hassle-free exchange policy",
  },
  {
    icon: PiSealCheckBold,
    title: "3 Days Return Policy",
    description: "We provide 3 days free return policy",
  },
  {
    icon: FaHeadset,
    title: "Best customer support",
    description: "We provide 24/7 customer support",
  },
];

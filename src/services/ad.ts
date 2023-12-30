import useSWR from "swr";
import logo from "@/assets/imgs/bian.png";

interface Ad {
  defaultImage: string;
  defaultUrl: string;
}

export const useAd = () => {

  return {
    "defaultImage": logo,
    "defaultUrl": "https://www.binance.com/en"
  };
};

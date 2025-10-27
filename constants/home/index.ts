/* eslint-disable @typescript-eslint/no-unused-vars */
import test1 from "@/public/assets/images/home/edem_testi.jpg";
import test2 from "@/public/assets/images/home/emmanuel_testi.png";
import test3 from "@/public/assets/images/home/amavi_testi.png";
import test4 from "@/public/assets/images/home/all_inclusiveImg.jpeg";
import ghanaFlag from "@/public/assets/images/Flag_of_Ghana.png"
import swizFlag from "@/public/assets/images/switzerland_flag.jpg"
import { StaticImageData } from "next/image";

type Testimonial = {
  id: string;
  img: StaticImageData;
  name: string;
  flag: StaticImageData;
  position: string;
  description: string;
  tripType?: string;
};

export const testimonial_clients: Testimonial[] = [
    
]   
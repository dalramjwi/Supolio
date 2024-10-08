import React from "react";
import { ImgProps } from "../interfaces/molecules/Img.interface";

const Img: React.FC<ImgProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Img;

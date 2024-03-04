import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const PortfolioItem = ({ src }) => {
  return (
    <motion.div 
    whileHover={{scale:[1,1.1]}}
    className="h-[500px] overflow-hidden shadow-lg shadow-gray-500 w-full rounded-lg xl:w-[48%] bg-blue-900">
      <Image src={src} width={500} height={500} className="w-full h-full" />
    </motion.div>
  );
};

export default PortfolioItem;

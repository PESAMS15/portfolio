import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaUserCheck, FaPercent, FaPercentage, FaCheck, FaCheckCircle } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-center gap-6 xl:gap-20">
       
        <Card
          title="Backend Development"
          des=""
          icon={<AiFillAppstore />}
        />
      
        <Card
          title="Api Testing"
          des=""
          icon={<FaCheckCircle />}
        />
        <Card
          title="Web Development"
          des=""
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features
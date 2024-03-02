import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Freelancer"
            subTitle=" Present"
            result="remote"
            des="I currently help individuals or businesses create their apis or websites."
          />
          <ResumeCard
            title="Intern Backend  Developer"
            subTitle="Workbrook - (2023)"
            result="Remote"
            des="I worked as an intern developer at Workbrook helping to manage their api and database for a short period of time"
          />
          <ResumeCard
            title="Intern Instructor"
            subTitle="SQI College of ICT - (2023 - 2024)"
            result="Ibadan"
            des="I worked as an Intern Instructor at SQI college of ICT teaching Node.js."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;

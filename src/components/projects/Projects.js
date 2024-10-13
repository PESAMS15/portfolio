import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Major Projects"
         
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Expense tracker Website"
          des="I created a website with the MERN stack that can be used to track expenses and goals"
          src={projectOne}
          site="https://expense-alpha.vercel.app/"
          repo="expense-tracker-backend"
        />
        <ProjectsCard
          title="Thrift Contributions Website"
          des="I created a website with the MERN stack that can be used to make thrift contributions(Daily, weekly or monthly)"
          src={projectTwo}
          site="https://pgi-alpha.vercel.app"
          repo="PGI"
        />
        <ProjectsCard
          title="Ticket Booking Website"
          des="I created a website with the MERN stack that can be used to book for concert tickets for your favourite celebrities"
          src={projectThree}
          site="https://axc-tickets.vercel.app/"
          repo="axc-frontend"
        />
      
      </div>
    </section>
  );
}

export default Projects
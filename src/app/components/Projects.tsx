import React from "react";
import projectList from "../../../project-list.json";
import Project from "./Project";
import ProjectScroller from "./ProjectScroller";

const Projects = () => {
  return (
    <div className="w-full bg-dark">
      <ProjectScroller />
      <div
        className="flex w-full flex-col max-w-[1280px] mx-auto mt-[232px] p-4 xl:p-0"
        id="projects"
      >
        <h1 className="heading text-gradiant text-center ">Past Projects</h1>
        <div className="w-full mt-[63px]">
          <ul className="w-full flex flex-wrap justify-center gap-[16px] ">
            {projectList.map(({ ...other }) => {
              return <Project {...other} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;

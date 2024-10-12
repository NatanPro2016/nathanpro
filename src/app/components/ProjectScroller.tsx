import React from "react";
import Image from "next/image";
import projectList from "../../../project-list.json";

const ProjectScroller = () => {
  return (
    <div className="w-full overflow-hidden mask ">
      <ul className="flex gap-[10px] w-fit scroll-project p-[10px]">
        {projectList.map((project) => {
          return (
            <li
              className="border border-[#ffffff11] w-fit p-[5px] rounded-[10px]"
              key={project.id}
            >
              <a href={project.link}>
                <div className="flex gap-[6px] p-[5px] ">
                  <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
                  <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
                  <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
                </div>
                <div className="relative h-[374px] w-[545px] ">
                  <Image
                    src={project.img}
                    alt="project"
                    fill
                    sizes="(max-width:545px) , 100vw , 1000px"
                    className="h-[374px] w-[545px] object-cover aspect-auto rounded-[6px]"
                  />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectScroller;

import React from "react";
import Image from "next/image";

const ProjectScroller = () => {
  return (
    <div className="w-full overflow-hidden mask ">
      <ul className="flex gap-[10px] w-fit scroll-project p-[10px]">
        <li className="border border-[#ffffff11] w-fit p-[5px] rounded-[10px]">
          <a href="https://landing-pagenft.netlify.app/">
            <div className="flex gap-[6px] p-[5px] ">
              <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
              <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
              <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
            </div>
            <div className="relative h-[374px] w-[545px] ">
              <Image
                src={"/project-1.png"}
                alt="project"
                fill
                sizes="(max-width:545px) , 100vw , 1000px"
                className="h-[374px] w-[545px] object-cover rounded-[6px]"
              />
            </div>
          </a>
        </li>
        <li className="border border-[#ffffff11] w-fit p-[5px] rounded-[10px]">
          <a href="https://encantio-web.netlify.app/">
            <div className="flex gap-[6px] p-[5px] ">
              <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
              <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
              <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
            </div>
            <div className="relative h-[374px] w-[545px] ">
              <Image
                src={"/project-2.png"}
                alt="project"
                fill
                sizes="(max-width:545px) , 100vw , 1000px"
                className="h-[374px] w-[545px] object-cover rounded-[6px]"
              />
            </div>
          </a>
        </li>
        <li className="border border-[#ffffff11] w-fit p-[5px] rounded-[10px]">
          <div className="flex gap-[6px] p-[5px] ">
            <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
            <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
            <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
          </div>
          <div className="relative h-[374px] w-[545px] ">
            <Image
              src={"/project-3.png"}
              alt="project"
              fill
              sizes="(max-width:545px) , 100vw , 1000px"
              className="h-[374px] w-[545px] object-cover rounded-[6px]"
            />
          </div>
        </li>
        <li className="border border-[#ffffff11] w-fit p-[5px] rounded-[10px]">
          <div className="flex gap-[6px] p-[5px] ">
            <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
            <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
            <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
          </div>
          <div className="relative h-[374px] w-[545px] ">
            <Image
              src={"/projects.png"}
              alt="project"
              fill
              sizes="(max-width:545px) , 100vw , 1000px"
              className="h-[374px] w-[545px] object-cover rounded-[6px]"
            />
          </div>
        </li>
        {/* scroll second round */}
        <li className="border border-[#ffffff11] w-fit p-[5px] rounded-[10px]">
          <a href="https://landing-pagenft.netlify.app/">
            <div className="flex gap-[6px] p-[5px] ">
              <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
              <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
              <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
            </div>
            <div className="relative h-[374px] w-[545px] ">
              <Image
                src={"/project-1.png"}
                alt="project"
                fill
                sizes="(max-width:545px) , 100vw , 1000px"
                className="h-[374px] w-[545px] object-cover rounded-[6px]"
              />
            </div>
          </a>
        </li>
        <li className="border border-[#ffffff11] w-fit p-[5px] rounded-[10px]">
          <a href="https://encantio-web.netlify.app/">
            <div className="flex gap-[6px] p-[5px] ">
              <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
              <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
              <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
            </div>
            <div className="relative h-[374px] w-[545px] ">
              <Image
                src={"/project-2.png"}
                alt="project"
                fill
                sizes="(max-width:545px) , 100vw , 1000px"
                className="h-[374px] w-[545px] object-cover rounded-[6px]"
              />
            </div>
          </a>
        </li>
        <li className="border border-[#ffffff11] w-fit p-[5px] rounded-[10px]">
          <div className="flex gap-[6px] p-[5px] ">
            <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
            <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
            <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
          </div>
          <div className="relative h-[374px] w-[545px] ">
            <Image
              src={"/project-3.png"}
              alt="project"
              fill
              sizes="(max-width:545px) , 100vw , 1000px"
              className="h-[374px] w-[545px] object-cover rounded-[6px]"
            />
          </div>
        </li>
        <li className="border border-[#ffffff11] w-fit p-[5px] rounded-[10px]">
          <div className="flex gap-[6px] p-[5px] ">
            <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
            <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
            <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
          </div>
          <div className="relative h-[374px] w-[545px] ">
            <Image
              src={"/projects.png"}
              alt="project"
              fill
              sizes="(max-width:545px) , 100vw , 1000px"
              className="h-[374px] w-[545px] object-cover rounded-[6px]"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectScroller;

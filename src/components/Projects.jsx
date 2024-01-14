import React from "react";
import ProjectImage1 from "../assets/projectIMG_1.jpg";
import ProjectImage2 from "../assets/projectIMG_2.jpg";
import ProjectImage3 from "../assets/projectIMG_3.jpg";
import ProjectImage4 from "../assets/projectIMG_4.jpg";
import ProjectImage5 from "../assets/projectIMG_5.jpg";
import ProjectImage6 from "../assets/projectIMG_6.jpg";
import ProjectImage7 from "../assets/projectIMG_7.jpg";
import ProjectImage8 from "../assets/projectIMG_8.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: ProjectImage1,
    },
    {
      id: 2,
      src: ProjectImage2,
    },
    {
      id: 3,
      src: ProjectImage3,
    },
    {
      id: 4,
      src: ProjectImage4,
    },
    {
      id: 5,
      src: ProjectImage5,
    },
    {
      id: 6,
      src: ProjectImage6,
    },
    {
      id: 7,
      src: ProjectImage7,
    },
    {
      id: 8,
      src: ProjectImage8,
    },
  ];
  return (
    <div
      name="Projects"
      className="w-full bg-gradient-to-b from-teal-100 to-white md:h-screen"
    >
      <div className="max-w-screen-2xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-black">
            My Projects
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src }) => (
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" px-6 py-3 m-4 duration-200 hover:scale-105">
                  Description and Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

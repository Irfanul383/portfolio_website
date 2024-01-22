import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../custom.css";
import ProjectVideo1 from "../assets/CigsCounter Sample video.mp4";
import ProjectVideo2 from "../assets/Traffic jumper sample video.mp4";
import ProjectVideo3 from "../assets/Traffic jumper sample video.mp4";
import ProjectVideo4 from "../assets/User_review_website.mp4";
import ProjectVideo5 from "../assets/AI Assignment 1.mkv";
import ProjectVideo6 from "../assets/AI Assignment 2.mkv";
import ProjectVideo7 from "../assets/AI Assignment 3.mkv";
import ProjectVideo8 from "../assets/AI Assignment 4.mkv";
import ProjectVideo9 from "../assets/AI Assignment 5.mkv";
const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const personalProjects = [
    {
      id: 1,
      src: ProjectVideo1,
      githubUrl: "https://github.com/Irfanul383/CigsCounter",
    },
    {
      id: 2,
      src: ProjectVideo2,
      githubUrl: "https://github.com/Irfanul383/traffic-jumper-pc",
    },
    {
      id: 3,
      src: ProjectVideo3,
      githubUrl: "https://github.com/Irfanul383/portfolio_website",
    },
  ];

  const schoolProjects = [
    {
      id: 4,
      src: ProjectVideo4,
      githubUrl: "https://github.com/Irfanul383/User-Review-Website",
    },
    {
      id: 5,
      src: ProjectVideo5,
      githubUrl: "https://github.com/Irfanul383/Intro-to-AI-course-assignments",
    },
    {
      id: 6,
      src: ProjectVideo6,
      githubUrl: "https://github.com/Irfanul383/Intro-to-AI-course-assignments",
    },
    {
      id: 7,
      src: ProjectVideo7,
      githubUrl: "https://github.com/Irfanul383/Intro-to-AI-course-assignments",
    },
    {
      id: 8,
      src: ProjectVideo8,
      githubUrl: "https://github.com/Irfanul383/Intro-to-AI-course-assignments",
    },
    {
      id: 9,
      src: ProjectVideo9,
      githubUrl: "https://github.com/Irfanul383/Intro-to-AI-course-assignments",
    },
  ];
  return (
    <div
      name="Projects"
      className="w-full bg-gradient-to-b from-teal-100 to-white md:h-screen"
    >
      <div className="max-w-screen-2xl p-4 mx-auto w-full h-full flex flex-col md:flex-row justify-center items-center md:justify-between md:max-w-screen-2xl sm:max-w-screen-sm">
        {/* Personal Projects Section */}
        <div className="w-full md:w-auto md:max-w-[682px] md:pr-4 pb-8">
          <p className="text-3xl font-bold">Personal Projects</p>
          <Slider {...settings}>
            {personalProjects.map(({ id, src, githubUrl }) => (
              <div key={id} className="p-3">
                <div className="shadow-md shadow-gray-600 rounded-lg">
                  <video
                    src={src}
                    alt={`Project ${id}`}
                    className="w-full md:max-h-96 md:max-w-full h-auto rounded-md object-contain"
                    autoPlay
                    loop
                    muted
                  />
                  <div className="flex items-center justify-center">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white rounded-md px-4 md:px-6 py-2 md:py-3 m-2 md:m-4"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* School Projects Section */}
        <div className="w-full md:w-1/2 md:pl-4 pb-8">
          <p className="text-3xl font-bold">School Projects</p>
          <Slider {...settings}>
            {schoolProjects.map(
              (
                { id, src, githubUrl } // Ensure githubUrl is destructured here
              ) => (
                <div key={id} className="p-3">
                  <div className="shadow-md shadow-gray-600 rounded-lg">
                    <video
                      src={src}
                      alt={`Project ${id}`}
                      className="rounded-md"
                      autoPlay
                      loop
                      muted
                    />
                    <div className="flex items-center justify-center">
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white rounded-md px-4 md:px-6 py-2 md:py-3 m-2 md:m-4"
                      >
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;

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
      description:
        "Developed 'AR Counter 'an innovative Unity 3D app leveraging the Vuforia API for image processing to recognize and count cigarette stock at a gas station where I work part-time. This project showcases my expertise in augmented reality and computer vision, significantly reducing inventory recording times and contributing to operational efficiency. I designed and tested a prototype version in a real-world setting, demonstrating my ability to implement practical solutions that streamline everyday tasks.",
    },
    {
      id: 2,
      src: ProjectVideo2,
      githubUrl: "https://github.com/Irfanul383/traffic-jumper-pc",
      description:
        "Created a dynamic 2D game using the Unity game engine in C#, where players dodge traffic by moving aside or jumping over obstacles. This project highlights my skills in object-oriented programming and game development. I also built and tested the user interface using Unity's UI Builder and UI Debugger, ensuring a smooth and engaging player experience.",
    },
    {
      id: 3,
      src: "ProjectVideo3",
      githubUrl: "https://github.com/Irfanul383/portfolio_website",
      description:
        "Developed a responsive portfolio website, irfanul.com, using React.js and Tailwind CSS to showcase my projects and skills. Employed DevOps practices by creating a CI/CD pipeline with GitHub Actions for automated deployments, leveraging Docker containerization on AWS EC2. Enhanced the site's security and reliability by integrating an SSL certificate through AWS Certificate Manager and utilizing AWS Elastic Load Balancer for efficient traffic management. Hosted the website on a custom domain through AWS Route 53, ensuring professional and seamless access.",
    },
  ];

  const schoolProjects = [
    {
      id: 4,
      src: ProjectVideo4,
      githubUrl: "https://github.com/Irfanul383/User-Review-Website",
      description:
        "As the Front-End Developer, I led the development of a scalable website, optimizing workflow through collaborative development and version control using Git. I spearheaded team-based development, ensuring smooth integration of components, conducted comprehensive unit testing. I actively led SCRUM meetings, provided thorough code reviews, and maintained high standards of code quality. Additionally, I regularly communicated with the course professor to present updates and gather feedback, ensuring the project met academic and professional standards.",
    },
    {
      id: 5,
      src: ProjectVideo5,
      githubUrl: "https://github.com/Irfanul383/Intro-to-AI-course-assignments",
      description:
        "Implemented pathfinding search algorithms in a grid-based environment, developing the Search_Student class to conduct searches using Breadth-First Search (BFS) or Depth-First Search (DFS) based on the provided configuration.",
    },
    {
      id: 6,
      src: ProjectVideo6,
      githubUrl: "https://github.com/Irfanul383/Intro-to-AI-course-assignments",
      description:
        "I implemented advanced pathfinding algorithms in a grid-based environment. The Search_Student class performs searches using the A* algorithm, accommodating different agent sizes and heuristic functions.",
    },
    {
      id: 7,
      src: ProjectVideo7,
      githubUrl: "https://github.com/Irfanul383/Intro-to-AI-course-assignments",
      description:
        "I implemented Iterative Deepening Alpha-Beta (IDAB) pruning in a Connect Four game. The Player_Student class is designed to find the best action for a player using IDAB within specified time and depth constraints.",
    },
    {
      id: 8,
      src: ProjectVideo8,
      githubUrl: "https://github.com/Irfanul383/Intro-to-AI-course-assignments",
      description:
        " I developed a Genetic Algorithm (GA) to solve Sudoku puzzles. The project involved implementing the GA in the GA_Student.js file, where the algorithm evolves a population of potential solutions (Sudoku grids) towards an optimal or near-optimal solution.",
    },
    {
      id: 9,
      src: ProjectVideo9,
      githubUrl: "https://github.com/Irfanul383/Intro-to-AI-course-assignments",
      description:
        " I implemented a Reinforcement Learning (RL) algorithm in a grid-based environment. The RL_Student.js file contains the code for the RL agent, which learns to navigate the environment using Q-learning, a popular RL algorithm.",
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
            {personalProjects.map(({ id, src, githubUrl, description }) => (
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
                  <div className="flex items-center justify-center py-2 px-3">
                    <p>{description}</p>
                  </div>
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
                { id, src, githubUrl, description } // Ensure githubUrl is destructured here
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
                    <div className="flex items-center justify-center py-2 px-3">
                      <p>{description}</p>
                    </div>
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

import React from "react";
import Photo from "../assets/photo.jpg";
import {
  IoIosArrowForward,
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosMail,
  IoIosDocument,
} from "react-icons/io";

const About = () => {
  return (
    <div
      name="About"
      className="h-screen w-full bg-gradient-to-b from-teal-100 to-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px4 md:flex-row">
        <div className="flex flex-col px-2 justify-center h-full">
          <h2 className="text-3xl sm:text-3xl font-bold">
            Third year student at Memorial University of Newfoundland with a
            Computer Science major and Mathematics Minor
          </h2>
          <p className="text-grey-700 py-2 max-w-md">
            👋 Hi there! I'm Mohammed Irfanul Haque, a dedicated and passionate
            software developer with a strong foundation in full-stack
            development, cloud technologies, and DevOps practices. I'm currently
            pursuing a Bachelor of Science in Computer Science with a minor in
            Mathematics at Memorial University of Newfoundland.
          </p>
          <p className="text-grey-700  max-w-md">
            🚀 What I Bring to the Table:
          </p>
          <p className="text-grey-700 py-1 max-w-md">
            Full-Stack Development: Proficient in front-end technologies like
            Bootstrap and Tailwind CSS, and back-end frameworks including
            ExpressJS, MongoDB, and NodeJS.{" "}
          </p>
          <p className="text-grey-700 py-1 max-w-md">
            Cloud Expertise: Hands-on experience with AWS services such as EC2,
            ELB, Route 53, and Amplify. I've implemented CI/CD pipelines with
            GitHub Actions and Docker, ensuring streamlined deployments and
            scalable applications.
          </p>
          <p className="text-grey-700 py-1 max-w-md">
            DevOps Skills: Experienced in setting up and maintaining CI/CD
            pipelines, utilizing Docker for containerization, and employing
            GitHub Actions for continuous integration.
          </p>
          <p className="text-grey-700 py-1 max-w-md">
            Mobile Development: Developed cross-platform mobile applications
            using React Native and Expo, integrating complex APIs and managing
            data with MongoDB Atlas.
          </p>
          <div className="flex space-x-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/irfanh383/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin
                size={30}
                className="text-black hover:text-teal-600 cursor-pointer"
              />
              <span className="text-gray-700 font-bold ml-1"></span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Irfanul383"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub
                size={30}
                className="text-black hover:text-teal-600 cursor-pointer"
              />
              <span className="text-gray-700 font-bold ml-1"></span>
            </a>

            {/* Email */}
            <a href="mailto:irfanulhaque900@gmail.com">
              <IoIosMail
                size={30}
                className="text-black hover:text-teal-600 cursor-pointer"
              />
              <span className="text-gray-700 font-bold ml-1"></span>
            </a>

            {/* Resume PDF */}
            <a
              href="/General format .pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosDocument
                size={30}
                className="text-black hover:text-teal-600 cursor-pointer"
              />
              <span className="text-gray-700 font-bold ml-1"></span>
            </a>
          </div>
          <div>
            <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-black text-white cursor-pointer">
              Next
              <span className="group-hover:rotate-90 duration-200">
                <IoIosArrowForward size={15} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src={Photo}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

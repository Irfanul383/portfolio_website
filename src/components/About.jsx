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
      className="min-h-screen w-full bg-gradient-to-b from-teal-100 to-white flex flex-col justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row md:space-x-8">
        <div className="flex flex-col px-2 py-4 md:py-0 justify-center text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Third-year student at Memorial University of Newfoundland with a
            Computer Science Major and Mathematics Minor
          </h2>
          <p className="text-gray-700 py-2 max-w-md">
            👋 Hi there! I'm Mohammed Irfanul Haque, a dedicated and passionate
            software developer with a strong foundation in full-stack
            development, cloud technologies, and DevOps practices. I'm currently
            pursuing a Bachelor of Science in Computer Science with a minor in
            Mathematics at Memorial University of Newfoundland.
          </p>
          <p className="text-gray-700 max-w-md">
            🚀 What I Bring to the Table:
          </p>
          <p className="text-gray-700 py-1 max-w-md">
            Full-Stack Development: Proficient in front-end technologies like
            Bootstrap and Tailwind CSS, and back-end frameworks including
            ExpressJS, MongoDB, and NodeJS.
          </p>
          <p className="text-gray-700 py-1 max-w-md">
            Cloud Expertise: Hands-on experience with AWS services, including
            EC2, Auto Scaling Groups, and Application Load Balancers (ALBs).
            Configured secure and scalable infrastructures within a VPC,
            implementing security measures with SSL/TLS encryption and
            controlled access through security groups, and maintaining high
            availability through dynamic scaling and traffic distribution
          </p>
          <p className="text-gray-700 py-1 max-w-md">
            DevOps Skills: Experienced in setting up and managing CI/CD
            pipelines using GitHub Actions for automated deployments and
            testing. Proficient in utilizing Docker for containerization,
            ensuring consistency and reliability across environments.
          </p>
          <p className="text-gray-700 py-1 max-w-md">
            Mobile Development: Developed cross-platform mobile applications
            using React Native and Expo, integrating complex APIs and managing
            data with MongoDB Atlas.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
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
            </a>

            {/* Email */}
            <a href="mailto:irfanulhaque900@gmail.com">
              <IoIosMail
                size={30}
                className="text-black hover:text-teal-600 cursor-pointer"
              />
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
            </a>
          </div>
          <div className="mt-4">
            <button className="group w-fit px-6 py-3 flex items-center rounded-md bg-black text-white cursor-pointer">
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

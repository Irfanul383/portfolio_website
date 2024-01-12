import React from "react";
import { IoIosSchool, IoMdRibbon } from "react-icons/io";
import {
  FaUnity,
  FaRegEye,
  FaCode,
  FaDatabase,
  FaPencilRuler,
} from "react-icons/fa";

const Qualifications = () => {
  return (
    <div
      name="education"
      className="h-screen w-full bg-gradient-to-b from-teal-100 to-white"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row">
        <div className="Education-section w-1/3 shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
          <h2 className="text-3xl sm:text-4xl font-bold">Education</h2>
          <div className="text-grey-700 py-3">
            <ul className="Education-list">
              <li className="flex items-top py-3 text-lg">
                <div className="flex-shrink-0">
                  <IoIosSchool size={30} className="text-black mr-2" />
                </div>
                <div>
                  Bachelor of Science - Computer Science Major & Mathematics
                  Minor at Memorial University of Newfoundland
                </div>
              </li>
              <li className="flex items-top py-3 text-lg">
                <div className="flex-shrink-0">
                  <IoIosSchool size={30} className="text-black mr-2" />
                </div>
                <div>O-levels and A-levels from Pearson Education</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="Certification-section ml-10 w-1/3 shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
          <h2 className="flex flex-row text-3xl sm:text-4xl font-bold">
            Certifications
          </h2>
          <div className="text-grey-700 py-4">
            <ul className="Certification-list">
              <li className="flex items-top py-3 text-lg">
                <div className="flex-shrink-0">
                  <IoMdRibbon size={25} className="text-black mr-2" />
                </div>
                <div>
                  Amazon Web Services CLF-002 Cloud Practitioner Certificate
                </div>
              </li>
              <li className="flex items-top py-3 text-lg">
                <div className="flex-shrink-0">
                  <IoMdRibbon size={25} className="text-black mr-2" />
                </div>
                <div>
                  Udemy Ultimate AWS Certified Cloud Practitioner CLF-C02 by
                  Stephane Maarek Incentive Program Gold Level
                </div>
              </li>
              <li className="flex items-top py-3 text-lg">
                <div className="flex-shrink-0">
                  <IoMdRibbon size={25} className="text-black mr-2" />
                </div>
                <div>
                  Student Volunteer Bureau Volunteer Incentive Program Gold
                  Level
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="skills-section ml-10 w-1/3 shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
          <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
          <div className="text-grey-700 py-4">
            <ul className="skills-list">
              <li className="flex items-center py-3 text-lg">
                <div className="flex-shrink-0">
                  <FaUnity size={25} className="mr-2" />
                </div>
                <div>Unity Game Development</div>
              </li>
              <li className="flex items-center py-3 text-lg">
                <div className="flex-shrink-0">
                  <FaRegEye size={25} className="mr-2" />
                </div>
                <div>Augmented Reality</div>
              </li>
              <li className="flex items-center py-3 text-lg">
                <div className="flex-shrink-0">
                  <FaCode size={25} className="mr-2" />
                </div>
                <div>Web Technologies (React, Bootstrap, Tailwind CSS)</div>
              </li>
              <li className="flex items-center py-3 text-lg">
                <div className="flex-shrink-0">
                  <FaDatabase size={20} className="mr-2" />
                </div>
                <div>SQL Queries for Data Optimization</div>
              </li>
              <li className="flex items-center py-3 text-lg">
                <div className="flex-shrink-0">
                  <FaPencilRuler size={20} className="mr-2" />
                </div>
                <div>Graphic Design</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;

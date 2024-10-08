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
      name="Qualifications"
      className="w-full bg-gradient-to-b from-teal-100 to-white py-10 md:h-screen  mt-5 mb-5 md:mt-0 md:mb-0"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row md:space-y-0 space-y-10">
        {/* Qualification Section 1 */}
        <div className="Education-section bg-gradient-to-b from-white to-teal-100 mx-10 shadow-md shadow-gray-600 rounded-lg duration-200  md:w-1/3">
          <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
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
        <div className="Certification-section bg-gradient-to-b from-white to-teal-100 mx-10 shadow-md shadow-gray-600 rounded-lg duration-200  md:w-1/3">
          <h2 className="flex flex-row text-2xl sm:text-3xl font-bold">
            Certifications
          </h2>
          <div className="text-grey-700 py-4">
            <ul className="Certification-list">
              <li className="flex items-top py-3 text-lg">
                <div className="flex-shrink-0">
                  <IoMdRibbon size={25} className="text-black mr-2" />
                </div>
                <div>
                  Amazon Web Services SAA- C03 Solution Architect Associate
                  Certificate (Sep 2024)
                </div>
              </li>
              <li className="flex items-top py-3 text-lg">
                <div className="flex-shrink-0">
                  <IoMdRibbon size={25} className="text-black mr-2" />
                </div>
                <div>
                  Amazon Web Services CLF-002 Cloud Practitioner Certificate
                  (May 2024)
                </div>
              </li>
              <li className="flex items-top py-3 text-lg">
                <div className="flex-shrink-0">
                  <IoMdRibbon size={25} className="text-black mr-2" />
                </div>
                <div>
                  Udemy Ultimate AWS Certified Solution Architect Associate
                  SAA-C03 by Stephane Marek ( Aug 2024)
                </div>
              </li>
              <li className="flex items-top py-3 text-lg">
                <div className="flex-shrink-0">
                  <IoMdRibbon size={25} className="text-black mr-2" />
                </div>
                <div>
                  Udemy Ultimate AWS Certified Cloud Practitioner CLF-C02 by
                  Stephane Marek (Jan 2024)
                </div>
              </li>
              <li className="flex items-top py-3 text-lg">
                <div className="flex-shrink-0">
                  <IoMdRibbon size={25} className="text-black mr-2" />
                </div>
                <div>
                  Student Volunteer Bureau Volunteer Incentive Program Gold (Apr
                  2023) Level
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="skills-section shadow-md bg-gradient-to-b from-white to-teal-100 mx-10 shadow-gray-600 rounded-lg duration-200  md:w-1/3">
          <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
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
                <div>
                  Web Technologies (Javascript, ExpressJS,Node, React, NextJS,
                  Typescript, Bootstrap, Tailwind CSS)
                </div>
              </li>
              <li className="flex items-center py-3 text-lg">
                <div className="flex-shrink-0">
                  <FaDatabase size={20} className="mr-2" />
                </div>
                <div>SQL Queries and GraphQL for Data Optimization</div>
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

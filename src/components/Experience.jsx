import React from "react";

const Experience = () => {
  return (
    <div
      name="Experience"
      className="w-full bg-gradient-to-b from-teal-100 to-white md:h-screen mt-5 mb-5 md:mt-0 md:mb-0"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row md:space-y-0 space-y-10">
        {/* Experience Section 1 */}
        <div className="Experience-section bg-gradient-to-b from-white to-teal-100 mx-10 shadow-md shadow-gray-600 rounded-lg duration-200  md:w-1/3">
          <h2 className="text-2xl m-4 sm:text-3xl font-bold">
            Full-Stact developer | Muslim Student Association, Memorial
            University of Newfoundland (Dec 2023 - Current)
          </h2>
          <div className="m-4 text-grey-700 py-3">
            <p>
              In this volunteer position, I am responsible for utilizing the
              Bootstrap framework to enhance the website's design and
              responsiveness. My role involves crafting interactive and dynamic
              sections for events using React components and regularly updating
              the website content to ensure it mirrors the latest information
              and activities of the organization.
            </p>
          </div>
          <div className="skills-learned">
            <h3 className="m-4 text-1xl font-bold">Skills Learned:</h3>
            <ul className="m-4">
              <li>* Web Design using Bootstrap</li>
              <li>* UI Development with React</li>
              <li>* Web Maintenance</li>
            </ul>
          </div>
        </div>
        {/* Experience Section 2 */}
        <div className="Experience-section bg-gradient-to-b from-white to-teal-100 mx-10 shadow-md shadow-gray-600 rounded-lg duration-200 md:w-1/3">
          <h2 className="text-2xl m-4 sm:text-3xl font-bold">
            Admissions Department Student Assistant | Memorial University of
            Newfoundland (Oct 2021-Current)
          </h2>
          <div className="m-4 text-grey-700 py-3">
            <p>
              In this role at Memorial University of Newfoundland, I developed
              and maintained structured Excel sheets for student applications
              and office inventory, designed optimized SQL queries for data
              retrieval, and streamlined data management processes.
            </p>
          </div>
          <div className="skills-learned">
            <h3 className="m-4 text-1xl font-bold">Skills Learned:</h3>
            <ul className="m-4">
              <li>* Excel Sheet Management and Optimization</li>
              <li>* SQL Query Optimization</li>
              <li>* Data Management</li>
            </ul>
          </div>
        </div>
        {/* Experience Section 3 */}
        <div className="Experience-section bg-gradient-to-b from-white to-teal-100 mx-10 shadow-md shadow-gray-600 rounded-lg duration-200 md:w-1/3">
          <h2 className="text-2xl m-4 sm:text-3xl font-bold">
            Graphic Coordinator | Student Volunteer Bureau, Memorial University
            of Newfoundland (Sep 2022-Apr 2023)
          </h2>
          <div className="m-4 text-grey-700 py-3">
            <p>
              Serving as the Graphic Coordinator at the Student Volunteer
              Bureau, Memorial University of Newfoundland, I led a graphic
              design team, coordinated with event facilitators for design
              alignment, and supported students in volunteering activities.
            </p>
          </div>
          <div className="skills-learned">
            <h3 className="m-4 text-1xl font-bold">Skills Learned:</h3>
            <ul className="m-4">
              <li>* Graphic Design</li>
              <li>* Coordination and Communication</li>
              <li>* Volunteer and Community Engagement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

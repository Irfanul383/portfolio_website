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
            Full-Stack developer | Muslim Student Association, Memorial
            University of Newfoundland (Dec 2023 - Current)
          </h2>
          <div className="m-4 text-grey-700 py-3">
            <p>
              As a Full-Stack Developer for the Muslim Student Association at
              Memorial University of Newfoundland, I developed and maintained a
              NextJS app using JavaScript and TypeScript within an Agile team. I
              employed the Bootstrap framework for front-end styling and used
              React components for modular, dynamic user interfaces. The app
              featured secure JWT and OAuth user authentication using the MERN
              stack and was hosted on AWS Amplify with a CI/CD pipeline for
              streamlined deployment. I also created comprehensive codebase
              documentation to facilitate onboarding for new developers.
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
              As a Student Assistant at the Registrar’s Office at Memorial
              University of Newfoundland, I automated data entry forms for
              student applications using VBA and SQL in MS Access. I also
              streamlined the import and export of student application data
              between MS Excel and the MS Access relational database, creating
              efficient forms with VBA to enhance data management processes.
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

import React from 'react';
import { IoIosSchool, IoMdRibbon } from 'react-icons/io';

const Qualifications = () => {
	return (
		<div name="education" className="h-screen w-full bg-gradient-to-b from-teal-100 to-white">
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="education-section">
					<h2 className="text-3xl sm:text-4xl font-bold">Education</h2>
					<div className="text-grey-700 py-4">
						<p>
							<IoIosSchool size={30} className="text-black mr-2" />
							Bachelor of Science - Computer Science Major & Mathematics Minor
						</p>

						<p className="pl-8">Memorial University of Newfoundland, GPA 3.55</p>
						<p className="pl-8">September 2021 - Current</p>

						<p>
							<IoIosSchool size={30} className="text-black mr-2" />
							Completed O-levels and A-levels
						</p>
						<p className="pl-8">Pearson Edexcel Education</p>
					</div>
				</div>

				<div className="certifications-section">
					<h2 className="text-3xl sm:text-4xl font-bold">Certifications</h2>
					<div className="text-grey-700 py-4">
						<p>
							<IoMdRibbon size={30} className="text-black mr-2" />
							Amazon Web Services CLF-002 Cloud Practitioner Certificate
						</p>
						<p className="mt-4">
							<IoMdRibbon size={30} className="text-black mr-2" />
							Udemy Ultimate AWS Certified Cloud Practitioner CLF-C02 by Stephane Maarek
						</p>
						<p className="mt-4">
							<IoMdRibbon size={30} className="text-black mr-2" />
							Student Volunteer Bureau Volunteer Incentive Program Gold Level
						</p>
					</div>
				</div>

				<div className="skills-section">
					<h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
					<div className="text-grey-700 py-4">
						{/* List of skills here */}
						<ul>
							<li>Unity Game Development</li>
							<li>Augmented Reality</li>
							<li>Web Technologies (React, Bootstrap, Tailwind CSS)</li>
							<li>SQL Queries for Data Optimization</li>
							<li>Graphic Design</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Qualifications;

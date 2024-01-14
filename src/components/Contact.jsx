import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-b from-teal-100 to-white p-4 text-black"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-full p-4 ">
        <div className="pb-8 px-5 w-full md:w-1/3">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-3">Submit the form to send me an email</p>
          <div className="flex justify-center items-center ">
            <form
              action="https://getform.io/f/367f7213-222e-4160-9271-9cc2d8e45fa1"
              method="POST"
              className="flex flex-col w-full"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <textarea
                name="message"
                rows="10"
                placeholder="Enter your message"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              ></textarea>
              <button className="w-fit px-6 py-3 my-8 flex items-center rounded-md bg-black text-white hover:scale-110 duration-200">
                Email Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

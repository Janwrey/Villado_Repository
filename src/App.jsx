import { useState } from "react";

function App() {
  const [MainPage, ChangePage] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex items-center justify-between p-4 shadow-md bg-white">
        <div className="text-xl font-bold text-blue-600">MC UFlix</div>

        <div className="flex gap-4">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${
              MainPage === "home"
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-blue-100 hover:bg-blue-300"
            }`}
            onClick={() => ChangePage("home")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 
          1.591 0L21.75 12M4.5 9.75v10.125c0 
          .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
          1.125-1.125h2.25c.621 0 1.125.504 
          1.125 1.125V21h4.125c.621 0 1.125-.504 
          1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </button>

          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${
              MainPage === "about"
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-green-100 hover:bg-green-300"
            }`}
            onClick={() => ChangePage("about")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 
          1.063.852l-.708 2.836a.75.75 0 0 0 
          1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 
          9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            About
          </button>

          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${
              MainPage === "contact"
                ? "bg-purple-500 text-white hover:bg-purple-600"
                : "bg-purple-100 hover:bg-purple-300"
            }`}
            onClick={() => ChangePage("contact")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 
          2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 
          1.293c-.282.376-.769.542-1.21.38a12.035 
          12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 
          3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 
          2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            Contact
          </button>
        </div>
      </nav>

      {/* THIS IS THE CONTENTS */}
      <div className="flex flex-col items-center justify-right py-20">
        {MainPage === "home" && (
          <div className="w-full">
            <div className="bg-[#63635f] p-20 m-7 mt-10 shadow-md rounded-md text-white">
              <h1 className="flex justify-center text-5xl m-5 text-center font-bold">
                Welcome to MC UFlix!
              </h1>
              <p className="text-center text-lg font-semibold">
                Watch and Enjoy Movies from MCU!
              </p>
              <div className="flex justify-center">
                <button className="bg-[#2b2467] px-7 py-3 my-5 font-bold cursor-pointer rounded-full hover:bg-[#3d3396]">
                  Start Watching!
                </button>
              </div>
            </div>

            <div className="m-5">
              <p className="text-left text-xl font-bold p-2 pb-5 text-black">
                Featured Movies
              </p>
              <div className="p-2 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
                <img
                  src="/sample_tailwind.jpg"
                  alt="Sample Poster"
                  className="mx-auto rounded-lg shadow-lg w-64 h-auto"
                />
                <img
                  src="/sample_tailwind.jpg"
                  alt="Sample Poster"
                  className="mx-auto rounded-lg shadow-lg w-64 h-auto"
                />
                <img
                  src="/sample_tailwind.jpg"
                  alt="Sample Poster"
                  className="mx-auto rounded-lg shadow-lg w-64 h-auto"
                />
                <img
                  src="/sample_tailwind.jpg"
                  alt="Sample Poster"
                  className="mx-auto rounded-lg shadow-lg w-64 h-auto"
                />
                <img
                  src="/sample_tailwind.jpg"
                  alt="Sample Poster"
                  className="mx-auto rounded-lg shadow-lg w-64 h-auto"
                />
              </div>
            </div>
          </div>
        )}

        {MainPage === "about" && (
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg font-semibold">
              MC UFlix is your hub for Manila Central University movies and
              series. Stream and Enjoy MC UFlix anytime!
            </p>
          </div>
        )}

        {MainPage === "contact" && (
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg font-semibold">
              📧 Email: janvillado04@gmail.com
            </p>
            <p className="text-lg font-semibold">📞 Phone: 0951 504 9676</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

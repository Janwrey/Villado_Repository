import React, { useState } from "react";

function Sample() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="bg-[#6f6f6c] min-h-screen">
      {/* Navbar */}
      <nav className="w-full bg-[#63635f] shadow-md fixed top-0 left-0 z-10">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-violet-800">MC UFlix</div>

            <ul className="flex space-x-6 items-center">
              <li>
                <button
                  onClick={() => setActivePage("home")}
                  className={`flex items-center gap-1 ${
                    activePage === "home"
                      ? "text-indigo-900 font-bold"
                      : "text-indigo-700 hover:text-stone-800"
                  }`}
                >
                  {/* Home Icon */}
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
                      1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 
                      1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
                      1.125-1.125h2.25c.621 0 1.125.504 
                      1.125 1.125V21h4.125c.621 0 1.125-.504 
                      1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage("about")}
                  className={`flex items-center gap-1 ${
                    activePage === "about"
                      ? "text-indigo-900 font-bold"
                      : "text-indigo-700 hover:text-stone-800"
                  }`}
                >
                  {/* About Icon */}
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
                      d="m11.25 11.25.041-.02a.75.75 0 0 
                      1 1.063.852l-.708 2.836a.75.75 0 0 
                      0 1.063.853l.041-.021M21 12a9 9 0 1 
                      1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage("contact")}
                  className={`flex items-center gap-1 ${
                    activePage === "contact"
                      ? "text-indigo-900 font-bold"
                      : "text-indigo-700 hover:text-stone-800"
                  }`}
                >
                  {/* Contact Icon */}
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
                      d="M2.25 6.75c0 8.284 6.716 15 
                      15 15h2.25a2.25 2.25 0 0 
                      0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 
                      1.293c-.282.376-.769.542-1.21.38a12.035 
                      12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 
                      3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 
                      2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-20 px-6">
        {activePage === "home" && (
          <>
            <div className="bg-[#63635f] p-20 m-7 mt-8 shadow-md rounded-md">
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
              <p className="text-left text-xl font-bold p-2 pb-5">
                Featured Movies
              </p>
              <div className="p-2 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="/sample_tailwind.jpg"
                    alt="Sample Poster"
                    className="mx-auto rounded-lg shadow-lg w-64 h-auto"
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {activePage === "about" && (
          <div className="bg-[#63635f] p-20 m-7 mt-8 shadow-md rounded-md text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg">
              MC UFlix is your hub for Marvel Cinematic Universe movies and
              series. Stream, enjoy, and relive the MCU magic anytime!
            </p>
          </div>
        )}

        {activePage === "contact" && (
          <div className="bg-[#63635f] p-20 m-7 mt-8 shadow-md rounded-md text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg">📧 Email: support@mculflix.com</p>
            <p className="text-lg">📞 Phone: +1 234 567 890</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sample;

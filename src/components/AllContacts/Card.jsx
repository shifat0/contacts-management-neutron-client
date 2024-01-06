import { useState } from "react";

const Card = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="relative max-w-sm mt-5 rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://placekitten.com/400/300"
        alt="Card"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio.
        </p>
      </div>
      {/* Three Dot */}
      <div className="absolute top-0 right-0 p-2 inline-block text-left cursor-pointer">
        <div>
          <span
            onClick={toggleOptions}
            className="inline-flex justify-center bg-white items-center p-2 rounded-full focus:outline-none focus:ring focus:border-blue-300"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <svg
              className="h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
                className={`${
                  showOptions ? "opacity-0" : "opacity-100"
                } transition`}
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
                className={`${
                  showOptions ? "opacity-100" : "opacity-0"
                } transition`}
              />
            </svg>
          </span>
        </div>

        <div
          className={`absolute right-0 mt-2 p-2 flex flex-col gap-2 ${
            showOptions ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <button className="text-white block px-4 py-2 text-sm hover:scale-[110%] transition">
            Update
          </button>
          <button className="bg-red-400 text-white block px-4 py-2 text-sm hover:scale-[110%] transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

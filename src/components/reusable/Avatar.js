import React from "react";

export default function Avatar({ srcURL }) {
  const avtr = srcURL ? (
    <img className="inline-block w-10 h-10 rounded-full" src={srcURL} alt="" />
  ) : (
    <span className="inline-block w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
      <svg
        className="w-full h-full text-gray-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </span>
  );

  return avtr;
}

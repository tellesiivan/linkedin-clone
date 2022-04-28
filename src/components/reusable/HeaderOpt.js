import React from "react";
import { Link } from "react-router-dom";

export default function HeaderOpt({ icon, title, link }) {
  const opt = link ? (
    <Link to={link}>
      {icon && icon}
      <p>{title}</p>
    </Link>
  ) : (
    <div className="flex flex-col items-center text-gray-300 cursor-pointer hover:text-gray-500">
      {icon && icon}
      <p className="pt-1 text-xs font-medium">{title}</p>
    </div>
  );

  return opt;
}

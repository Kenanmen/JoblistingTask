// components/JobCard.tsx
import React from "react";
import { JobType } from "../joblist";
import Link from "next/link";

const colorClasses = [
  "border-orange-300 text-orange-300",
  "border-indigo-800 text-indigo-800 ",
  "border-emerald-500 text-teal-500 ",
  "border-blue-500 text-blue-500",
  "border-pink-500 text-pink-500",
  "border-purple-500 text-purple-500",
  "border-red-500 text-red-500",
];

const JobCard = ({
  id,
  title,
  orgName,
  description,
  logoUrl,
  location,
  categories,
  opType,
}: JobType) => {
  return (
    <Link href={`/job/${id}`}>
      <div className="flex justify-between border-1 border-gray-200 rounded-2xl p-7 hover:shadow-lg transition">
        <div className="mr-5">
          {logoUrl ? (
            <img src={logoUrl} alt={`${orgName} logo`} />
          ) : (
            <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded">
              <span className="text-gray-400 text-sm">No Logo</span>
            </div>
          )}
        </div>
        <div>
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-400 pt-2">
              {orgName} . {location}
            </p>
            <p className="mt-2">{description}</p>
          </div>
          <div>
            <ul className="flex gap-2 mt-5">
              <li className="  bg-emerald-50 text-teal-500 rounded-2xl px-2 py-1 mr-2">
                {opType}
              </li>
              <li className="border-l-1 border-l-gray-400 mr-2 "></li>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`
      px-2 py-1 text-sm border rounded-2xl min-w-[4rem] text-center
      ${colorClasses[index % colorClasses.length]}
    `}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>{" "}
      </div>
    </Link>
  );
};

export default JobCard;

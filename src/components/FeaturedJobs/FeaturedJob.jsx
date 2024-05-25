import React from "react";
import locationIcon from "../../assets/icons/Location.png";
import MoneyIcon from "../../assets/icons/money.png";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    remote_or_onsite,
    job_type,
    salary,
  } = job;

  return (
    <div className=" w-2.5/3 border-2 rounded-lg p-6">
      <img className="w-28 pb-4" src={logo} alt="" />
      <h1 className="font-bold text-xl">{job_title}</h1>
      <p className="">{company_name}</p>
      <div className="flex py-2">
        <p className="mr-4 border-2 p-1 border-purple-200">
          {remote_or_onsite}
        </p>
        <span className="pr-2 border-2 p-1 border-purple-200">{job_type}</span>
      </div>

      <div className="flex mt-2 pb-6">
        <div className="flex mr-4">
          <img src={locationIcon} alt="" />
          <span>{location}</span>
        </div>
        <div className="flex">
          <img src={MoneyIcon} alt="" />
          <span>{salary}</span>
        </div>
      </div>

      <Link
        to={`/job/${id}`}
        className="bg-gradient-to-r from-blue-400 to-purple-500 p-2 rounded-lg text-white"
      >
        View Details
      </Link>
    </div>
  );
};

export default FeaturedJob;

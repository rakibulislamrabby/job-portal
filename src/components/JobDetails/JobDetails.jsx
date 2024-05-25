import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { LuCircleDollarSign, LuSubtitles } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { CiMail, CiLocationOn } from "react-icons/ci";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_title,
    salary,
    phone,
    email,
    address,
    job_description,
    Job_Responsibility,
    Educational_Requirements,
    Experiences,
  } = job;
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-16 pt-8 mb-28">
        Job Details
      </h2>

      <div className="grid md:grid-cols-4 gap-5 mb-24">
        <div className="md:col-span-3 ">
          <h1 className="text-2xl font-bold pb-4">Job Description:</h1>
          <p className="text-xl pb-8">{job_description}</p>

          <h1 className="text-2xl font-bold">Job Responsiblity:</h1>
          <p className="text-xl pb-8">{Job_Responsibility}</p>

          <h1 className="text-2xl font-bold">Educational Requirements:</h1>
          <p className="text-xl pb-8">{Educational_Requirements}</p>

          <h1 className="text-2xl font-bold">Experiences: </h1>
          <p className="text-xl pb-8">{Experiences}</p>
        </div>

        <div className="md:col-span-1 bg-base-200 pl-6 pt-4">
          <div>
            <h1 className="text-xl border-b-2 pb-4 font-bold">Job Details</h1>
          </div>
          <div className="flex pt-4 items-center ">
            <h3 className="text-purple-600">
              <LuCircleDollarSign />
            </h3>
            <h1 className="font-bold px-2">Salary: </h1> <span>{salary}</span>{" "}
            <span>(per month)</span>
          </div>
          <div className="flex pt-4 items-center ">
            <h3 className="text-purple-600">
              <LuSubtitles />
            </h3>
            <h1 className="font-bold px-2">Job Title: </h1>
            <span>{job_title}</span>
          </div>

          {/* ************************ */}
          <div>
            <h1 className="text-xl border-b-2 pb-4 pt-4 font-bold">
              Contact Information
            </h1>
          </div>
          <div className="flex pt-4 items-center ">
            <h3 className="text-purple-600">
              <IoCallOutline />
            </h3>
            <h1 className="font-bold px-2">Phone: </h1> <span>{phone}</span>
          </div>
          <div className="flex pt-4 items-center ">
            <h3 className="text-purple-600">
              <CiMail />
            </h3>
            <h1 className="font-bold px-2">Email: </h1>
            <span>{email}</span>
          </div>
          <div className="flex pt-4 items-center ">
            <h3 className="text-purple-600">
              <CiLocationOn />
            </h3>
            <h1 className="font-bold px-2">Address: </h1>
            <span>{address}</span>
          </div>

          <div>
            <button className="bg-gradient-to-r from-blue-400 to-purple-500 w-full text-white rounded-md py-2 mt-8">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

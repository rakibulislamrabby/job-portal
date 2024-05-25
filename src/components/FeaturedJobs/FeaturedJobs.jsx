import React, { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl text-center font-bold pb-4">Featured Jobs</h1>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid lg:grid-cols-2 gap-4 py-10 mx-20">
        {jobs.slice(0, dataLength).map((job) => (
          <FeaturedJob id={job.id} job={job}></FeaturedJob>
        ))}
      </div>
      <div
        className={dataLength === jobs.length ? "hidden" : "text-center mb-6"}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg text-white text-center"
        >
          See all Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;

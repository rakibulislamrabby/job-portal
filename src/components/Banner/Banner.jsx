import React from "react";
import bannerimg from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className=" min-h-screen pt-20">
      <div className=" grid grid-cols-2 justify-items-center ">
        <div>
          <h1 className="text-8xl font-bold">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-purple-700">Dream Job</span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. <br /> Manage all your job
            application from start to finish.
          </p>
          <button className="btn bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold">
            Get Started
          </button>
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661515449711-ace459054f78?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="max-w-sm rounded-lg 	 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import icon1 from "../../assets/icons/accounts.png";
import icon2 from "../../assets/icons/creative.png";
import icon3 from "../../assets/icons/marketing.png";
import icon4 from "../../assets/icons/chip.png";

const JobCategory = () => {
  return (
    <div className="mx-20">
      <h1 className="text-5xl text-center font-bold pb-4">Job Category List</h1>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-4 gap-5  py-10 ">
        <div className=" bg-purple-50 rounded-lg p-5">
          <img className="pb-6 w-14" src={icon1} alt="" />
          <h2 className="text-xl font-bold">Account & Finance</h2>
          <p>300 Jobs Available</p>
        </div>
        <div className=" bg-purple-50 rounded-lg p-5">
          <img className="pb-6 w-14" src={icon2} alt="" />
          <h2 className="text-xl font-bold">Creative Design</h2>
          <p>100+ Jobs Available</p>
        </div>
        <div className=" bg-purple-50 rounded-lg p-5">
          <img className="pb-6 w-14" src={icon3} alt="" />
          <h2 className="text-xl font-bold">Marketing & Sales</h2>
          <p>150 Jobs Available</p>
        </div>
        <div className=" bg-purple-50 rounded-lg p-5">
          <img className="pb-6 w-14" src={icon4} alt="" />
          <h2 className="text-xl font-bold">Engineering Job</h2>
          <p>355+ Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;

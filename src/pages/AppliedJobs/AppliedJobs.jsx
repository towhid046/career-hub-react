import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDataFromLS } from "../../utility/localStorage";
import AppliedJob from "../../components/AppliedJob/AppliedJob";
import CommonHeader from "../../components/CommonHeader/CommonHeader";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const jobs = useLoaderData();

  useEffect(() => {
    const ids = getDataFromLS();
    if (jobs.length > 0) {
      const items = jobs.filter((job) => ids.includes(job.id));
      setAppliedJobs(items);
      setDisplayJobs(items);
    }
  }, [jobs]);

  const handelFilteredJobs = (value) => {
    if (value === "all") {
      setDisplayJobs(appliedJobs);
    } else if (value === "remote") {
      const filteredRemoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(filteredRemoteJobs);
    } else if (value === "onsite") {
      const filteredOnsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(filteredOnsiteJobs);
    }
  };

  return (
    <>
      <CommonHeader title="Applied Jobs" />

      <div className="flex justify-between container mx-auto px-4 py-10">
        <div></div>
        <div>
          <select
            onChange={(e) => handelFilteredJobs(e.target.value)}
            className="select select-bordered join-item"
          >
            <option value={"all"}>All</option>
            <option value={"remote"}>Remote</option>
            <option value={"onsite"}>Onsite</option>
          </select>
        </div>
      </div>

      {appliedJobs.length ? (
        <div className="container mx-auto px-4 pb-16">
          {displayJobs.map((job) => (
            <AppliedJob key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <h2 className="flex justify-center items-center text-center px-4 font-bold text-3xl text-gray-400 py-20">
          You have not applied any job yet!
        </h2>
      )}
    </>
  );
};

export default AppliedJobs;

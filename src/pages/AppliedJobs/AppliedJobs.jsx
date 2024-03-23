import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDataFromLS } from "../../utility/localStorage";
import AppliedJob from "../../components/AppliedJob/AppliedJob";
import CommonHeader from "../../components/CommonHeader/CommonHeader";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const jobs = useLoaderData();
  console.log(jobs);


  useEffect(() => {
    const ids = getDataFromLS();
    if (jobs.length > 0) {
      const items = jobs.filter((job) => ids.includes(job.id));
      setAppliedJobs(items);
    }
  }, []);

  return (
    <>
      <CommonHeader title="Applied Jobs" />
      {appliedJobs.length ? (
        <div className="container mx-auto px-4 py-20">
          {appliedJobs.map((job) => (
            <AppliedJob key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <h2 className="flex justify-center items-center text-center px-4 h-[90vh] font-bold text-3xl text-gray-400">
          You have not applied any job yet!
        </h2>
      )}
    </>
  );
};

export default AppliedJobs;

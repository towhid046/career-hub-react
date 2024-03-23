import { useEffect, useState } from "react";
import SectionHeading from "./../SectionHeading/SectionHeading";
import FeatureJob from "./../FeaturedJob/FeatureJob";

const heading = {
  title: "Featured Jobs",
  description:
    "Explore thousands of job opportunities with all the information you need. Its your future",
};

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [jobLength, setJobLength] = useState(4);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("jobs.json");
      const data = await res.json();
      setJobs(data);
    };
    loadData();
  }, []);

  const handelSeeAllJobs = () => {
    setJobLength(jobs.length);
  }

  return (
    <div className="pb-16 container mx-auto px-4">
      <SectionHeading heading={heading} />
      <div className="grid lg:grid-cols-2 gap-5">
        {jobs.slice(0, jobLength).map((job) => (
          <FeatureJob key={job.id} job={job} />
        ))}
      </div>
      <div className={`text-center ${jobLength === jobs.length && 'hidden'}`}>
        <button onClick={handelSeeAllJobs} className="btn btn-info mt-7">See All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;

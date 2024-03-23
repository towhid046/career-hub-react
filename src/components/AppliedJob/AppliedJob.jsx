import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { LuCircleDollarSign } from "react-icons/lu";

const AppliedJob = ({ job }) => {
  const {
    id,
    logo,
    company_name,
    experiences,
    job_description,
    job_responsibility,
    job_type,
    job_title,
    location,
    remote_or_onsite,
    salary,
  } = job;

  return (
    <div className="flex justify-between p-5 border rounded items-center mb-5">
      <div className="flex items-center gap-6">
        <img
          className="bg-[#f9f9ff] px-5 py-12 rounded-lg max-h-40"
          src={logo}
          alt=""
        />
        <div className="space-y-3">
          <h3 className="font-bold text-xl">{job_title}</h3>
          <p className="font-medium text-lg">{company_name}</p>
          <div className="flex gap-4">
            <button className="btn btn-primary btn-outline">
              {remote_or_onsite}
            </button>
            <button className="btn btn-primary btn-outline">{job_type}</button>
          </div>
          <div className="flex gap-4">
            <p className="flex items-center gap-1">
              <CiLocationOn />
              <span>{location}</span>
            </p>
            <p className="flex items-center gap-1">
              <LuCircleDollarSign />
              <span>{salary}</span>
            </p>
          </div>
        </div>
      </div>
      <Link to={`/job/${id}`} className="btn btn-info">
        View Details
      </Link>
    </div>
  );
};

AppliedJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default AppliedJob;

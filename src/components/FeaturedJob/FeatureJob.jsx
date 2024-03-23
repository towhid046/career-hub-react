import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FeatureJob = ({ job }) => {
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
    <div className="p-5 rounded-xl border shadow-sm space-y-2">
      <img className="h-12" src={logo} alt="" />
      <h3 className="font-bold text-2xl">{job_title}</h3>
      <p className="font-semibold text-lg">{company_name}</p>
      <div className="flex gap-4">
        <button className="btn btn-primary btn-outline">
          {remote_or_onsite}
        </button>
        <button className="btn btn-primary btn-outline">{job_type}</button>
      </div>
      <div className="flex gap-4">
        <p><span>{location}</span></p>
        <p><span>{salary}</span></p>
      </div>
      <Link to={`/job/${id}`} className="btn btn-secondary">View Details</Link>
    </div>
  );
};

FeatureJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default FeatureJob;

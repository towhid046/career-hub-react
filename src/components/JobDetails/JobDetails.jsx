import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {saveDataToLS} from '../../../src/utility/localStorage'
import CommonHeader from './../CommonHeader/CommonHeader';

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  const targetedJob = jobs.find((job) => job.id === parseInt(id));

  const {
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
    educational_requirements,
    contact_information,
  } = targetedJob;

  const handelJobApplyBtn = () => {
    saveDataToLS(parseInt(id));
    toast.success('Job Application Sucessfull!')
  }

  return (
    <div>
      <CommonHeader title={'Job Details'} />

      <main className="space-y-4 lg:grid grid-cols-3 gap-6 py-7 container mx-auto px-4 items-center">
        <div className="col-span-2 space-y-3">
          <p>
            <strong>Job Description</strong> <span>{job_description}</span>
          </p>
          <p>
            <strong>Job Responsibility</strong>{" "}
            <span>{job_responsibility}</span>
          </p>
          <h2 className="font-bold">Education Requirments:</h2>
          <p>{educational_requirements}</p>
          <h2 className="font-bold">Experience:</h2>
          <p>{experiences}</p>
        </div>

        <aside className="space-y-4">
          <div className="bg-[#f9f9ff] p-5 rounded-lg space-y-3">
            <h2 className="font-bold border-b-2 pb-3 text-2xl">Job Details</h2>
            <p>
              <strong>Salary:</strong> <span>{salary} (Per Month)</span>
            </p>
            <p>
              <strong>Job Title: </strong> <span>{job_title}</span>
            </p>
            <h2 className="font-bold border-b-2 pb-3 text-2xl pt-4">
              Contact Information
            </h2>
            <p>
              <strong>Phone:</strong> <span>{contact_information?.phone}</span>
            </p>
            <p>
              <strong>Email:</strong> <span>{contact_information?.email}</span>
            </p>
            <p>
              <strong>Address:</strong>{" "}
              <span>{contact_information?.address}</span>
            </p>
          </div>
          <button
            onClick={handelJobApplyBtn}
            className="btn btn-info w-full"
          >
            Apply Now
          </button>
        </aside>
      </main>
    </div>
  );
};

JobDetails.propTypes = {};

export default JobDetails;

import React from "react";
import { useLocation } from "react-router-dom";
const JobDetail = () => {
  const location = useLocation();
  const job = location.state?.job;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const dateObject = new Date(dateString);
    return dateObject.toLocaleTimeString(undefined, options);
  };

  if (!job) {
    return <p>Job details not available.</p>;
  }
  return (
    <div className="job-detail">
      <h2>{job.title}</h2>
      <p>JobID:- {job.id}</p>
      <p>Number of Applicants:- {job.num_applications}</p>
      <p>
        Salary:- {job.salary_max}-{job.salary_min}
      </p>
      <p>
        Created On:- {formatDate(job.created_on)}, {formatTime(job.created_on)}
      </p>
      <p>
        Updated On:- {formatDate(job.updated_on)}, {formatTime(job.updated_on)}
      </p>
      <p>
        Expires On:- {formatDate(job.expire_on)}, {formatTime(job.expire_on)}
      </p>
      <p>Job Hours:- {job.job_hours}</p>
      <p>Vacancies:- {job.openings_count}</p>
    </div>
  );
};

export default JobDetail;

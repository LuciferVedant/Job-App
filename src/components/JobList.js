import React from "react";
import JobCard from "./JobCard";

const JobsList = ({ jobs, onLoadMore }) => {
  return (
    <div className="jobs-list">
      {jobs.map((job, index) => {
        if (job.title) {
          return <JobCard key={index} job={job} />;
        }
      })}
      <button onClick={onLoadMore}>Load More</button>
    </div>
  );
};

export default JobsList;

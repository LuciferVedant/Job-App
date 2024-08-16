import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const [isBookmarked, setIsBookmarked] = useState(() => {
    // Check if the job is already bookmarked
    const savedJobs = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
    return savedJobs.some((savedJob) => savedJob.id === job.id);
  });

  const handleClick = () => {
    navigate(`/job/${job.id}`, { state: { job } });
  };

  const handleBookmark = () => {
    const savedJobs = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
    if (isBookmarked) {
      const updatedJobs = savedJobs.filter(
        (savedJob) => savedJob.id !== job.id
      );
      localStorage.setItem("bookmarkedJobs", JSON.stringify(updatedJobs));
    } else {
      localStorage.setItem(
        "bookmarkedJobs",
        JSON.stringify([...savedJobs, job])
      );
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div>
      <div className="job-card" onClick={handleClick}>
        <h3>{job.company_name}</h3>
        <p> {job.title}</p>
        <p> Job Category: {job.job_category}</p>
        <p>Location: {job.job_location_slug}</p>
        <p>
          Salary:
          {job.salary_max}-{job.salary_min}
        </p>
        <p>Phone/Whatsapp Number: {job.whatsapp_no}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleBookmark();
          }}
        >
          {isBookmarked ? "Unbookmark" : "Bookmark"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;

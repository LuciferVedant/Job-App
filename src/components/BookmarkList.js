import React from "react";
import JobCard from "./JobCard";

const BookmarkList = ({ jobs }) => {
  return (
    <div className="bookmark-list">
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p>No bookmarks yet.</p>
      )}
    </div>
  );
};

export default BookmarkList;

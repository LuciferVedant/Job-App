import React, { useState, useEffect } from "react";
import axios from "axios";
import JobsList from "../components/JobList.js";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `https://testapi.getlokalapp.com/common/jobs?page=${page}`
        );
        console.log(response.data.results);
        setJobs(response.data.results);
        setJobs((prevJobs) => [...prevJobs, ...response.data.results]);
        setLoading(false);
      } catch (err) {
        setError("Error fetching jobs");
        setLoading(false);
      }
    };
    fetchJobs();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1> Job App</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <JobsList jobs={jobs} onLoadMore={loadMore} />}
    </div>
  );
};

export default Jobs;

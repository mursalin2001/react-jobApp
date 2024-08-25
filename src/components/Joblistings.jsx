import { useState, useEffect } from 'react';

import Joblisting from './Joblisting'
import React from 'react'
import Spinner from './Spinner';

const Joblistings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'

    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);

      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs(false);
  }, []);



  //  // console.log(jobs);
  //  const jobListings = isHome ? jobs.slice(0,3) :jobs;
  return (
    <>

      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>
          
            {loading ? (
            <Spinner loading={loading} />) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <Joblisting key={job.id} job={job} />
                ))}
              </div>
            )}



          
        </div>
      </section>
    </>
  )
}

export default Joblistings
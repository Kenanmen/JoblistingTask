"use client";
import JobCard from "./component/jobcard";
import { useGetAllJobsQuery } from "./services/apiServices";
import { JobType } from "./joblist";

export default function Home() {
  const { data, isLoading, error } = useGetAllJobsQuery();
  // display loading state
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-3xl font-semibold text-gray-600 animate-pulse">
          Loading jobs...
        </p>
      </div>
    );
  // display error message
  if (error) {
    const errorMessage =
      "data" in error && typeof error.data === "string"
        ? error.data
        : "status" in error
        ? `Request failed with status ${error.status}`
        : "Something went wrong. Please try again.";

    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <p className="text-4xl font-bold text-red-600 mb-4">
          Oops! Something went wrong.
        </p>
        <p className="text-lg text-red-500 max-w-lg text-center">
          {errorMessage}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  console.log("data:", data);

  const joblist = data.data;
  return (
    <main className="ml-28 mr-14 max-w-3xl mt-15">
      <h1 className="Maintext">Opportunities</h1>
      <div className=" flex justify-between mb-7">
        <p className="text-gray-400 text-0.5">Showing 73 resuts</p>
        <div>
          <label className="text-gray-400">Sort by: </label>
          <select
            id="myDropdown"
            name="myDropdown"
            className="font-semibold  text-blue-950"
          >
            <option value="most_relevant">Most relevant</option>
            <option value="alphabetical">Alphabetical order</option>
            <option value="date_posted">Date posted</option>
          </select>
        </div>
      </div>
      <div className="grid gap-6  ">
        {/* render jobcard */}
        {joblist.map((job: JobType) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </main>
  );
}

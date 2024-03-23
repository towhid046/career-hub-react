import React, { useEffect, useState } from "react";
import SectionHeading from "./../SectionHeading/SectionHeading";
import JobCategory from "../JobCategory/JobCategory";

const heading = {
  title: "Job Category List",
  description:
    "Explore thousands of job opportunities with all the information you need. Its your future",
};

const JobCategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("categories.json");
      const data = await res.json();
      setCategories(data);
    };
    loadData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <SectionHeading heading={heading} />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {categories.map((category) => (
          <JobCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default JobCategoryList;

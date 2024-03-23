import React from 'react';

const JobDetailsHeader = () => {
    return (
        <div className="py-20 bg-[#f9f9ff] md:flex justify-between items-center">
        <img
          className="hidden md:block"
          src="/src/assets/images/banner-images/bg1.png"
          alt=""
        />
        <h2 className="text-3xl font-bold text-center">Job Details</h2>
        <img
          className="hidden md:block"
          src="/src/assets/images/banner-images/bg2.png"
          alt=""
        />
      </div>
    );
};

export default JobDetailsHeader;
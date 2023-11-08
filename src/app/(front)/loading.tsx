import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin w-20 h-20 border-t-4 border-b-4  border-orange-400 rounded-full"></div>
    </div>
  );
};

export default loading;

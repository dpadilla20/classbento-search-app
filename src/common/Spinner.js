import React from "react";

export const Spinner = () => {
  return (
    <div className=" flex justify-center items-center mt-5">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-900"></div>
    </div>
  );
};

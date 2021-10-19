import React from "react";
import './../assets/spinner.css';

export const Spinner = () => {
  return (
    <div class=" flex justify-center items-center mt-5">
      <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-red-900"></div>
    </div>
  );
};

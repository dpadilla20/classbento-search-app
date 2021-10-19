import React from "react";

export const Card = ({ title, link, image, description, author, dateTaken, tags }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
      <div className="card">
        <a href={link} target="_blank" rel="noreferrer">
         <img src={image} alt="" className="w-full" />
        </a>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{ title }</div>
          <p className="text-gray-700 text-base">
            { dateTaken }
          </p>

          <p></p>
        </div>
        <div className="px-6 py-4">
          {
            tags.split(" ").map((tag) => { 
              return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
                #{ tag }
              </span>
            })
          }
        </div>
        <div class="p-4 text-right text-sm text-gray-600">
          <span class="ml-2">By: { author }</span>
        </div>
        {/* <footer className="blockquote-footer">By: { author }</footer> */}
      </div>
    </div>
  );
};

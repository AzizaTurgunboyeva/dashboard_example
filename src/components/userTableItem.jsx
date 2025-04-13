import React from "react";

const Search= (user) => {
  return (
    <div className="flex  justify-center items-center  p-3 gap-3">
      <input
        className=" w-[500px] p-1 border rounded text-[#24feee]"
        type="text"
        placeholder="Search"
      />
      <div>
        <button className="border p-1 rounded text-[#171c48] bg-[#24feee]">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search

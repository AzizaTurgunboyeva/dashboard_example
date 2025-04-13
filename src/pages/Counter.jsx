import React, { Fragment, useState } from "react";


function Counter() {
  const [number, setCount] = useState(0);

  function handleIncrease(e) {
    setCount(function (prev) {
      return (prev += 1);
    });
  }
  function handleDecrease() {
    setCount(function (prev) {
      if (prev > 0) {
        return (prev -= 1);
      } else {
        return (prev = 0);
      }
    });
  }
  function handleReset() {
    setCount(function (prev) {
      return (prev = 0);
    });
  }
  return (
    <Fragment>
      <div className=" flex flex-col justify-center items-center h-[100vh]  text-[#24feee] bg-[#171c48]  ">
        <h2 className="text-center text-5xl font-bold"> Counter</h2>
        <div className="w-[260px] h-[400px]  flex flex-col  justify-center items-center   mt-2 mx-2 p-10">
          <div className="text-center">
            <p
              className="mb-6  text-center text-4xl text-[#1b8982] font-bold"
              type="text"
              defaultValue="0"
            >
              {number}
            </p>
          </div>
          <div className="flex justify-center gap-[10px]">
            <button
              className=" w-[50px] border rounded p-2 "
              onClick={handleIncrease}
            >
              +
            </button>
            <button
              className=" w-[50px] border rounded  p-1 "
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className=" w-[50px] border rounded  p-2 "
              onClick={handleDecrease}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Counter;

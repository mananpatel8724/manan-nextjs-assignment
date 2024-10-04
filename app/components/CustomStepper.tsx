import React from "react";

const CustomStepper = ({
  steps,
  active,
}: {
  steps: number;
  active: number;
}) => {
  return (
    <div className="flex flex-1 gap-1">
      {Array.from({ length: steps }).map((_, index) => (
        <div
          key={index}
          className={`rounded-lg w-full ${
            index + 1 <= active ? "bg-[#d9cbf6]" : "bg-[#e9e9e9]"
          } h-[7px]`}
        />
      ))}
    </div>
  );
};

export default CustomStepper;

import React from "react";

const RankingIndicator = ({ value }: { value: string }) => {
  return (
    <div className="flex items-end w-[10px]">
      <div
        className={`rounded-[1px]  ${
          value === "Low" || "Medium" || "High" ? "bg-[#6d3ecb]" : "bg-white"
        } h-[6px] w-full`}
      />
      <div
        className={`rounded-[1px] bg-white ${
          value === "Medium" || "High" ? "bg-[#6d3ecb]" : "bg-white"
        } h-[8px] w-full`}
      />
      <div
        className={`rounded-[1px] bg-white ${
          value === "High" ? "bg-[#6d3ecb]" : "bg-white"
        } h-[10px] w-full`}
      />
    </div>
  );
};

export default RankingIndicator;

import React from "react";

const CustomButton = ({
  buttonText,
  iconStart,
  iconEnd,
  varient,
}: {
  buttonText: string;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  varient: "contained" | "outlined";
}) => {
  return (
    <button
      className={`p-3 px-10 rounded-2xl border flex gap-4 items-center ${
        varient === "contained" && "bg-black text-white"
      }`}
    >
      {iconStart && iconStart}
      {buttonText}
      {iconEnd && iconEnd}
    </button>
  );
};

export default CustomButton;

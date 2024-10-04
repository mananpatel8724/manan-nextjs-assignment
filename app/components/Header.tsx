import { CancelButton } from "@/assets/Icons";
import React from "react";
import CustomStepper from "./CustomStepper";

const Header = () => {
  return (
    <div className="flex flex-col gap-4 p-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-medium">Configure contribution</p>
          <p className="text-xs font-normal text-slate-500">
            Configure the contributions for the benifits in your package
          </p>
        </div>
        <div>
          <button className="p-1 px-2 flex gap-2 rounded-lg items-center border text-slate-500">
            <CancelButton />
            Cancel
          </button>
        </div>
      </div>
      <CustomStepper steps={5} active={4} />
    </div>
  );
};

export default Header;

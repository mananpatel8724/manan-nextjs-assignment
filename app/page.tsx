"use client";

import { useState } from "react";
import PensionContributionHeader from "./components/PensionContributionHeader";
import PensionContributionCard from "./components/PensionContributionCard";
import PensionBenchmarkRanking from "./components/PensionBenchmarkRanking";
import Header from "./components/Header";
import { NextIcon, PreviousIcon } from "@/assets/Icons";
import CustomButton from "./components/CustomButton";

export default function Home() {
  // Based on my understanding, we could also use prop drilling as an approach, though it might not be the best choice.
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div>
      <div className="flex flex-col gap-8">
        <Header />
        <div className="flex justify-center">
          <div className="w-[30rem] flex flex-col gap-20">
            <div className="flex flex-col gap-6">
              <PensionContributionHeader />
              <PensionContributionCard
                sliderValue={sliderValue}
                setSliderValue={setSliderValue}
              />
              <PensionBenchmarkRanking sliderValue={sliderValue} />
            </div>
            <div className="flex justify-between">
              <CustomButton
                buttonText="Back"
                iconStart={<PreviousIcon />}
                varient="outlined"
              />
              <CustomButton
                buttonText="Next"
                iconEnd={<NextIcon />}
                varient="contained"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

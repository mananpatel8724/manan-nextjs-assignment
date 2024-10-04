import { PiggyBankIcon } from "@/assets/Icons";
import RankingIndicator from "./RankingIndicator";

type RankingLevelProps = {
  sliderValue: number;
};

const RankingLevel = (props: RankingLevelProps) => {
  const { sliderValue } = props;

  const frequencyValue = () => {
    return sliderValue < 4
      ? "Low"
      : sliderValue >= 4 && sliderValue <= 6
      ? "Medium"
      : "High";
  };

  return (
    <div className="flex items-center gap-1 text-xs font-bold p-1 px-2 rounded-md text-[#6d3ecb] bg-[#e9e1fa]">
      {frequencyValue()}
      <RankingIndicator value={frequencyValue()} />
    </div>
  );
};

export default RankingLevel;

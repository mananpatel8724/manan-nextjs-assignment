import { PiggyBankIcon } from "@/assets/Icons";
import RankingLevel from "./RankingLevel";
import CustomStepper from "./CustomStepper";

type PensionContributionCardProps = {
  sliderValue: number;
};

const PensionBenchmarkRanking = (props: PensionContributionCardProps) => {
  const { sliderValue } = props;

  return (
    <div className="flex flex-col p-2 gap-2 border rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <PiggyBankIcon />
          <p className="text-md font-bold">Pension benchmark ranking</p>
        </div>
        <RankingLevel sliderValue={sliderValue} />
      </div>
      <CustomStepper steps={3} active={2} />
    </div>
  );
};

export default PensionBenchmarkRanking;

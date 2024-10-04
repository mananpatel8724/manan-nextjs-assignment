import { PiggyBankWithBgIcon } from "@/assets/Icons";
import Slider from "../controls/Slider";

type PensionContributionCardProps = {
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
};

const PensionContributionCard = (props: PensionContributionCardProps) => {
  const { sliderValue, setSliderValue } = props;

  const handlePensionContributionChange = (value: number) => {
    setSliderValue(value);
  };

  return (
    <div className="flex flex-col p-2 gap-4 border rounded-xl shadow-md">
      <div className="flex gap-2 items-center">
        <PiggyBankWithBgIcon />
        <p className="text-md font-semibold">Pension contribution</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold">Matched pension contribution</p>
        <div className="text-sm p-1 px-2 rounded-lg border text-[#8b8b8b]">
          {sliderValue}% to contribute 10%
        </div>
      </div>
      <div>
        <Slider
          min={0}
          max={10}
          step={2}
          onChange={(value) => handlePensionContributionChange(value)}
        />
      </div>
      <p className="text-xs">
        Requires employees to match employer's contribution %.
      </p>
    </div>
  );
};

export default PensionContributionCard;

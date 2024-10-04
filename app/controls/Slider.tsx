import React, { useState } from "react";

type SliderProps = {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
};

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 10,
  step = 2,
  initialValue = 0,
  onChange,
}) => {
  const [sliderValue, setSliderValue] = useState<number>(initialValue);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setSliderValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={sliderValue}
      onChange={handleSliderChange}
      className="w-full cursor-pointer accent-[#6d3ecb]"
    />
  );
};

export default Slider;

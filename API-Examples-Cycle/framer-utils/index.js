import { useState } from "react";

const useCycle = function() {
  const allValues = arguments;
  const allValuesLength = arguments.length;

  let [currentIndex, setCurrentIndex] = useState(0);
  let [currentValue, setCurrentValue] = useState(allValues[currentIndex]);

  let cycleValue = () => {
    setCurrentIndex(previousIndex => {
      const newIndex = (previousIndex + 1) % allValuesLength;
      setCurrentValue(allValues[newIndex]);
      return newIndex;
    });
  };

  return [currentValue, cycleValue];
};

export { useCycle };

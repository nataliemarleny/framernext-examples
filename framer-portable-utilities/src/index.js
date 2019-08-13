const { useState } = require('react');

exports.useCycle = function() {
  let allValuesLength = arguments.length;
  let [currentIndex, setCurrentIndex] = useState(0);
  let [currentValue, setCurrentValue] = useState(arguments[currentIndex]);

  let cycleValue = () => {
    setCurrentIndex((currentIndex + 1) % allValuesLength);
    setCurrentValue(arguments[currentIndex])
  }

  return [currentValue, cycleValue];
}

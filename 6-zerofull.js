// // WPU Coding Challenge 2024
// // 5/366
// // https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
        return fuelLeft * mpg >= distanceToPump;
  };

  console.log(zeroFuel(100,50,1));
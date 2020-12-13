import logMessage from "./logger.js";

// REVIEW With Single Responsibility Principles:
class CalorieTraker {
  constructor(maxColories) {
    this.maxColories = maxColories;
    this.currentColories = 0;
  }

  trackCalories(calorieCount) {
    this.currentColories += calorieCount;
    if (this.currentColories > this.maxColories) {
      logMessage(this.maxColories, this.currentColories);
    }
  }
}

const calorieTraker = new CalorieTraker(2000);
calorieTraker.trackCalories(2231);

/* -------------------------------------------------------------------------- */

// NOTE Without Single Responsibility Principles:
// class CalorieTraker {
//   constructor(maxColories) {
//     this.maxColories = maxColories;
//     this.currentColories = 0;
//   }

//   trackCalories(calorieCount) {
//     this.currentColories += calorieCount;
//     if (this.currentColories > this.maxColories) {
//       this.logCaloriesSurplus(this.maxColories, this.currentColories);
//     }
//   }

//   logCaloriesSurplus(max, current) {
//     console.log("max calorie exceed");
//     console.log(`Surplus calorie: ${current - max} cal`);
//   }
// }

// const calorieTraker = new CalorieTraker(2000);
// calorieTraker.trackCalories(2231);

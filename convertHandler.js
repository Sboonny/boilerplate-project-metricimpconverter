//make input in format num then string
//like{320km}
const numStringSplitter = (input) => {
  const num = input.match(/[.\d+]/g) || [1];
  const str = input.match(/\w+/g)[0];
  const format = [num[0], str];
  return format;
};
//checking division
const checkDivision = (fraction) => {
  let divisedNums = fraction.split("/");
  return divisedNums.length > 2 ? false : divisedNums;
};
class ConvertHandler {
  constructor() {
    this.getNum = function (input) {
      let numSplit = numStringSplitter(input)[0];
      let inputNums = checkDiv(numSplit);

      if (!inputNums) return undefined;

      let firstInputNums = inputNums[0];
      let secondInputNums = inputNums[1] || 1;

      if (isNaN(firstInputNums) || isNaN(secondInputNums)) return undefined;

      let inputResult =
        parseFloat(firstInputNums) / parseFloat(secondInputNums);
      return inputResult;
    };

    this.getUnit = function (input) {
      let lowerCaseInputArr = numStringSplitter(input)[1].toLowerCase();
      
      if (
        [
          "gal",
          "lbs",
          "km",
          "l",
          "kg",
          "mi",
          "GAL",
          "LBS",
          "KM",
          "L",
          "KG",
          "MI"
        ].indexOf(lowerCaseInputArr) > -1
      ) {
      } else {
        lowerCaseInputArr = "invalid unit";
      }
       return lowerCaseInputArr
    };

    this.getReturnUnit = function (initUnit) {
      const board = {
        l: "gal",
        kg: "lbs",
        mi: "km",
        gal: "l",
        lbs: "kg",
        km: "mi",
        L: "GAL",
        KG: "MI",
        MI: "KM",
        GAL: "L",
        LBS: "KG",
        KM: "MI"
      };
      let initUnitInput = board[initUnit]
      return initUnitInput;
    };

    this.spellOutUnit = function (unit) {
      let result;

      return result;
    };

    this.convert = function (initNum, initUnit) {
      const galToL = 3.78541;
      const lbsToKg = 0.453592;
      const miToKm = 1.60934;
      let result;

      return result;
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
      let result;

      return result;
    };
  }
}

export default ConvertHandler;

//make input in format num then string
//like{320km}
const numStringSplitter = (input) =>{
 const num = input.match(/[.\d+]/g)|| [1]
 const str = input.match(/\w+/g)[0]
 const format = [num[0], str]
 return format
}
//checking division
const checkDivision = (fraction) =>{
  let nums = fraction.split('/')
  return nums.length > 2 ? false: nums 
}
function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

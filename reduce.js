  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
nums = [0, 1, 2, 3, 4];
// acc stands in for accumulator
// curr stands in for current value
// the 0 is optional. it gives the initial value to start at with the beggining
// if not given, is set to 0 BUT best practice to always give this optional argument
let sumNums = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sumNums);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// totalling the values of specific property in an array of objects
// total teams experience
let sumExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
// let sumExperience = teamMembers.reduce;
console.log(sumExperience);

// Totaling a specific object property

// Grouping by a property, and totaling it 
// brackets after the callback is the initial value, an empty obj 
// want to log {Developer: 12, Designer: 4}
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  // var for the current profession
  let key = curr.profession;
  // if that key var doesn't already exist
  if(!acc[key]) {
    // add as a new key and value
    acc[key] = curr.yrsExperience;
  } else {
    // if not add the yrs.experience to the total
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProfession);
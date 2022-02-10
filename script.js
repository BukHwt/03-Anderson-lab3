"use strict";

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  let didPass = false;
  newScore >= 60 ? (didPass = true) : (didPass = false);
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: didPass,
  });
};
addSubmission(submissions, "Big Steve", 99, "2022-01-31");
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => array.splice(index, 1);

// deleteSubmissionByIndex(submissions, 4);
// console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(index, 1);
};

// deleteSubmissionByName(submissions, "Joe");
// console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

editSubmission(submissions, 4, 59);

const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};

console.log(findSubmissionByName(submissions, "Big Steve"));

// Declare a function named findLowestScore
// Parameter(s): array
// Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.

const findLowestScore = (array) => {
  let lowest = array[0];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i].score < lowest.score) lowest = array[i];
  }
  return lowest;
};

console.log(findLowestScore(submissions));

const findLowestScore2 = (array) => {
  let lowest = array[0];
  array.forEach((element) => {
    if (element.score < lowest.score) lowest = element;
  });
  return lowest;
};

console.log(findLowestScore2(submissions));

const findLowestScore3 = (array) => {
  return array.reduce((acc, curVal) => {
    return curVal.score < acc.score ? curVal : acc;
  });
};

// //Declare a function named findAverageScore
// Parameter(s): array
// Functionality: return the average quiz score.  Use a for...of loop.

const findAverageScore = (array) => {
  let sum = 0;
  for (const element of array) {
    sum += element.score;
  }
  return sum / array.length;
};

console.log(findAverageScore(submissions));

// Declare a function named filterPassing
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores.

const filterPassing = (array) => {
  return array.filter((element) => {
    return element.passed;
  });
};

console.log(filterPassing(submissions));

// Declare a function named filter90AndAbove
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.

const filter90AndAbove = (array) => {
  return array.filter((element) => {
    return element.score >= 90;
  });
};

console.log(filter90AndAbove(submissions));

const createRange = (start, end) => {
  let newArray = [];
  for (let i = start; i <= end; i++) {
    newArray.push(i);
  }
  return newArray;
};

const countElements = (array) => {
  let obj = {};
  array.forEach((letter) => {
    obj[letter] = 0;
  });
  array.forEach((letter) => {
    obj[letter] += 1;
  });
  return obj;
};

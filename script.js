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

const findLowestScore = (array) => {
  let lowest = Number.POSITIVE_INFINITY;
  let tmp;
  for (let i = array.length - 1; i >= 0; i--) {
    tmp = array[i].score;
    if (tmp < lowest) lowest = tmp;
  }
};

// Declare a function named findLowestScore
// Parameter(s): array
// Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.

console.log(findLowestScore(submissions));

// //Declare a function named findAverageScore
// Parameter(s): array
// Functionality: return the average quiz score.  Use a for...of loop.

const findAverageScore = (array) => {};

// Declare a function named filterPassing
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores.

const filterPassing = (array) => {};

// Declare a function named filter90AndAbove
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.

const filter90AndAbove = (array) => {};

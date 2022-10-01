//student management system
let std_name = "Adam";
let std_add = "Chabahil";
let std_phone = 123123123;
/*this method is tedious while working with large no.
of students so we create array
*/
let std = ["Adam", "Chabahil", 123123123];
let std_2 = new Array("Adam", "Chabahil", 123123123);
//these are the two methods to create an array
//index: value pair
console.log(std[2]);
console.log(std_2[1]);

//single dimensional array
std = ["Adam", "Chabahil", 123123123];

//multi dimensional array
let all_std_1 = [
  ["1Adam", "1Chabahil", 123123123],
  ["2Adam", "2Chabahil", 123123123],
  ["3Adam", "3Chabahil", 123123123],
];
console.log(all_std_1[2][1]);
console.log(all_std_1[0][0]);
console.log(all_std_1[1][2]);

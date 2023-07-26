const list1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
const list2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

// Function to find unique elements in an array
function findUniqueElements(arr) {
  const uniqueArr = [];
  for (const element of arr) {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  }
  return uniqueArr;
}

// Function to find common elements between two arrays
function findCommonElements(arr1, arr2) {
  const commonArr = [];
  for (const element of arr1) {
    if (arr2.includes(element)) {
      commonArr.push(element);
    }
  }
  return commonArr;
}

const uniqueList1 = findUniqueElements(
  list1.filter((user) => !list2.includes(user))
);
const uniqueList2 = findUniqueElements(
  list2.filter((user) => !list1.includes(user))
);
const commonUsers = findCommonElements(list1, list2);

console.log(uniqueList1);
console.log(uniqueList2);
console.log(commonUsers);

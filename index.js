const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Array of products with name and price
const products = [
    { name: "Shampoo", price: 4.99 },
    { name: "Donuts", price: 7.99 },
    { name: "Cookies", price: 6.49 },
    { name: "Bath Gel", price: 13.99 },
  ];
  
  // Calculate the total amount of products
  const totalAmount = products.reduce((total, product) => total + product.price, 0);
  console.log("Total Amount:", totalAmount); // Output: 33.46
  
  // Calculate the total number of batteries
  const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log("Total Batteries:", totalBatteries); // Output: 31
  
  // Array of letters to count
  const letters = ["a", "b", "c", "b", "a", "a"];
  
  // Count occurrences of each letter
  const lettersCount = letters.reduce((countObj, currentLetter) => {
    if (currentLetter in countObj) {
      countObj[currentLetter]++;
    } else {
      countObj[currentLetter] = 1;
    }
    return countObj;
  }, {});
  console.log("Letters Count:", lettersCount); // Output: { a: 3, b: 2, c: 1 }
  
  // Array of numbers to double and sum
  const numbers = [1, 2, 3];
  
  // Double each number and sum them
  const doubledAndSummed = numbers.reduce((accumulator, element) => {
    return accumulator + element * 2;
  }, 0);
  console.log("Doubled and Summed:", doubledAndSummed); // Output: 12
  
  // Array of incoming students' names
  const incomingStudents = ["Alice", "Bob", "Charlie", "Dave"];
  
  // Mock student sorter object
  const studentSorter = {
    showcaseAssign: (student) => {
      // Mock assignment logic based on student name length
      const disciplines = ["Dance", "Visual", "Music", "Theater", "Writing"];
      return disciplines[student.length % disciplines.length];
    },
  };
  
  // Initial showcase assignments
  const artsShowcases = {
    Dance: [],
    Visual: [],
    Music: [],
    Theater: [],
    Writing: [],
  };
  
  // Assign students to showcases using reduce
  incomingStudents.reduce((showcases, student) => {
    const discipline = studentSorter.showcaseAssign(student);
    showcases[discipline].push(student);
    return showcases;
  }, artsShowcases);
  console.log("Arts Showcases:", artsShowcases);
  /*
  Output:
  Arts Showcases: {
    Dance: ['Bob'],
    Visual: ['Alice', 'Dave'],
    Music: [],
    Theater: ['Charlie'],
    Writing: []
  }
  */
  
  // Numerical example demonstrating initial value usage
  const numbersExample = [1, 2, 3];
  
  // Reduce without an initial value
  const resultWithoutInitial = numbersExample.reduce((acc, num) => acc + num);
  console.log("Sum without Initial Value:", resultWithoutInitial); // Output: 6
  
  // Reduce with an initial value of 10
  const resultWithInitial = numbersExample.reduce((acc, num) => acc + num, 10);
  console.log("Sum with Initial Value:", resultWithInitial); // Output: 16
  

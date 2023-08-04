// Question 3: What is callback hell? Write an example to convert callback hell to promise.

/* Callback hell:It is a term used to describe a situation in asynchronous programming
   where multiple nested callbacks are used, which makes code difficult to read, understand, and maintain. 
   It often occurs when dealing with multiple asynchronous operations that depend on each other, and each operation requires 
   a callback function for execution
   Issues with callback hell are-
   Readability: The nested structure makes the code difficult to read and understand, making it challenging for developers to grasp the logic.
   Debugging: Identifying errors becomes more complex due to nesting.*/

// Callback hell example using code

function step1(callback) {
    setTimeout(() => {
      console.log('Step 1 completed');
      callback();
    }, 1000);
  }
  
  function step2(callback) {
    setTimeout(() => {
      console.log('Step 2 completed');
      callback();
    }, 500);
  }
  
  function step3(callback) {
    setTimeout(() => {
      console.log('Step 3 completed');
      callback();
    }, 800);
  }
  
  // Usage:As we can see in the below code is next nexted callback this particular condition is said to be in callback hell
  step1(() => {
    step2(() => {
      step3(() => {
        console.log('All steps completed');
      });
    });
  });

// Converting above code from callback hell into promise 

/* Explanation: With Promises and async/await, the code becomes much cleaner, and the pyramid of callbacks is eliminated. 
   The await keyword allows us to wait for the completion of each asynchronous operation before proceeding to the next one,
   maintaining a sequential flow while still handling errors with the try/catch block.*/
function step1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Step 1 completed');
        resolve();
      }, 1000);
    });
  }
  
  function step2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Step 2 completed');
        resolve();
      }, 500);
    });
  }
  
  function step3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Step 3 completed');
        resolve();
      }, 800);
    });
  }
  
  // Usage with async/await
  async function doSteps() {
    try {
      await step1();
      await step2();
      await step3();
      console.log('All steps completed');
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  doSteps();
  



  //Question 5: Extract the data from the API https://jsonplaceholder.typicode.com/users and print name, email id, phone number and company name from the extracted data.

  /* Explanation: In this code, we define an asynchronous function fetchUserData() that uses fetch to get data from the provided API URL (https://jsonplaceholder.typicode.com/users). We use await to wait for the response and then parse it using response.json().
     The resulting data will be an array of user objects. We loop through each user object, extracting the name, email, phone, and company properties using destructuring.
     Finally, we print the required information for each user, including the company name, and add a line to separate each user's data for clarity.
     When you run this code, it will fetch the data from the API, extract the required information, and print it to the console for each user in the response.  */

  async function fetchUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const output = await response.json();
      //The resulting data will be an array of user objects. We loop through each user object, extracting the name, email, phone, and company properties using destructuring.
      output.forEach(user => {
        const { name, email, phone, company } = user;
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone}`);
        console.log(`Company Name: ${company.name}`);
        console.log('-------------------');
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
fetchUserData();



//Question 9: Create a prototype of the reduce method.

/* Explanation: The given code extends the Array.prototype with a custom method called custom that works like the reduce method. 
  It takes an array, a function, and an optional initial value, and reduces the array to a single value by applying the function to each element.
  The code then uses this custom method to calculate the sum of elements in the input array, resulting in an output of 15.*/

Array.prototype.custom=function (arr, container, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];//This line initializes the accumulator variable with the value of `initialValue` if it is provided; otherwise, it takes the first element of the array `arr` as the initial value.
    const firstIndex = initialValue !== undefined ? 0 : 1;//This line sets the firstIndex variable to 0 if an initialValue is provided, otherwise to 1.
  
    for (let i = firstIndex; i < arr.length; i++) {
      accumulator = container(accumulator, arr[i], i, arr);
    }//This loop iterates through the array starting from the index specified by `firstIndex` and goes up to the last element of the array.
  
    return accumulator;//After the loop finishes, the final value of the accumulator is returned as the result of the custom method.
}
const input = [1, 2, 3, 4, 5, 6];
const sum = input.custom(input, (acc, curr) => acc + curr, 0);
console.log(sum); // Output: 21

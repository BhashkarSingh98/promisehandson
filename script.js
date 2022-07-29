// qus 1 --
//Write one example explaining how you can write a callback function?

const callBack = function() {  
    console.log("this is call back function");
}
 
setTimeout(callBack,1000);

// qus 2--
//Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
//Explain callback hell.
//Numbers
//1
// 2
// 3
// 4
// 5
// 6
// 7

function callBack1() {
    setTimeout(() => {
      console.log("1 st callBack");
    }, 1000);
    setTimeout(() => {
      console.log("2 nd callBack");
    }, 2000);
    setTimeout(() => {
      console.log("3 rd callBack");
    }, 3000);
    setTimeout(() => {
      console.log("4 th callBack");
    }, 4000);
    setTimeout(() => {
      console.log("5 th callBack");
    }, 5000);
    setTimeout(() => {
      console.log("6 th callBack");
    }, 6000);
    setTimeout(() => {
      console.log("7 th callBack");
    }, 7000);
  }
  callBack1();



// qus 3--
//Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

let firstPromise = new Promise((resolve,reject) => {
    resolve();
})

firstPromise
.then(() => {
    setTimeout(() => {
        console.log("1 st  promise");
        
    }, 1000);
})

.then(() => {
    setTimeout(() => {
        console.log("2 nd  promise");
        
    }, 2000);
})
.then(() => {
    setTimeout(() => {
        console.log("3 rd  promise");
        
    },3000);
})
.then(() => {
    setTimeout(() => {
        console.log("4 th promise");
        
    },4000);
})
.then(() => {
    setTimeout(() => {
        console.log("5 th promise");
        
    },5000);
})
.then(() => {
    setTimeout(() => {
        console.log("6 th promise");
        
    },6000);
})
.then(() => {
    setTimeout(() => {
        console.log("7 th promise");
        
    },7000);
})


//  qus 4 ---
// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected.

const secondPromise = new Promise((resolve,reject) => {
    resolve();
    //reject();
    
})

secondPromise
.then(() => {
    console.log("Promise resolved");
})
.catch(() => {
    console.log("promise rejected");
})

//  qus 5--
// Create examples to explain callback function.

const callBack3 = function() {  
    console.log("This is call backBack example");
}

setTimeout(callBack3,8000);


// qus 6--
// create examples to explain callback hell function.

const mydata = () => {
    setTimeout(() => {
      console.log("Fetching the details");
      let id = [1, 2, 3, 4, 5];
      console.log(id);
  
      setTimeout(() => {
        let mydetails = {
          fName: "bhashkar",
          lName: "singh",
          age: 21,
        };
        console.log(
          `my name is ${mydetails.fName} ${mydetails.lName} and  age  ${mydetails.age}`
        );
  
        setTimeout(() => {
            mydetails.gender = "male";
          console.log(
            `my name  is ${mydetails.fName} ${mydetails.lName} and age ${mydetails.age}  gender ${mydetails.gender}`
          );
        }, 1000);
      }, 1000);
    }, 8000);
  };
  mydata();



// qus 7--
// create examples to explain promises function.

const promiseFun = new Promise((resolve,reject) => {
    setTimeout(() => {
        let Name = "bhashkar";
        resolve(Name);
        //reject("Error");

        
    }, 11000);
})

promiseFun
.then((data) => {
    console.log(`my name is : ${data}`);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("mission successfull");
})


// qus 8---
// create examples to explain async await function.

let promiseAsyncAwait = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}
    , 
    12000
    ); 
});


async function awaitFunc() {

    let result = await promiseAsyncAwait; 

    console.log(result);
    console.log('hello bhashkar');
}

awaitFunc();

// qus 9---
// create examples to explain promise.all function.

const promiseOne = Promise.resolve(3);
const promiseTwo = 42;
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(resolve, 12000, 'bye bye');
});

Promise.all([promiseOne, promiseTwo, promiseThree]).then((values) => {
  console.log(values);
});

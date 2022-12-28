// let multiply = function(x,y){
//     console.log(x+y);
// }

function multiply(x) {
    return function (y) {
      console.log(x * y);
    };
  }
  let multiplybytwo = multiply(2);
  multiplybytwo(3);

  let multiplybythree = multiply(3);
  multiplybythree(10);
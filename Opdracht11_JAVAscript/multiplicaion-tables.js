
const multiplication = 9
for (let i = 0; i <= 10; i++) {
   let som = i * multiplication
   console.log (multiplication + "*" + i + "=" + som);
  }


  // BONUS

  for (let multiplication = 0; multiplication <= 10; multiplication++) {
    for (let i = 0; i <= 10; i++) {
      let result = multiplication * i;
      console.log(multiplication + " * " + i + " = " + result);
    }
  }
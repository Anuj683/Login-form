
    let a = 20;
    let b = 10;

    // If block
    if (a > b) {
      let sum = a + b;  // Addition
      let diff = a - b; // Subtraction
      let product = a * b; // Multiplication
      let division = a / b; // Division

      console.log("Since a > b, let's do maths:");
      console.log("Addition: " + sum);
      console.log("Subtraction: " + diff);
      console.log("Multiplication: " + product);
      console.log("Division: " + division);
    } 
    // If-Else block
    else {
      console.log("b is greater or equal, so we only calculate squares.");
      console.log("Square of a: " + (a * a));
      console.log("Square of b: " + (b * b));
    }
 
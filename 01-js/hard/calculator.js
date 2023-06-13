/*
  Implement a class `Calculator` having below methods
    - initialise a this.result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note:
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  // let result;
  constructor(){
    this.result = 0;
  }

  add(num){
    if(typeof num !== "number"){
      throw new Error("Not a number error");
    }

    this.result+=num;
  }

  subtract(num){
    if(typeof num !== "number"){
      throw new Error("Not a number error");
    }

    this.result-=num;
  }

  multiply(num){
    if(typeof num !== "number"){
      throw new Error("Not a number error");
    }

    this.result*=num;
  }

  divide(num){
    if(typeof num !== "number"){
      throw new Error("Not a number error");
    }

    if(num == 0){
      throw new Error("Divide by 0 error");
    }

    this.result/=num;
  }

  clear(){
    this.result=0;
  }

  getResult(){
    return this.result;
  }

  calculate(str){
    str = str.trim();
    str = str.replace(/\s/g, "");
    var operand = [];
    var operator = [];

    var open_flag = 0;

    var operator_prec={
      '*': 5,
      '/': 5,
      '+': 1,
      '-': 1
    }

    for(var i=0;i<str.length;i++){
      // console.log("Processing: ",  str[i]);
      if(!isNaN(Number(str[i]))){
        // console.log("number")
        operand.push(str[i]);
      }
      else{
        // console.log("operator")
        if(operator.length === 0){
          operator.push(str[i]);
        }
        else if(str[i]==')'){

          if(open_flag == 0){
            throw new Error("Opening paranthesis missing");
          }

          var op1 = operand.pop();
          var op2 = operand.pop();
          var op = operator.pop();

          if(op == '+'){
            operand.push(op1+op2);
          }else if(op == '-'){
            operand.push(op1 - op2);
          }else if(op == '*'){
            operand.push(op1 * op2);
          }else if(op == '/'){
            if(op2==0){
              throw new Error("Divide by 0 error");
            }
            operand.push(op1 / op2);
          }

          op = operator.pop();

          if(op != '('){
            throw new Error("No opening paranthesis");
          } else{
            open_flag = 0;
          }

        } else{
          if(str[i]=='('){
            open_flag = 1;
          }
          var already = operator[operator.length - 1];
          var now = str[i];

          if(operator_prec[now] < operator_prec[already]){
            var op1 = operand.pop();
            var op2 = operand.pop();
            var op = operator.pop();

            if(op == '+'){
              operand.push(op1+op2);
            }else if(op == '-'){
              operand.push(op1 - op2);
            }else if(op == '*'){
              operand.push(op1 * op2);
            }else if(op == '/'){
              if(op2==0){
                throw new Error("Divide by 0 error");
              }
              operand.push(op1 / op2);
            }

          }
          operator.push(str[i]);
        }

      }
    }

    while(operator.length != 0){
      if(i==')'){
        var op1 = Number(operand.pop());
        var op2 = Number(operand.pop());
        var op = operator.pop();

        if(op == '+'){
          operand.push(op1+op2);
        }else if(op == '-'){
          operand.push(op1 - op2);
        }else if(op == '*'){
          operand.push(op1 * op2);
        }else if(op == '/'){
          if(op2==0){
            throw new Error("Divide by 0 error");
          }
          operand.push(op1 / op2);
        }

        op = operator.pop();

        if(op != '('){
          throw new Error("No opening paranthesis");
        } else{
          open_flag = 0;
        }
      }
      else{
        var op1 = Number(operand.pop());
        var op2 = Number(operand.pop());
        var op = operator.pop();

        // console.log(op + " " + op1 + " " + op2);

        if(op == '+'){
          operand.push(op1+op2);
          // console.log(" pos + " + (op1 + op2));
        }else if(op == '-'){
          operand.push(op1 - op2);
        }else if(op == '*'){
          operand.push(op1 * op2);
        }else if(op == '/'){
          if(op==0){
            throw new Error("Divide by 0 error");
          }
          operand.push(op1 / op2);
        }
      }
      // for(let i of operand){
      //   console.log(i)
      // }
    }
    // console.log("ASD: " + operand.length);
    return operand[0];
  }
}


module.exports = Calculator;

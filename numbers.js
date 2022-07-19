function Calculator(){
    this.operators=[];
    this.functions=[];
    this.calculate = function(str){
        let numbers = str.split(' ');
        if (numbers[1] == '+'){
            return +numbers[0] + +numbers[2];
        }
        if (numbers[1] == '-'){ 
            return +numbers[0] - +numbers[2];
        }
        let index = this.operators.indexOf(numbers[1]);
        return this.functions[index](numbers[0],numbers[2]);
    }
    this.addMethod = function(name,func){
        this.operators.push(name);
        this.functions.push(func);
    }
}
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
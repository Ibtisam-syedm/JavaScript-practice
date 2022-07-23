function Calculator(){
    this.methods = {
        "-":(a,b) => a - b,
        "+":(a,b) => a + b,
    }
    this.calculate = function(str){
        let numbers = str.split(' ');
        return this.methods[numbers[1]](+numbers[0],+numbers[2]);
    }
    this.addMethod = function(name,func){
        this.methods[name] = func;
    }
}
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
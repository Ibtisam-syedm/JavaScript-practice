let value = true;
alert(typeof value);
value = String(value);
alert(typeof value);

alert(Number("   1234   "));//123
alert(Number("1234z"))//NaN
alert(Number(true))//1
alert(Number(false))//0
alert(typeof Number(NaN) === "number")
alert(Number(undefined));//NaN
alert(Number(null));//0
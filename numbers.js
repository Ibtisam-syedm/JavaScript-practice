function readNumber(){
    while(true){
        let a = prompt("Enter Number : ");
        if (Object.is(a,"") || Object.is(a,null)) return null;
        if(isFinite(a)) return a;
        else alert("Invalid number");
    }
}

alert("Your valid input : " + readNumber());
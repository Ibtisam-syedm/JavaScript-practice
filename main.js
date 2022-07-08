let user={
    name:"John",
    money:1000,
    [Symbol.toPrimitive](hint){
        alert(`hint : ${hint}`);
        return hint === "string" ? `name : "${this.name}" ` : this.money;
    },
    toString(){
        return this.name;
    },
    valueOf(){
        return this.money;
    }
}

alert(+user);
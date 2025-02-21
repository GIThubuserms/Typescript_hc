"use strict";
// How to run   tsc -w
const myname = "Murtaza";
console.log(myname);
// console.log("Helloworld");
// array play
const myarr = ["M", "U", "R", "T", "A", "Z", "A"];
const aplha = {
    name: "ede",
    age: 23,
    gender: true,
    span: () => {
        console.log("Hello world");
    }
};
aplha.span;
let letmyinteface = {
    name: "dd",
    age: 32,
    gender: true,
    span: () => {
        console.log("HH");
    }
};
letmyinteface.span();
// FUNCTION WITH REST OPERATOR
const func1 = (num) => {
    return num;
};
const func2 = (...m) => {
    return m;
};
// Day 2 ended with 55 mins
class player {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
        this.height = height,
            this.weight = weight;
    }
    get getplayerheight() {
        return this.height;
    }
    set setplayerheight(hght) {
        this.height = hght;
    }
}
const player1 = new player(5.9, 60);
console.log(player1.getplayerheight);
player1.setplayerheight = 6.1;
console.log(player1.getplayerheight);
class apple1 {
    constructor(nm, ps, amt, id) {
        this.name = nm,
            this.price = ps,
            this.amount = amt,
            this.id = id;
    }
}
class apple2 {
    // name:string
    // price:number
    // amount:number
    // id?:number
    constructor(nm, ps, amt, id) {
        this.nm = nm;
        this.ps = ps;
        this.amt = amt;
        this.id = id;
        this.nm = nm,
            this.ps = ps,
            this.amt = amt,
            this.id = id;
    }
}
// Day 2 ended with 1:40 mins
// Type assertion
const myp = document.getElementById('myp');
console.log(myp);
console.log(typeof (myp));
const per1 = {
    name: "M",
};
const getname = (nm) => {
    return per1[nm];
};
console.log(getname("name"));
// console.log(getname("nme"));
// Utility Types
// partial required   
// Generics
const getsame = (n) => {
    return n;
};
// DAY 4 ends on 2:31

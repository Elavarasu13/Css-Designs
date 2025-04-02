
let item = {
    name :'mobile',
    price : 25000,
    quantity : 1
}

console.log(item);
console.log(item);

  
let car = {
    name: "xuv",
    color : "black",
    price : 12000000,
    buy : function(){
        console.log('car purchased');
    }
}
car.buy();

let User = {
    userName : "Arun",

    password : "KJarun",

    login : function()
    {
        console.log('Your logged in Successfully', User.userName);
    }
}

let User2 = {
    userName : "Arvinth",
    password : "Maravinth",

    login : function()
    {
        console.log('Your logged in Successfully', User2.userName);
    }
}

User.login();
User2.login();
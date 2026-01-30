# WDD131 Notes

## JS Functions

**3 ways to define functions:**

    function greet(name) 
    ^ This is declaring "greet" as the function.

    const greet = function(name)
    ^ This is making a variable "greet" and storing a function in it.

    const greet = (name) => {
        code for the function goes here.
    }
    ^ This is  also making a variable "greet" and storing a function in it. 

**You call them the same way you would in Python:**

    gret()
    gret(name)

**Here is a full (small) function and it being used:**

    const introduce = (name, age) => `My name is ${name} and I'm ${age} years old.`

    introduce("Tyler", 21)

    => Means "now here's what the function does. When you use it you don't need to put {} around the function body.

    using ${} is easier to write than "My name is" + name + "and I'm" + age + "years old." 

    You have to use `backticks` instead of "quotees" when you use ${}

    You cannot mix **arrow functions** with **function declarations**. It's like saying "I am'm happy". It's redundnat.

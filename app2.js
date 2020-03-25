const readline=require('readline');
const rl=readline.createInterface({input : process.stdin, 
                            output : process.stdout});
let num1=Math.floor((Math.random()*10)+1);
let num2=Math.floor((Math.random()*10)+1);
let answer=num1+num2;

rl.on("close",()=>{console.log("correct!!");});

rl.question(`what is ${ num1 } plus ${ num2 } ?\n`,
(userInput)=> {
    //console.log(userInput);
    if (userInput.trim()==answer ) {
        rl.close();
    }
    else {
        rl.setPrompt('incorrect response, try again idiot!\n');
        rl.prompt();
        rl.on('line',(userInput)=>
        {
            if(userInput.trim()==answer){
                rl.close();
            }
            else{
                rl.setPrompt(`Your answer ${ userInput } is wrong\nduh\n`);
                rl.prompt();
            }
        })
    }
});





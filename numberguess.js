var m1 = document.getElementById("msg1");
var m2 = document.getElementById("msg2");
var m3 = document.getElementById("msg3");
var answer=Math.floor(Math.random()*100 )+ 1;

var noofguesses =0;
var guessesnum=[];

function play(){
    const userguess=document.getElementById("guess").value;
    if(userguess<1 || userguess>100){
        alert("please enter a number between 1 and 100");
    }

    else{
        guessesnum.push(userguess);
        noofguesses +=1;

        if(userguess < answer){
            m1.textContent="your guessed number is too low";
            m2.textContent="no of guesses :"+noofguesses;
            m3.textContent="Guessed number are:"+guessesnum;
        }
        
        else if(userguess > answer){
            m1.textContent="your guessed number is too high";
            m2.textContent="no of guesses :"+noofguesses;
            m3.textContent="Guessed number are:"+guessesnum;
        }

        
        else if(userguess == answer){
            m1.textContent="you won it";
            m2.textContent="the number was answer"+answer;
            m3.textContent="you guessed it in "+noofguesses+"guesses";
        }

    }
}
function add(...args) {
   display.textContent = args.reduce((previous,current)=> previous + current);
   result = args.reduce((previous,current)=> previous + current)
}
function subtract(...args) {
    display.textContent = args.reduce((previous,current)=> previous - current);
    result = args.reduce((previous,current)=> previous - current)
}
function multi(...args) {
    display.textContent = args.reduce((previous,current)=> previous * current);
    result = args.reduce((previous,current)=> previous * current)
}
function divide(...args) {
    display.textContent = args.reduce((previous,current)=> previous / current);
    result = args.reduce((previous,current)=> previous / current)
}

let result;
let numFirst;
let operator;
let numSecond;

function operate(calc,first,second) {
    switch (calc) {
        case "+":
            add(first,second)
            break;
        case "-":
            subtract(first,second)
            break;
        case "x":
            multi(first,second)
            break;
        case "/":
            divide(first,second)
            break;
        default:
           console.log("clicked")
            break;
    }
}

const clear = document.querySelector(".clear")
const number = document.querySelectorAll(".number")
const display = document.querySelector(".display")
const sumAdd = document.querySelector(".add")
const sumSubtract = document.querySelector(".subtract")
const sumMulti = document.querySelector(".multi")
const sumDivide = document.querySelector(".divide")
const button = document.querySelectorAll("button")
const equals = document.querySelector(".equals")
//const equation = document.querySelectorAll("#equation")

button.forEach(element => {
    element.addEventListener("click", ()=>{
        display.textContent += element.textContent;
       console.log(operator)
        if(operator!==undefined){
            if(element===sumAdd||element===sumSubtract||element===sumMulti||element===sumDivide){
                if(numFirst===undefined||numSecond===undefined){
                    display.textContent=`${result}${operator}`;
                    operator=element.textContent;
                }else
                numFirst=Number(numFirst.split("").slice(9).join(""));
                numSecond=Number(numSecond.split("").slice(9).join(""));
                operate(operator,numFirst,numSecond);
                operator=element.textContent;
                numFirst="123456789"+result
                numSecond=undefined;
                display.textContent=`${result}${operator}`;
            }
        }if(element===sumAdd||element===sumSubtract||element===sumMulti||element===sumDivide){
           operator=element.textContent;
        }else if(operator===undefined){
            if(isNaN(element.textContent)===false){
                numFirst+=element.textContent; }   
        }else if(operator!==undefined){
            if(isNaN(element.textContent)===false){
                numSecond+=element.textContent;}
        }else if(isNaN(element.textContent)===false){
            numFirst+=element.textContent;
        } else display.textContent="error"
    });
});

equals.addEventListener("click",()=>{
    numFirst=Number(numFirst.split("").slice(9).join(""));
    numSecond=Number(numSecond.split("").slice(9).join(""));
    
    operate(operator,numFirst,numSecond);
    operator=undefined;
    numFirst="123456789"+result
    numSecond=undefined;
})

clear.addEventListener("click",()=>{
    display.textContent = "";
    result = undefined;
    numFirst = undefined;
    numSecond = undefined;
    operator = undefined;

})

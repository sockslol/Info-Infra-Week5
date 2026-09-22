document.querySelector("#equalsButton").addEventListener("click",function() {
    mathSum(
        document.querySelector("#number1").value , 
        document.querySelector("#number2").value ,
        document.querySelector("#symbol").value
    );
})


function mathSum (num, num2, symbol){
    switch(symbol){
        case "+":
        sum = Number(num) + Number(num2)
        break
        case "-":
        sum = Number(num) - Number(num2)
        break
        case "*":
        sum = Number(num) * Number(num2)
        break
        case "/":
        sum = Number(num) / Number(num2)
        break
    }

    document.querySelector("#answer").innerHTML=sum
    console.log(sum)
}
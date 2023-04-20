//DOM節點
const button = document.querySelector("#btn");
const input = document.querySelector("#input");
const result = document.querySelector("#result");

let x;
let y;
let arr =[];
let count = 0 ;

//監聽器
button.addEventListener("click",function(){
    let num = +input.value;
    console.log(num);
    
    arr = [];
    for(x = num; x > 0; x--){
        for(y = 2; y <= x; y++){
            if(x % y === 0 && x !== y){
                break;
            }else if(x % y === 0 && x === y){
                arr.push(x);
            }
        }
    }

    result.innerHTML = arr;

    
})

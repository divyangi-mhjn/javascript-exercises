function changeColor(number){
    try{
let selectedDiv = document.getElementById(`div${number}`);
selectedDiv.style.backgroundColor = "red";
document.getElementById('error').innerHTML = 'you got it' 
document.getElementById('error').style = `color:green`
    }
    catch(e){
        console.log(e)
        let container = document.getElementById('container');
        let cDiv = container.children;
        [...cDiv].forEach(el => el.style.backgroundColor = 'white') 
        document.getElementById('error').innerHTML = 'there is some error'     
        document.getElementById('error').style = `color:red`  
    }
}



const inputDiv = document.getElementById('input1');
inputDiv.addEventListener("keyup",function(e){
    changeColor(e.target.value)
})

const checkBoxes=() =>{
    const maxChecks = 2
let selectedCount = 0

document.querySelector('.check').addEventListener('click', event => {
  if (event.target.type === 'checkbox') {
    selectedCount = event.target.checked
      ? selectedCount + 1
      : selectedCount - 1
  }

  if(selectedCount >=maxChecks){
    [...document.querySelectorAll('input[type="checkbox"]:not(:checked')].forEach(el => el.disabled = true)
  }
  else{
    [...document.querySelectorAll('input')].forEach(el => el.disabled = false)
  }

  
  
})
}

checkBoxes()

const radioButtons = () =>{
document.getElementById('radioDiv').addEventListener('click',(e)=>{
    if(e.target.type === 'radio'){
        console.log(e.target.value)
    }
})
}
radioButtons()

const handleClick = () =>{
    const pattern = /^([a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,})$/;
    let str = document.getElementById('email').value
    let result = pattern.test(str)
    console.log(result)
    console.log(str)
}

const counter = ()=>{
    let count = 0
let spanEl = document.getElementById('counter')
let increase = document.getElementById('increase')
let decrease = document.getElementById('decrease')
spanEl.innerHTML = count;
increase.addEventListener('click',(e) =>{
    count = count + 1
    spanEl.innerHTML = count
})
decrease.addEventListener('click',(e) =>{
    count = count - 1
    spanEl.innerHTML = count
    
})
}

counter()
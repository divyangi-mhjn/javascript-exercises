const btn = document.querySelector(".btn");


btn.addEventListener("click",()=>{
  console.log('i am clicked')
})


let inputElement = document.querySelector('.in');

inputElement.addEventListener("mouseover",(e)=>{
  document.querySelector('.in').focus()
  console.log('i am hovered')
})

inputElement.addEventListener("mouseout",(e)=>{
  document.activeElement.blur()
  console.log('i am out')
})

inputElement.addEventListener("focus",(e)=>{
  e.target.style = 'background-color: aqua'
  console.log('i am out')
})

inputElement.addEventListener("blur",(e)=>{
  e.target.style = 'background-color: field'
  console.log('i am out')
})


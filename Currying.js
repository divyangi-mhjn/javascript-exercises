const updateElement = (className)=>{
    return (element) =>{
      return(text) =>{
    return document.querySelector(`.${className}`).innerHTML = `<${element}>${text}</${element}>`
    }
  }
  }
  
  updateElement('curry1')('span')('divyangi')  //one way
  const classNameF = updateElement('curry2')  //another way
  const elementF = classNameF('p')
  const textF = elementF('mahajan')
  textF
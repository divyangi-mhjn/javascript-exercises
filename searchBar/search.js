let productslistum = ''
const fetchProducts = async() =>{
  const productList = await fetch('https://dummyjson.com/products').then(res=>res.json());
  if(productList){
  productslistum= productList.products
  getProducts(productList.products)
  }
}
const getProducts = (productList) =>{  
  if(productList){    
  let list='';
  productList.forEach(({title}) => list += `<li> ${title}</li>`);
  const listEl = document.getElementById('list');
  listEl.innerHTML = list
  }
}

const debounce = (func,delay) =>{
  let debounceTimer;
  return function(){
    clearTimeout(debounceTimer)
    debounceTimer= setTimeout(()=>func.call(this),delay)
  }
}

const inputEl = document.querySelector('.search');
inputEl.addEventListener('keyup',debounce(()=>{
  const value = productslistum.filter(({title}) => title.toUpperCase().indexOf(inputEl.value.toUpperCase()) >=0);
  getProducts(value)
},500))

fetchProducts()




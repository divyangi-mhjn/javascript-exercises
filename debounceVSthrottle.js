function debounce(func,delay){
    let debounceTime;
    return function(...args){
      clearTimeout(debounceTime)
      debounceTime = setTimeout(()=> func.call(this,...args),delay)
    }
  }
  function throttle(func,delay){
      let prev = 0;
      return (...args)=>{
      let now = new Date().getTime();
      if(now - prev > delay){
        prev=now
        return func.call(this,...args)
      }
      }
  }
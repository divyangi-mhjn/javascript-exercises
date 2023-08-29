function Car(name,model){
    this.carName = name 
    this.model = model
  }
  
  const setBrand = (brand)=>{
    Car.apply(this,['divyangi','xva']);  
    this.brand = brand
    console.log('details are', this)
  }
  
  function setColor(color){
    const data = Car.bind(this,'divyangi','xva');
    data()  
    this.color = color
    console.log('details are', this)
  }
  
  const addBrand = setBrand('toyota')
  const addColor = setColor('blue')
  
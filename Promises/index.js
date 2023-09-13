
const fetchData = async(url) =>{
    const response = await fetch(url).then(res=>res.json()).then(res => res)
    return response
 }
 
 (async() =>{
   const response = await fetchData('https://swapi.dev/api/people/')
   const {results} = response;
   const tableBody = document.getElementById("tablebody")
   if(results){
     results.forEach(async(data) =>{
       const {films,species,name} = data;
      //using allSettled 
       const filmData = await films.map(f => fetchData(f));
       const film = await Promise.allSettled(filmData).then(response => response.filter(({status}) => status === "fulfilled").map(({value}) => value.title))
      //using promise.all 
       const speciesData = await species.map(s => fetchData(s))
       const speci = await Promise.all(speciesData).then(response => response.map(s => s.name));
       
       const row = document.createElement('tr');
       
       const data1 = document.createElement('td');
       const data2 = document.createElement('td');
       const data3 = document.createElement('td');
       
       const textNode1 = document.createTextNode(name)
       const textNode2 = document.createTextNode(film)
       const textNode3 = document.createTextNode(speci)
       
       data1.appendChild(textNode1)
       data2.appendChild(textNode2)
       data3.appendChild(textNode3)
       
       row.appendChild(data1)
       row.appendChild(data2)
       row.appendChild(data3)
       
       tableBody.appendChild(row)
     })
   }
 })()
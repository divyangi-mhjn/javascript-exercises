
const pieChart = document.getElementById("piechart")
pieChart.style = `--percent:10%`
const inputHandle = document.getElementById("inputHandle")
const para = document.getElementById("para")

inputHandle.addEventListener("input" , (e) =>{
    pieChart.style = `--percent:${e.target.value}%`
    para.value =  `${e.target.value}`
})

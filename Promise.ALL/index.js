const fetchData = async (url) => {
    let response = await fetch(url).then(res => res.json()).then(res => res)
    return response;
}

const showData = async () => {
    let url = 'https://swapi.dev/api/people/'
    let response = await fetchData(url)
    const { results } = response
    console.log('kanha')
    if (results) {
        let tbody = document.querySelector('.tablebody')
        let table = document.getElementById('table');

        results.forEach(async (data) => {
            const { films,vehicles } = data;
            const filmsResponses = await Promise.all(
                films.map(async filmurl => {
                    const res = await fetchData(filmurl);
                    return res.title;
                }));
            const vehiclesResponses = await Promise.race(
                vehicles.map(async vehicleUrl =>{
                    const res = await fetchData(vehicleUrl);
                    return res.name
                })
            )
            if (filmsResponses.length > 0 || vehiclesResponses.length > 0) {
                var tr = document.createElement('tr')
                var td = document.createElement('td')
                var td1 = document.createElement('td')
                var td3 = document.createElement('td')
                td.innerHTML = data.name;
                td1.innerHTML = filmsResponses;
                td3.innerHTML = vehiclesResponses;
                tr.appendChild(td)
                tr.appendChild(td1)
                tr.appendChild(td3)
                tbody.appendChild(tr)
                table.appendChild(tbody);
            }
        })
    }
}

showData();
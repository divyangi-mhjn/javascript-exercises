// Transform Time from 12 hour format to 24 hour format

const time1 = '6:30 pm';
const time2 = '5:00 am';

const transformTime = (input) =>{
    const [time,modifier]= input.split(' ');
    let [hours,minutes] = time.split(':');
    
    if(hours == '12') hours = '00'
    if(modifier.toUpperCase() == 'PM') hours = parseInt(hours) + 12;
    
    return `${hours}:${minutes}`
}

console.log(transformTime('12:00 pm'))
console.log(transformTime('12:00 am'))
console.log(transformTime('6:24 pm'))

// OUTPUT
// 12:00
// 00:00
// 18:24
// Remove the least used cache from MAP

class LRU {
    constructor(max) {
        this.max = max;
        this.cache = new Map();
    }

    get(key) {
        const value = this.cache.get(key)
        //refresh token
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key,value);
    }

    set(key,value) {
       
       if(this.cache.size>=this.max){ 
        const [firstKey] = this.cache.keys()           
        this.cache.delete(firstKey)
       }
       this.cache.set(key,value)
    }
}

let l = new LRU(3);
l.set(1,"mango")
l.set(3,"orange")
l.set(2,"banana")
console.log(l.cache)

l.set(4,"kiwi")
console.log(l.cache)
l.set(5,"kiwi")
console.log(l.cache)

l.get(4);
console.log(l.cache)

// OUTPUT
// Map(3) { 1 => 'mango', 3 => 'orange', 2 => 'banana' }
// Map(3) { 3 => 'orange', 2 => 'banana', 4 => 'kiwi' }
// Map(3) { 2 => 'banana', 4 => 'kiwi', 5 => 'kiwi' }
// Map(3) { 2 => 'banana', 5 => 'kiwi', 4 => 'kiwi' }
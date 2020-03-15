const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let reverse = days.reduceRight((curr, val) => (curr.push(val), curr), []);

console.log(days)
console.log(reverse)

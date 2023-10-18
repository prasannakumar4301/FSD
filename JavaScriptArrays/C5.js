// indexof() and lastIndexof()
l1 = [10, 20, 30, 40, 10, 60, 10, 80, 90, 100]

console.log(l1.indexOf(10))
console.log(l1.lastIndexOf(10))
console.log(l1.indexOf(10, 3))

//concat
l1 = [10, 20]
l2 = [30, 40]
console.log(l1.concat(l2))

console.log(l1.concat([100, 200]))

// isArray()
l1 = [10, 20]
console.log(Array.isArray(l1))
l2 = "NameOne"
console.log(Array.isArray(l2))

// sort()
l1 = [20, 40, 10, 50, 30]
console.log(l1.sort())
console.log(l1.reverse())

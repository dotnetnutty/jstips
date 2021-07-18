const people =
[
    { name: "John", age: 44 },
    { name: "Paul", age: 42 },
    { name: "George", age: 47 },
    { name: "Ringo", age: 42} 
]

const sum = people.reduce((total, person) =>
{
    return total + person.age
}, 0) // <-- 0 = initial value of total

console.log(sum)

const results = items.reduce((groups, person) =>{
    const age = person.age
    if (groups[age] == null) groups[age] = []
    groups[age].push(person)
    return groups
}, {})

console.log(results)
const people = [
    { name: "john", age: 36 },
    { name: "bianca", age: 34 },
    { name: "niall", age: 36 },
    { name: "dog", age: 1 }
]


let ageGroups = people.reduce((groupedPeople, person) => {
    const age = person.age;
    if(groupedPeople[age] == null) groupedPeople[age] = [];
    groupedPeople[age].push(person);
    return groupedPeople;
}, {})

console.log(ageGroups);
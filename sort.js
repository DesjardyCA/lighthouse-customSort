var list = [5, 2, 1, 8, 100];

list.sort((a, b) => a - b);

console.log(list);

var students = [{
    id: 1,
    name: "bruce",
    age: 40
  },
  {
    id: 2,
    name: "zoidberg",
    age: 22
  },
  {
    id: 3,
    name: "alex",
    age: 22
  },
  {
    id: 4,
    name: "alex",
    age: 30
  }
];

students.sort(function (a, b) {
  var persA = a.name.toLowerCase();
  var persB = b.name.toLowerCase();

  if (persA < persB) {
    return -1;
  } else if (persA > persB) {
    return 1;
  } else if (persA === persB) {
    return b.age - a.age;
  }
});

console.log(students);
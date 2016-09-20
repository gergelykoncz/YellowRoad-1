var Users = [
    {name: 'Jack', age: 33},
    {name: 'Filpo', age: 77},
    {name: 'Jamie', age: 44},
    {name: 'Istvan', age: 22}
];
undefined
for (var i = 0; i < Users.length-1; i++) {
    for (var j = i+1; j < Users.length; j++) {
        if (Users[i].age > Users[j].age) {
            var temp = [Users[i], Users[j]];
            Users[i] = temp[1];
            Users[j] = temp[0];   
        }
    }
}
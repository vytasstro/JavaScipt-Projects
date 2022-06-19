let data = [
    {
        name: 'Titas',
        age: '20'
    },
    {
        name: 'Gerardas',
        age: '25'
    },
    {
        name: 'Jokubas',
        age: '45'
    },
    {
        name: 'Jonas',
        age: '32'
    },
    {
        name: 'Povilas',
        age: '25'
    },
    {
        name: 'Kestutis',
        age: '35'
    },
    {
        name: 'Petras',
        age: '45'
    },
    {
        name: 'Lukas',
        age: '21'
    },
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');
let btn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

btn.addEventListener('click', function() {
    btn.classList.toggle('active');
    menu.classList.toggle('active');
});

let cardGrid = document.getElementById('cardGrid');
let searchInput = document.getElementById('searchInput');
let count = document.getElementById('count');
let noResults = document.getElementById('noResults');

function showAgents(list) {
    cardGrid.innerHTML = '';
    count.textContent = list.length;

    if (list.length === 0) {
        noResults.classList.remove('hide');
    } else {
        noResults.classList.add('hide');
    }

    for (let i = 0; i < list.length; i++) {
        let agent = list[i];

        let card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${agent.image}" alt="${agent.name}">
            <div class="card-text">
                <h3>${agent.name}</h3>
                <p>${agent.description}</p>
                <a href="${agent.file}" download="${agent.download}">Download</a>
            </div>
        `;

        cardGrid.appendChild(card);
    }
}

if (cardGrid) {
    showAgents(agents);

    searchInput.addEventListener('input', function() {
        let searchTerm = searchInput.value.toLowerCase();
        let results = [];

        for (let i = 0; i < agents.length; i++) {
            if (agents[i].name.toLowerCase().includes(searchTerm)) {
                results.push(agents[i]);
            }
        }

        showAgents(results);
    });
}
// script.js

import { agents } from './agents-data.js';

// ── Hamburger menu ──────────────────────────────────────────
const btn = document.querySelector('.hamburger');
const links = document.querySelector('.nav-links');

if (btn && links) {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        links.classList.toggle('active');
    });
}

// ── Agent showcase (home page) ──────────────────────────────
const showcaseImg = document.getElementById('showcase-img');
const showcaseName = document.getElementById('showcase-name');
const showcaseDesc = document.getElementById('showcase-desc');
const showcaseIndex = document.getElementById('showcase-index');
const showcaseTotal = document.getElementById('showcase-total');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

function updateShowcase() {
    const agent = agents[currentIndex];
    showcaseImg.src = agent.image;
    showcaseImg.alt = agent.name;
    showcaseName.textContent = agent.name;
    showcaseDesc.textContent = agent.description;
    showcaseIndex.textContent = currentIndex + 1;
}

if (showcaseName) {
    showcaseTotal.textContent = agents.length;
    updateShowcase();

    prevBtn.addEventListener('click', () => {
        if (currentIndex === 0) {
            currentIndex = agents.length - 1;
        } else {
            currentIndex--;
        }
        updateShowcase();
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex === agents.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateShowcase();
    });
}

// ── Agent search (agents page) ─────────────────────────────
const grid = document.getElementById('agent-grid');
const searchInput = document.getElementById('search-input');
const countDisplay = document.getElementById('agent-count');
const noResults = document.getElementById('no-results');

function renderAgents(list) {
    grid.innerHTML = '';
    countDisplay.textContent = list.length;

    if (list.length === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }

    list.forEach(agent => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${agent.image}" alt="${agent.name}">
            <div class="card-body">
                <h3>${agent.name}</h3>
                <p>${agent.description}</p>
                <a href="${agent.file}" download="${agent.download}">Download</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterAgents(searchTerm) {
    return agents.filter(agent =>
        agent.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

if (grid && searchInput) {
    renderAgents(agents);

    searchInput.addEventListener('input', () => {
        const term = searchInput.value;
        const filtered = filterAgents(term);
        renderAgents(filtered);
    });
}
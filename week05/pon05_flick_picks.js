const allSpans = document.querySelectorAll('article.movie p span')

// add aria to stars
allSpans.forEach((span) => {
    const stars = span.innerText.length;
    span.setAttribute('aria-label', `${stars} out of 5 stars`);
})
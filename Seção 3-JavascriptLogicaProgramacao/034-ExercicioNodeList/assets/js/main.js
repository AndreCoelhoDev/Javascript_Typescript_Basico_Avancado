const paragrafos = document.querySelector('.paragrafos');
console.log(paragrafos);

const ps = document.querySelectorAll('p');
console.log(ps.length);

for (const key of ps) {
    console.log(key);
}

const estilosBody = getComputedStyle(document.body);
const bgColor = estilosBody.backgroundColor;
console.log(bgColor);

for (const key of ps) {
    key.style.backgroundColor = bgColor;
    key.style.color = '#fff';
}

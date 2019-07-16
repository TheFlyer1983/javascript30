const links = document.querySelector('#links');
const linkList = document.querySelector('#link-list');

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    linkList.innerHTML = data.map((link) => {
      return `
        <li class="link-item"><a href="${link.url}">${link.name}</a></li>
      `;
    }).join('');
  })
  .catch(err => {
    console.log(err);
  });

const linkItems = document.querySelectorAll('.link-item');

function handleHover() {
  console.log(e);
  console.log(this);
  this.classList.add('hover');
}

console.log(linkItems);
//linkItems.forEach(linkItem => linkItem.addEventListener('mouseenter', handleHover));
linkItems.forEach(linkItem => console.log(linkItem));
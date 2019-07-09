const links = document.querySelector('#links');
const linkList = document.querySelector('#link-list');

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    linkList.innerHTML = data.map((link) => {
      console.log(link.url);
      return `
        <li><a href="${link.url}">${link.name}</a></li>
      `;
    }).join('');
  })
  .catch(err => {
    console.log(err);
  });


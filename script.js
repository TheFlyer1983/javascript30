const linkList = document.querySelector('#link-list');

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    linkList.innerHTML = data.map((link) => {
      return `
        <li class="link-item"><a href="${link.url}">${link.name}</a></li>
      `;
    }).join('');
    const linkItems = document.querySelectorAll('li');
    linkItems.forEach(linkItem => linkItem.addEventListener('mouseenter', handleHover));
    linkItems.forEach(linkItem => linkItem.addEventListener('mouseleave', handleHover));
  })
  .catch(err => {
    console.log(err);
  });

function handleHover(e) {
  const child = this.children[0];
  if (e.type === 'mouseenter') {
    this.classList.add('alert-primary');
    child.classList.add('alert-link');
  } else {
    this.classList.remove('alert-primary');
    child.classList.remove('alert-link');
  }
}
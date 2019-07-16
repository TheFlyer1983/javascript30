const linkList = document.querySelector('#link-list');

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    linkList.innerHTML = data.map((link) => {
      return `
        <a href="${link.url}" class="nav-link"><li class="link-item">${link.name}</li></a>
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
  const parent = this.parentElement;
  if (e.type === 'mouseenter') {
    this.classList.add('alert-primary');
    parent.classList.add('alert-link');
  } else {
    this.classList.remove('alert-primary');
    parent.classList.remove('alert-link');
  }
}
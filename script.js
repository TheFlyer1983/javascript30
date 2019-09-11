const linkList = document.querySelector('#link-list');

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    linkList.innerHTML = data.map((link) => {
      return `
        <a href="${link.url}" class="nav-link">
          <div class="link-item hide-child grow-large link-background" style="background-image: url('${link.background}');">
            <span class="child link-text">${link.name}</span>
          </div>
        </a>
      `;
    }).join('');
    const linkItems = document.querySelectorAll('.nav-link');
    linkItems.forEach(linkItem => linkItem.addEventListener('mouseenter', handleHover));
    linkItems.forEach(linkItem => linkItem.addEventListener('mouseleave', handleHover));
  })
  .catch(err => {
    console.log(err);
  });

function handleHover(e) {
  // const parent = this.parentElement;
  if (e.type === 'mouseenter') {
    this.classList.add('alert-primary');
    this.classList.add('alert-link');
  } else {
    this.classList.remove('alert-primary');
    this.classList.remove('alert-link');
  }
}
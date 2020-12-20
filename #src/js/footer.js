let linksObj = {
  'title1': {
    'item1.1': 'link1.1',
    'item1.2': 'link1.2',
    'item1.3': 'link1.3',
    'item1.4': 'link1.4',
  },
  'title2': {
    'item2.1': 'link2.1',
    'item2.2': 'link2.2',
    'item2.3': 'link2.3',
    'item2.4': 'link2.4',
  },
  'title3': {
    'item3.1': 'link3.1',
    'item3.2': 'link3.2',
    'item3.3': 'link3.3',
    'item3.4': 'link3.4',
  },
},
footer__list = document.getElementById('footerList');

function fillFooter() {
  if(window.innerWidth > 992) {
    fillListPcFooter()
  } else {
    fillListMobFooter();
    dropdownActive()
  }
}

function fillListPcFooter() {
  footer__list.innerHTML = '';
  listColumns = '';
  Object.entries(linksObj).map(([key, value]) => { 
    listItems = '';
    Object.entries(value).map(([key, value]) => { 
      listItems += `<a class="footerPCBox__item" href="${value}">${key}</a>`;
    })
    listColumns += `<div class="footerPCBox__column">${listItems}</div>`; 
  })
  footer__list.insertAdjacentHTML('beforeend', `<div class="footerPCBox">${listColumns}</div>`);
}

function fillListMobFooter() {
  footer__list.innerHTML = '';
  listItems = '';
  Object.entries(linksObj).map(([key, value]) => { 
    listLinks = '';
    Object.entries(value).map(([key, value]) => { 
      listLinks += `<a class="footerMobBox__link" href="${value}">${key}</a>`;
    })
    listItems += `<div class="footerMobBox__item">
      <div class="footerMobBox__open"><p class="footerMobBox__title">${key}</p><div class="footerMobBox__arrow"></div></div>
      <div class="footerMobBox__close">${listLinks}</div>
    </div>`; 
  })
  footer__list.insertAdjacentHTML('beforeend', `<div class="footerMobBox">${listItems}</div>`);
}

function dropdownActive() {
  document.querySelectorAll('.footerMobBox__item').forEach(elemnt => {
    elemnt.querySelectorAll('.footerMobBox__open')[0].addEventListener('click', e => {
      elemnt.classList.toggle('footerMobBox__item-active');
    })
  })
}

fillFooter();
window.addEventListener('resize', () => {
  fillFooter()
});
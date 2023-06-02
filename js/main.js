$(document).ready(function(){

//header
let header = document.querySelector('.header');
header.style.cssText = "height: 1000px";

//navigation
let nav = document.createElement('nav');
nav.classList.add('nav__menu');
header.appendChild(nav);
//nav.style.backgroundColor = 'yellow';
nav.style.height = '50px';
nav.style.width = '100%'


//navigation menu list
let navMenu = document.createElement('ul');
navMenu.classList.add('nav__menu-list')
let listArr = ['Главная','О Клубе', 'Турниры', 'Услуги', 'Детский Теннис', 'Галерея', 'Цены', 'Контакты'];
let pagesArr = ['main.html', 'about-us.html', 'tournaments.html', 'services.html', 'tennis-for-kids.html', 'gallery.html', 'prices.html', 'contacts.html']
nav.appendChild(navMenu)

for (let i = 0; i < listArr.length; i++) {
    let li = document.createElement('li');
    let link = document.createElement('a');
    navMenu.appendChild(li)
    li.appendChild(link)
    link.textContent = listArr[i];
    link.href = pagesArr[i];
    link.classList.add('link');
    
  }


let wrapper = document.querySelector('.wrapper');
wrapper.appendChild(nav)

let logo = document.querySelector('.logo')

logo.addEventListener('click', function () {
  window.location.href = '../index.html'
})


let videoPlayButton = document.querySelector('.video-logo')
let window = document.querySelector('.tennis-promo')
let video = document.querySelector('#fon')

videoPlayButton.addEventListener('click', function (evt) {
  window.classList.toggle('active');
  video.play()
  video.currentTime = 0;


});


document.addEventListener('keydown', function (e) {
  if (e.number === 'esc' || 'ESC' || 27) {
    window.classList.remove('active')
    video.pause();
  }
})

const URL = 'https://jsonplaceholder.typicode.com/posts';




const getPosts = async () => {
  let response;
  try {
    response = await fetch(URL);        
  } catch (error) {
    console.log('error ' + error);
    return [];
  }

  const posts = await response.json();
  return posts;
};

const fn = async () => {
  const posts = await getPosts();
  console.log(`Список публикаций: `);
  console.log(posts);
}

fn();



























  });
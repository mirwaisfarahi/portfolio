const openNav = document.querySelector('#menu');

openNav.addEventListener('click', () => {
  document.querySelector('#mobileNav').style.height = '812px';
});

const closeNav = document.querySelector('.close-button');
closeNav.addEventListener('click', () => {
  document.querySelector('#mobileNav').style.height = '0%';
});

const closes = document.querySelectorAll('.close');
Array.from(closes).forEach((close) => {
  close.addEventListener('click', () => {
    document.querySelector('#mobileNav').style.height = '0%';
  });
});

// popup window for works section
let projects = [
  {
    project_id: 'project1',
    name: "Tonic",
    experiance: ["CANOPY", "Backend Dev", "2015"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    languages: ["html", "Ruby on rails", "css", "javaScript"],
    popuplanguage: ["html", "css", "javaScript", "github", "ruby", "bootstrap"],
    popDescription:
      "Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum?",
    image: "images/Snapshoot-Portfolio-desktop.png",
  },
  {
    project_id: 'project2',
    name: "Multi-Post Stories",
    experiance: ["FACEBOOK", "Backend Dev", "2015"],
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    languages: ["html", "Ruby on rails", "css", "javaScript"],
    popuplanguage: ["html", "css", "javaScript", "github", "ruby", "bootstrap"],
    popDescription:
      "Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum?",
    image: "images/Snapshoot-Portfolio-desktop-2.png",
  },
  {
    project_id: 'project3',
    name: "Facebook 360",
    experiance: ["Facebook", "Backend Dev", "2015"],
    description:
      "Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    languages: ["html", "Ruby on rails", "css", "javaScript"],
    popuplanguage: ["html", "css", "javaScript", "github", "ruby", "bootstrap"],
    popDescription:
      "Dolor ipsam molestiae assumenda nisi natus voluptatum Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum? Dolor ipsam molestiae assumenda nisi natus voluptatum?",
    image: "images/Snapshoot-Portfolio-desktop3.jpg",
  },
  {
    project_id: 'project4',
    name: "Uber Navigation",
    experiance: ["Uber", "Backend Dev", "2015"],
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    languages: ["html", "Ruby on rails", "css", "javaScript"],
    popuplanguage: ["html", "css", "javaScript", "github", "ruby", "bootstrap"],
    popDescription:
      "Dolor ipsam molestiae assumenda nisi natus voluptatum Dolor ipsam molestiae assumenda nisi natus voluptatum Dolor ipsam molestiae assumenda nisi natus voluptatum Dolor ipsam molestiae assumenda nisi natus voluptatum",
    image: "images/Snapshoot-Porfolio-desktop4.png",
  }
];

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
});

function openModal(modal) {
  if (modal == null) return

  const modals = document.querySelectorAll('.modal');

  for (let i = 0; i <= projects.length; i++) {
    if (projects[i].project_id == modal.id) {

      modals.forEach(function (modal) {
        const title = modal.firstElementChild.firstElementChild;
        const body = modal.lastElementChild;
        title.innerHTML = `<h3> ${projects[i].name} </h3>`;
        body.innerHTML = `<ul id = 'experience'> ${projects[i].experiance[0]}
                            <li> ${projects[i].experiance[1]} </li> 
                            <li> ${projects[i].experiance[2]} </li> 
                          </ul>
                          <img src="images/snapshoot-portfolio-3.svg" alt="">
                          <p>${projects[i].popDescription}</p>
                          <ul id="technologies">
                              <li>html</li>
                              <li>css</li>
                              <li>javascript</li>
                          </ul>
                          <div id = 'project-buttons'>
                              <button>See Live <img src = 'images/live-icon.png'></button>
                              <button>See Source <img src = 'images/github-icon.png'></button>
                          </div>`;
          
      })

      modal.classList.add('active');
      overlay.classList.add('active');
    }
  }
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


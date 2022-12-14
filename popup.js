const projectContainer = document.querySelector('#project-list');
const modalContainer = document.querySelector('#detail');
const modalMainContainer = document.querySelector('#detail1');
const blurGround = document.querySelector('.blurBg');

const projectArray = [
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    img: '/images/placeholder.png',
    technologies: ['css', 'html', 'javascript', 'Ruby'],
    linkDemo: 'https://johnkioko.github.io/My-Portofolio-Project/',
    sourceCode: 'https://github.com/johnkioko/porfolio_projects/tree/main',
  },
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    img: '/images/placeholder.png',
    technologies: ['css', 'html', 'javascript', 'Ruby'],
    linkDemo: 'https://johnkioko.github.io/My-Portofolio-Project/',
    sourceCode: 'https://github.com/johnkioko/porfolio_projects/tree/main',
  },
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    img: '/images/placeholder.png',
    technologies: ['css', 'html', 'javascript', 'Ruby'],
    linkDemo: 'https://johnkioko.github.io/My-Portofolio-Project/',
    sourceCode: 'https://github.com/johnkioko/porfolio_projects/tree/main',
  },
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    img: '/images/placeholder.png',
    technologies: ['css', 'html', 'javascript', 'Ruby'],
    linkDemo: 'https://johnkioko.github.io/My-Portofolio-Project/',
    sourceCode: 'https://github.com/johnkiokom/porfolio_projects/tree/main',
  },
];

projectArray.forEach((project, index) => {
  let tech = '';
  project.technologies.forEach((item) => {
    tech += `<li class="tech-item">
    <span>${item}</span>
    </li>`;
  });

  const projectItem = `<section class="ellipse_19">
    <figure class="img_placeholder">
      <img class="imagePlaceholder" src=${project.img} alt="project image">
    </figure>

    <section class="post_info">
      <article>
        <h2 class="title_post">${project.name}</h2>
      </article>
      
      <article>
        <p>
          ${project.description}
        </p>
      </article>

      <article class="tags">
        <ul>
          ${tech}
        </ul>
      </article>

      <button class="button" id=${index}>See Projects</button>
    </section>
  </section>`;

  projectContainer.innerHTML += projectItem;
});

const projectBtns = document.querySelectorAll('.button');

const modalBtn = document.querySelector('#modal-close');

modalBtn.addEventListener('click', () => {
  modalMainContainer.style.display = 'none';
  blurGround.style.filter = 'blur(0)';
  blurGround.style.opacity = '1';
});

const modalContent = (project) => {
  blurGround.style.opacity = '0.01';

  const modal = `
  <section class="title">
    <h2>${project.name}</h2>
  </section>

  <figure><img src='./images/portfolio.png' alt="Project Image"></figure>
  <p>${project.description}.</p>

  <ul class="tags">
    <li>html</li>
    <li>Ruby on rails</li>
    <li>CSS</li>
  </ul>

  <section id="button-group">
    <button type="button" class="demo-button">
      <span><a href="https://johnkioko.github.io/My-Portofolio-Project/" Target="_blank">See Live</a></span> 
      <span><img id="live-icon" src="/images/Icon.png" alt="live icon"></span>
    </button>
    <button type="button" class="source-button">
      <span><a href="https://github.com/johnkioko/My-Portofolio-Project" Target="_blank">See Source</a></span> 
      <span><img class="github-icon" src="/images/Vector.png" alt="source icon"></span>
    </button> 
  </section>
`;
  modalContainer.innerHTML = modal;
  modalMainContainer.style.display = 'block';
};

projectBtns.forEach((projectBtn) => {
  projectBtn.addEventListener('click', (e) => {
    const getBtnId = e.target.getAttribute('id');
    const projectObj = projectArray[getBtnId];
    modalContent(projectObj);
  });
});

const form = document.getElementById('form');
const errorAlert = document.getElementById('error_msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.elements.email.value;
  if (email === email.toLowerCase()) {
    form.submit();
  } else {
    errorAlert.innerText = 'Email should be in lowercase';
    errorAlert.style.color = 'red';
    errorAlert.style.marginLeft = '7px';
  }
});

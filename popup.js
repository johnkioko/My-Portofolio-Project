const toggleBtn = document.querySelector('#toggleBtn');
const ulElem = document.querySelector('#menuList');
const projectContainer = document.querySelector('#project-list');
const modalContainer = document.querySelector('#detail');
const modalMainContainer = document.querySelector('#detail1')
const lists = document.querySelectorAll('#menuList li a');
const closeBtn = document.querySelector('#btn_close');
const blurGround = document.querySelector('.blurBg');


const projectArray = [
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    img: '/images/placeholder.png',
    technologies: ['css', 'html', 'javascript', 'Ruby'],
    linkDemo: '',
    sourceCode: 'https://github.com/til2to/porfolio_projects/tree/main',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    img: '/images/placeholder.png',
    technologies: ['css', 'html', 'javascript', 'Ruby'],
    linkDemo: '',
    sourceCode: 'https://github.com/til2to/porfolio_projects/tree/main',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    img: '/images/placeholder.png',
    technologies: ['css', 'html', 'javascript', 'Ruby'],
    linkDemo: '',
    sourceCode: 'https://github.com/til2to/porfolio_projects/tree/main',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    img: '/images/placeholder.png',
    technologies: ['css', 'html', 'javascript', 'Ruby'],
    linkDemo: '',
    sourceCode: 'https://github.com/til2to/porfolio_projects/tree/main',
  }
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
  </section>`

  projectContainer.innerHTML += projectItem;
});

const projectBtns = document.querySelectorAll('.button')

const modalBtn = document.querySelector('#modal-close');

modalBtn.addEventListener('click', () => {
  modalMainContainer.style.display = 'none';
  blurGround.style.filter = 'blur(0)'
  blurGround.style.opacity = '1';
})

const modalContent = (project) => {
  // blurGround.style.filter = 'blur(2px)';
  blurGround.style.opacity = '0.15';

  const modal = `
  <section class="title">
    <h2>${project.name}</h2>
  </section>

  <figure class="modal-body"><img src="images/Snapshoot Portfolio.png" alt="Project Image"></figure>
  <p>${project.description}.</p>

  <ul class="tags">
    <li>html</li>
    <li>Ruby on rails</li>
    <li>CSS</li>
  </ul>

  <section id="button-group">
    <button type="button" class="demo-button">
      <span>See Live</span> 
      <span><img id="live-icon" src="/images/live.png" alt="live icon"></span>
    </button>
    <button type="button" class="source-button">
      <span>See Source</span> 
      <span><img class="github-icon" src="/images/one.png" alt="live icon"></span>
    </button> 
  </section>
`;
  modalContainer.innerHTML = modal;
  modalMainContainer.style.display = 'block';
}

projectBtns.forEach((projectBtn, index) => {
  projectBtn.addEventListener('click', (e)=>{
    const getBtnId = e.target.getAttribute('id')
    const projectObj = projectArray[getBtnId]
    modalContent(projectObj);
  })
})
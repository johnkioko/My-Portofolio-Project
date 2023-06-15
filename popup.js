const projectContainer = document.getElementById('ellipse_19');
const modalContainer = document.querySelector('#detail');
const modalMainContainer = document.querySelector('#detail1');
const blurGround = document.querySelector('.blurBg');

const projectArray = [
  {
    name: 'SEO Static Website',
    description:
      "An SEO corporate static website that lists services related to search engine optimization and digital marketing. Built with Html, CSS, and JavaScript. It's mobile responsive and scales well on different devices with different screen sizes.",
    img: 'images/SEO-static-website.PNG',
    technologies: ['CSS', 'Html', 'JavaScript'],
    linkDemo: 'https://johnkioko.github.io/Capstone-Web-Project/index.html',
    sourceCode: 'https://github.com/johnkioko/Capstone-Web-Project.git',
  },
  {
    name: 'Bookstore CMS',
    description:
      "The Bookstore is a user-friendly website built using React and Redux. It offers valuable features like displaying a book list, adding new books, and removing selected books. These functionalities enhance the user experience, making it effortless to explore and manage a diverse collection of books.",
    img: 'images/bookstore-CMS.PNG',
    technologies: ['CSS', 'Html', 'React', 'Redux'],
    linkDemo: 'https://johnkioko.github.io/bookstore/',
    sourceCode: 'https://github.com/johnkioko/bookstore.git',
  },
  {
    name: 'Crypto-Coin',
    description:
      "This is a React app that utilizes a crypto API to fetch real-time cryptocurrency data and display it in an interactive manner.",
    img: 'images/cryptocoin-currency.PNG',
    technologies: ['CSS', 'Html', 'React', 'Redux'],
    linkDemo: 'https://johnkioko.github.io/crypto-coin/',
    sourceCode: 'https://github.com/johnkioko/crypto-coin.git',
  },
  {
    name: 'Recipe App',
    description:
      "A web app that allow users to add food and create recipes, the app is built with Ruby on Rails and has a user authentication and an authorization system.",
    img: "images/recipeApp.PNG",
    technologies: ['CSS', 'Html', 'JavaScript', 'Ruby'],
    linkDemo: 'https://github.com/Daphineatim/Recipe-App.git',
    sourceCode: 'https://github.com/Daphineatim/Recipe-App.git',
  },
];

projectArray.forEach((project, index) => {
  let tech = '';
  project.technologies.forEach((item) => {
    tech += `<li class="tech-item">
    <span>${item}</span>
    </li>`;
  });

  const projectItem = `<div class="ellipse_19">
      <div id="img_placeholder">
        <img class="imgPlaceholder" src=${project.img} alt="project image">
      </div>

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
  </div>`;

  projectContainer.innerHTML += projectItem;
});

const modalBtn = document.querySelector('#modal-close');

modalBtn.addEventListener('click', () => {
  modalMainContainer.style.display = 'none';
  blurGround.style.filter = 'blur(0)';
  blurGround.style.opacity = '1';
});

const modalContent = (project) => {

  let tech = '';
  project.technologies.forEach((item) => {
    tech += `<li class="tech-item">
    <span>${item}</span>
    </li>`;
  });

  blurGround.style.opacity = '0.01';

  const modal = `
  <section class="title">
    <h2>${project.name}</h2>
  </section>

  <figure><img src=${project.img}  alt="Project Image"></figure>
  <p>${project.description}.</p>

 
  <article class="tags">
  <ul class="modal-ul">
    ${tech}
  </ul>
  </article>

  <section id="button-group">
    <button class="source-button">
      <span><a href=${project.linkDemo} Target="_blank">See demo <img id="live-icon" src="/images/Icon.PNG" alt="live icon"></a></span>
    </button>
    <button type="button" class="source-button">
      <span><a href=${project.sourceCode} Target="_blank">See code <img class="github-icon" src="/images/Vector.PNG" alt="source icon"></a></span>
    </button>
  </section>
`;
  modalContainer.innerHTML = modal;
  modalMainContainer.style.display = 'block';
};

const projectBtns = document.querySelectorAll('.button');
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

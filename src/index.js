import './styles.scss';
// import './projectSection';

// ------------------------ Main menu toggle and visiblity ------------------------ //
const wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function() {
  wrapperMenu.classList.toggle('open');
  document
    .querySelector('.menu__background')
    .classList.remove('menuBgEaseIn', 'menuBgEaseOut');
  document
    .querySelector('.menu__content')
    .classList.remove('menuFadeIn', 'menuFadeOut');
  if (wrapperMenu.classList[1]) {
    document.querySelector('.menu__content').classList.add('menuFadeIn');
    document.querySelector('.menu__background').classList.add('menuBgEaseIn');
  } else {
    document.querySelector('.menu__content').classList.add('menuFadeOut');
    document.querySelector('.menu__background').classList.add('menuBgEaseOut');
  }
});

// ------------------------ Foundation modals visibilites ------------------------ //

// Foundation Modal Open //
document
  .querySelector('.foundation__codeModal--explore-btn')
  .addEventListener('click', () => {
    document.querySelector('.foundation__codeModal--container').style.display =
      'block';
  });
document
  .querySelector('.foundation__optimizationModal--explore-btn')
  .addEventListener('click', () => {
    document.querySelector(
      '.foundation__optimizationModal--container'
    ).style.display = 'block';
  });
document
  .querySelector('.foundation__designModal--explore-btn')
  .addEventListener('click', () => {
    document.querySelector(
      '.foundation__designModal--container'
    ).style.display = 'block';
  });
document
  .querySelector('.foundation__experienceModal--explore-btn')
  .addEventListener('click', () => {
    document.querySelector(
      '.foundation__experienceModal--container'
    ).style.display = 'block';
  });

// Foundation Modal Close //
document
  .querySelector('.foundation__codeModal--closeBtn')
  .addEventListener('click', () => {
    document.querySelector('.foundation__codeModal--container').style.display =
      'none';
  });
document
  .querySelector('.foundation__optimizationModal--closeBtn')
  .addEventListener('click', () => {
    document.querySelector(
      '.foundation__optimizationModal--container'
    ).style.display = 'none';
  });
document
  .querySelector('.foundation__designModal--closeBtn')
  .addEventListener('click', () => {
    document.querySelector(
      '.foundation__designModal--container'
    ).style.display = 'none';
  });
document
  .querySelector('.foundation__experienceModal--closeBtn')
  .addEventListener('click', () => {
    document.querySelector(
      '.foundation__experienceModal--container'
    ).style.display = 'none';
  });

window.onclick = function(event) {
  if (
    event.target ===
      document.querySelector('.foundation__codeModal--container') ||
    event.target ===
      document.querySelector('.foundation__optimizationModal--container') ||
    event.target ===
      document.querySelector('.foundation__designModal--container') ||
    event.target ===
      document.querySelector('.foundation__experienceModal--container') ||
    event.target === document.querySelector('.projectOne__modal--container') ||
    event.target === document.querySelector('.projectTwo__modal--container') ||
    event.target ===
      document.querySelector('.projectThree__modal--container') ||
    event.target === document.querySelector('.projectFour__modal--container') ||
    event.target === document.querySelector('.projectFive__modal--container') ||
    event.target === document.querySelector('.projectSix__modal--container') ||
    event.target ===
      document.querySelector('.projects__extraProjects--container') ||
    event.target === document.querySelector('.siteDetails__modal--container')
  ) {
    document.querySelector('.foundation__codeModal--container').style.display =
      'none';
    document.querySelector(
      '.foundation__optimizationModal--container'
    ).style.display = 'none';
    document.querySelector(
      '.foundation__designModal--container'
    ).style.display = 'none';
    document.querySelector(
      '.foundation__experienceModal--container'
    ).style.display = 'none';
    document.querySelector('.projectOne__modal--container').style.display =
      'none';
    document.querySelector('.projectTwo__modal--container').style.display =
      'none';
    document.querySelector('.projectThree__modal--container').style.display =
      'none';
    document.querySelector('.projectFour__modal--container').style.display =
      'none';
    document.querySelector('.projectFive__modal--container').style.display =
      'none';
    document.querySelector('.projectSix__modal--container').style.display =
      'none';
    document.querySelector(
      '.projects__extraProjects--container'
    ).style.display = 'none';
    document.querySelector('.siteDetails__modal--container').style.display =
      'none';
  }
};

// ------------------------ Smooth scroll setup ------------------------ //

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scrollPosition) {
  if (scrollPosition > 350) {
    document
      .getElementsByClassName('foundation__block--iconAndTitle')[0]
      .classList.add('slideInUp');
    document
      .getElementsByClassName('foundation__block--iconAndTitle')[1]
      .classList.add('slideInUp');
    document
      .getElementsByClassName('foundation__block--iconAndTitle')[2]
      .classList.add('slideInUp');
    document
      .getElementsByClassName('foundation__block--iconAndTitle')[3]
      .classList.add('slideInUp');
  }

  if (scrollPosition > 480) {
    document
      .getElementsByClassName('foundation__block--textAndButton')[0]
      .classList.add('fadeAndPopIn');
    document
      .getElementsByClassName('foundation__block--textAndButton')[1]
      .classList.add('fadeAndPopIn');
    document
      .getElementsByClassName('foundation__block--textAndButton')[2]
      .classList.add('fadeAndPopIn');
    document
      .getElementsByClassName('foundation__block--textAndButton')[3]
      .classList.add('fadeAndPopIn');
  }

  // if (scrollPosition > 500) {
  //   import('./projectSection').then(projectSection => {
  //      ();
  //   });
  // }

  if (scrollPosition > 500) {
    import('./ps').then(ps => {
      ps.render();
    });
  }

  if (scrollPosition > 740) {
    document
      .getElementsByClassName('process__bar')[0]
      .classList.add('moveInFromLeftAni');
  }

  if (scrollPosition > 1200) {
    document
      .getElementsByClassName('projects__block--inner')[0]
      .classList.add('slideInUp');
  }

  if (scrollPosition > 2000) {
    document.getElementsByClassName('heart__SVG')[0].classList.add('beat');
  }
}

window.addEventListener('scroll', () => {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});

// Smooth scroll effect function //

const getElementY = query => {
  return (
    window.pageYOffset +
    document.querySelector(query).getBoundingClientRect().top
  );
};

const doScrolling = (element, duration) => {
  document.querySelector('.menu__content').classList.add('menuFadeOut');
  document.querySelector('.menu__background').classList.add('menuBgEaseOut');
  wrapperMenu.classList.toggle('open');
  const startingY = window.pageYOffset;
  const elementY = getElementY(element);

  const targetY =
    document.body.scrollHeight - elementY < window.innerHeight
      ? document.body.scrollHeight - window.innerHeight
      : elementY;

  const diff = targetY - startingY;

  const easing = t => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  let start;

  if (!diff) return;
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    var time = timestamp - start;
    var percent = Math.min(time / duration, 1);
    percent = easing(percent);
    window.scrollTo(0, startingY + diff * percent);
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
};

document
  .querySelector('.hero__button')
  .addEventListener('click', doScrolling.bind(null, '#projects', 1500));

document
  .querySelector('.home__link')
  .addEventListener('click', doScrolling.bind(null, '#hero__section', 1500));

document
  .querySelector('.foundation__link')
  .addEventListener('click', doScrolling.bind(null, '#foundation', 1500));
document
  .querySelector('.projects__link')
  .addEventListener('click', doScrolling.bind(null, '#projects', 1500));

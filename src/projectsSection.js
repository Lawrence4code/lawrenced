console.log('ps.js');
import './projectsSectionStyles.scss';

module.exports = {
  render: () => {
    // Project filter function //

    const filterSelection = text => {
      const projects = document.getElementsByClassName('projects__items');

      for (let project of projects) {
        const projectName = project.classList[1];

        project.classList.remove('show', 'hide', 'selected', 'selectedAll');

        if (text === 'all') {
          project.classList.add('selectedAll', 'show');
          project.classList.remove('show');
          document
            .getElementById('projects__block--inner')
            .classList.add('threeColumns');
          document
            .getElementById('projects__block--inner')
            .classList.remove('twoColumns');
        } else if (text === projectName) {
          document
            .getElementById('projects__block--inner')
            .classList.remove('threeColumns', 'twoColumns');
          project.classList.remove('show');
          project.classList.add('selected', 'show');
          document
            .getElementById('projects__block--inner')
            .classList.add('twoColumns');
        } else {
          project.classList.add('hide');
          project.classList.remove('show', 'selected');
        }
      }
    };

    const btnContainer = document.getElementById('projects__button');
    const btns = document.getElementsByClassName('btn');
    for (let btn of btns) {
      btn.addEventListener('click', () => {
        for (let child of btnContainer.children) {
          child.classList.remove('active');
        }
        btn.classList.add('active');
      });
    }

    // Project selecion

    document.getElementById('project__allBtn').addEventListener('click', () => {
      filterSelection('all');
    });

    document
      .getElementById('project__reactBtn')
      .addEventListener('click', () => {
        filterSelection('react');
      });
    document
      .getElementById('project__nodeBtn')
      .addEventListener('click', () => {
        filterSelection('node');
      });
    document
      .getElementById('project__reduxBtn')
      .addEventListener('click', () => {
        filterSelection('redux');
      });

    // Projects display function //
    document
      .getElementById('projectOne__modalBtn')
      .addEventListener('click', () => {
        document.querySelector('.projectOne__modal--container').style.display =
          'block';
      });
    document
      .getElementById('projectTwo__modalBtn')
      .addEventListener('click', () => {
        document.querySelector('.projectTwo__modal--container').style.display =
          'block';
      });
    document
      .getElementById('projectThree__modalBtn')
      .addEventListener('click', () => {
        document.querySelector(
          '.projectThree__modal--container'
        ).style.display = 'block';
      });
    document
      .getElementById('projectFour__modalBtn')
      .addEventListener('click', () => {
        document.querySelector('.projectFour__modal--container').style.display =
          'block';
      });
    document
      .getElementById('projectFive__modalBtn')
      .addEventListener('click', () => {
        document.querySelector('.projectFive__modal--container').style.display =
          'block';
      });
    document
      .getElementById('projectSix__modalBtn')
      .addEventListener('click', () => {
        document.querySelector('.projectSix__modal--container').style.display =
          'block';
      });

    document
      .querySelector('.projects__extraProjects--btn')
      .addEventListener('click', () => {
        document.querySelector(
          '.projects__extraProjects--container'
        ).style.display = 'block';
      });

    // Projects display close //

    document
      .querySelector('.projectOne__modal--closeBtn')
      .addEventListener('click', () => {
        document.querySelector('.projectOne__modal--container').style.display =
          'none';
      });
    document
      .querySelector('.projectTwo__modal--closeBtn')
      .addEventListener('click', () => {
        document.querySelector('.projectTwo__modal--container').style.display =
          'none';
      });
    document
      .querySelector('.projectThree__modal--closeBtn')
      .addEventListener('click', () => {
        document.querySelector(
          '.projectThree__modal--container'
        ).style.display = 'none';
      });
    document
      .querySelector('.projectFour__modal--closeBtn')
      .addEventListener('click', () => {
        document.querySelector('.projectFour__modal--container').style.display =
          'none';
      });
    document
      .querySelector('.projectFive__modal--closeBtn')
      .addEventListener('click', () => {
        document.querySelector('.projectFive__modal--container').style.display =
          'none';
      });
    document
      .querySelector('.projectSix__modal--closeBtn')
      .addEventListener('click', () => {
        document.querySelector('.projectSix__modal--container').style.display =
          'none';
      });

    document
      .querySelector('.projects__extraProjects--closeBtn')
      .addEventListener('click', () => {
        document.querySelector(
          '.projects__extraProjects--container'
        ).style.display = 'none';
      });

    // Extra for perf modal

    document
      .querySelector('.siteDetails__modal--btn')
      .addEventListener('click', () => {
        document.querySelector('.siteDetails__modal--container').style.display =
          'block';
      });

    document
      .querySelector('.siteDetails__modal--closeBtn')
      .addEventListener('click', () => {
        document.querySelector('.siteDetails__modal--container').style.display =
          'none';
      });
  }
};

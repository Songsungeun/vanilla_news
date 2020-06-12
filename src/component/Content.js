import SlideShow from './Slide.js';
import { api } from '../api/newsAPI.js';

export default class Content {
  constructor({ $target }) {

    this.section = document.createElement('section');
    this.section.className = 'content_wrap';
    this.headLineList, this.firstSlide;

    $target.appendChild(this.section);
    this.onSearch();


    // this.render();
  }

  async onSearch() {
    this.headLineList = await api.fetchHeadLine(5);
    console.log(this.headLineList);
    this.render();
  }

  slideShow() {
    const currentSlide = document.querySelector('.showing');
    if (currentSlide) {
      currentSlide.classList.remove('showing');
      const nextSlide = currentSlide.nextElementSibling;
      if (nextSlide) {
        nextSlide.classList.add('showing');
      } else {
        document.querySelector('.first').classList.add('showing');
      }
    }
  }

  render() {
    const slideArea = document.createElement('section');
    slideArea.className = 'section_slide_wrap';

    this.headLineList.articles.forEach(news => {
      new SlideShow(slideArea, news);
    })

    this.section.appendChild(slideArea);

    // 첫번째 slide Show
    const firstSlide = document.querySelector('.slide_show');
    firstSlide.classList.add('first');
    firstSlide.classList.add('showing');

    setInterval(this.slideShow, 5000);
  }
}
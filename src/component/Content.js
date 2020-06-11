import SlideShow from './Slide.js';
import { api } from '../api/newsAPI.js';

export default class Content {
  constructor($target) {
    this.section = document.createElement('section');
    this.section.className = 'content_wrap';

    $target.appendChild(this.section);
    this.render();

  }

  render() {
    const slideArea = document.createElement('div');
    //todo - data 받아와서 top데이터 넘긴다
    
    new SlideShow(slideArea, headLineNews);

    this.section.appendChild(slideArea);
  }
}
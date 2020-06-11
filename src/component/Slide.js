import { api } from '../api/newsAPI.js';

export default class Slide {
  constructor($target, topNews) {
    this.section = document.createElement('section');
    this.section.className = 'slide_show';
    
    $target.appendChild(this.section);
    this.render();
  }

  async initHeadLine() {
    await api.fetchHeadLine()
  }

  render() {
    const slideArea = document.createElement('div');
    slideArea.className = 'each_slide';
  }
}
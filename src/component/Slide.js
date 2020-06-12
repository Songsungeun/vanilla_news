export default class Slide {
  constructor($target, news) {
    this.slide = document.createElement('article');
    this.slide.className = 'slide_show';

    this.news = news;
    $target.appendChild(this.slide);
    this.render();
  }

  render() {
    const slideImg = document.createElement('img');
    slideImg.className = 'slide_img';
    slideImg.src = this.news.hasOwnProperty('urlToImage') ? this.news.urlToImage : '';

    const slideInfo = document.createElement('article');
    slideInfo.className = 'slide_info';

    const slideTitle = document.createElement('h1');
    slideTitle.className = 'headline_title';
    slideTitle.innerText = this.news.title;

    const slideDesc = document.createElement('p');
    slideDesc.className = 'headline_desc';
    slideDesc.innerText = this.news.description;

    slideInfo.appendChild(slideTitle);
    slideInfo.appendChild(slideDesc);

    this.slide.appendChild(slideImg);
    this.slide.appendChild(slideInfo);

  }
}
import { api } from '../api/newsAPI.js';

export default class News {
    constructor($target) {
        this.section = document.createElement('section');
        this.section.className = 'news_con';
        this.newsList;
        this.onSearch()
        $target.appendChild(this.section);
    }

    async onSearch() {
        this.newsList = await api.fetchHeadLine();
        this.render();
    }
    render() {
        // todo - card

    }
}
import Head from './component/AppHead.js';
import Content from './component/Content.js';
import { api } from './api/newsAPI.js';

export default class App {
    constructor($target) {
        const header = new Head($target);
        const body = new Content($target);
        // api.fetchHeadLine();
    }
}

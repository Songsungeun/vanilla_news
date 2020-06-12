import Head from './component/AppHead.js';
import Content from './component/Content.js';
import { api } from './api/newsAPI.js';

export default class App {
    constructor($target) {
        const header = new Head($target);
        const body = new Content({
            $target
            // onSearch: async () => {
            //     let headLineList = await api.fetchHeadLine();
            //     console.log("=====================");
            //     console.log(headLineList);
            //     return headLineList;
            // }
        });
    }

}

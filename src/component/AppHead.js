export default class head {
    constructor($target) {
        this.header = document.createElement('header');
        this.header.className = 'news_header';

        $target.appendChild(this.header);

        this.render();
    }

    render() {
        const logo = document.createElement('div');
        logo.className = 'news_logo';

        const logoTitleLeft = document.createElement('span');
        logoTitleLeft.id = 'logo_title_left';
        logoTitleLeft.innerText = 'Vanilla';

        const logoTitleRight = document.createElement('span');
        logoTitleRight.id = 'logo_title_right';
        logoTitleRight.innerText = 'News';

        const headerTitle = document.createElement('div');
        headerTitle.className = 'header_title';
        headerTitle.innerText = 'News, Maketh, Man.';

        logo.appendChild(logoTitleLeft);
        logo.appendChild(logoTitleRight);

        this.header.appendChild(logo);
        this.header.appendChild(headerTitle);

    }
}
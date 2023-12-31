import logoSvg from '../img/logo.svg';

function createMainPage(parent) {
    createHeader(parent);
}

function createGuidesBar(parent) {
    let guidesBar = document.createElement('nav');
    guidesBar.classList.add('guides-bar');
    parent.appendChild(guidesBar);

    let ul = createUnorderedList(guidesBar, [
        { innerText: 'Starfield tips and tricks', href: '#' },
        { innerText: 'Best Starfield backgrounds', href: '#' },
        { innerText: "Baldur's Gate 3 class list", href: '#' },
        { innerText: 'Honkai Star Rail tier list', href: '#' },
        { innerText: 'Starfield Lockpicking', href: '#' },
        { innerText: 'Best Starfield traits', href: '#' },
        { innerText: 'Wordle Solver Tool', href: '#' },
    ]);

    ul.classList.add('guides-bar-list');

    return guidesBar;
}

function createNavMain(parent) {
    let navBackground = document.createElement('div');
    navBackground.classList.add('nav-background');
    parent.appendChild(navBackground);

    let navMain = document.createElement('nav');
    navMain.classList.add('nav-main');
    navBackground.appendChild(navMain);

    let logo = document.createElement('img');
    logo.classList.add('nav-main-logo');
    logo.src = logoSvg;
    navMain.appendChild(logo);

    let mainLinks = createUnorderedList(navMain, [
        { innerText: 'Latest', href: '#' },
        { innerText: 'News', href: '#' },
        { innerText: 'Reviews', href: '#' },
        { innerText: 'Hardware', href: '#' },
        { innerText: 'Features', href: '#' },
        { innerText: 'Videos', href: '#' },
        { innerText: 'Guides', href: '#' },
    ]);

    mainLinks.classList.add('nav-main-links', 'no-bullets');

    let secondaryLinks = createUnorderedList(navMain, [
        { innerText: 'Bestest Bests', href: '#' },
        { innerText: 'Free games', href: '#' },
        { innerText: 'Supporters', href: '#' },
        { innerText: 'RSS', href: '#' },
        { innerText: 'Deals', href: '#' },
        { innerText: 'Podcasts', href: '#' },
        { innerText: 'Discord', href: '#' },
    ]);

    secondaryLinks.classList.add('no-bullets');

    // support, join newsletter, visit store
    let buttonLinks = document.createElement('div');
    buttonLinks.classList.add('nav-buttons');
    navMain.appendChild(buttonLinks);

    let supportButton = document.createElement('button');
    supportButton.classList.add('nav-button', 'purple-button');
    supportButton.innerText = 'Support us';
    buttonLinks.appendChild(supportButton);

    let newsletterButton = document.createElement('button');
    newsletterButton.classList.add('nav-button', 'green-button');
    newsletterButton.innerText = 'Join our newsletter';
    buttonLinks.appendChild(newsletterButton);

    let storeButton = document.createElement('button');
    storeButton.classList.add('nav-button', 'green-button');
    storeButton.innerText = 'Visit our store';
    buttonLinks.appendChild(storeButton);

    // search bar, sign in/create account
    let searchSection = document.createElement('div');
    searchSection.classList.add('search-section');
    navMain.appendChild(searchSection);

    let searchInput = document.createElement('input');
    searchInput.classList.add('search-input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search';
    searchSection.appendChild(searchInput);

    let accountButton = document.createElement('button');
    accountButton.classList.add('account-button', 'green-button');
    accountButton.innerText = 'Sign in/Create account';
    searchSection.appendChild(accountButton);
}

function createHeader(parent) {
    let header = document.createElement('header');
    parent.appendChild(header);
    createGuidesBar(header);
    createNavMain(header);

    return header;
}

function createMain(parent) {}

function createAsides(parent) {}

function createUnorderedList(parent, listItems) {
    let ul = document.createElement('ul');
    parent.appendChild(ul);
    // Add role attribute so Safari will recognize as a list even if the list-style is set to 'none'
    ul.setAttribute('role', 'list');
    for (let item of listItems) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.innerText = item.innerText;
        a.href = item.href;
        li.appendChild(a);
        ul.appendChild(li);
    }
    return ul;
}

export { createMainPage, createUnorderedList };

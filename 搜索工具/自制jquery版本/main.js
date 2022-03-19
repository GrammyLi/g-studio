const formattedUrl = (url) => {
  // 'https://grammyli.com/t/search/'
  let u = url.split('//')[1]
  return u.split('/')[0]
}

const templateLink = (link) => {
    let name = link.name
    let url = link.url
    let u = formattedUrl(url)
    let t = `<li class="g-link" data-url="${url}">
        <div class="site">
          <div class="logo">${name}</div>
          <div class="link">${u}</div>
        </div>
      </li>`
    return t
}

const renderLinks = () => {
  let t = ''
  for (let i = 0; i < links.length; i++) {
    let l = links[i]
    t += templateLink(l)
  }
  let last = d.$('.last')
  insertBefore(last, t)
}

const insertLink = (link) => {
  let t = templateLink(link)
  let last = d.$('.last')
  insertBefore(last, t)
}

const init = () => {
  window.d = dom
  // 网址
  window.links = [
    {
      name: 'B',
      url: 'https://www.bilibili.com',
    },
    {
      name: 'G',
      url: 'https://grammyli.com/t/search/',
    },
  ]
  renderLinks()
};

const bindEventClickSearch = () => {
  const btn = d.$(".g-input-btn");
  d.on(btn, "click", (event) => {
    let value = e(".g-input-search").value;
    let engine = "https://www.baidu.com/s?wd=";
    let url = engine + value;
    // 打开新网页
    window.open(url);
  })
};

const bindEventKeyPressSearch = () => {
  d.on(window, "keypress", (event) => {
    log("event", event);
    let key = event.key;
    if (key === "Enter") {
      let value = e(".g-input-search").value;
      let engine = "https://www.baidu.com/s?wd=";
      let url = engine + value;
      // 打开新网页
      window.open(url);
    }
  });
};

const bindEventSearch = () => {
  bindEventClickSearch();
  bindEventKeyPressSearch();
};

const bindEventLink = () => {
  const container= d.$('.siteList')
  d.on(container, 'click', event => {
    let target = event.target
    if (target.classList.contains('logo')) {
      let link = target.closest('.g-link')
      let url = link.dataset.url
      window.open(url)
    }
  })
}

const bindEventAddLink = () => {
  const btn = d.$(".addButton");
  d.on(btn, "click", (event) => {
    // let url = engine + value;
    let url = window.prompt("请输入需要添加的网址：");
    let u = formattedUrl(url)
    let link = {
      name: u[0],
      url: url,
    }
    links.push(link)
    insertLink(link)
  });
}

const bindEvents = () => {
  bindEventSearch();
  bindEventLink()
  bindEventAddLink()
};

const __main = () => {
  init();
  bindEvents();
};

__main();

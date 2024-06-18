
function enable() {//start
  document.documentElement.style.backgroundColor = '#000';
  document.body.style.backgroundColor = '#000';
  applyStyles();
}

function disable() { //stop
  document.documentElement.style.backgroundColor = '';
  document.body.style.backgroundColor = '';
  removeStyles();
}

function removeStyles() {
  const style = document.getElementById('black-theme-styles');
  if (style) {
    style.remove();
  }
}


//specific
function applyStyles() {
  const style = document.createElement('style');
  style.id = 'black-theme-styles';
  style.textContent = `
    body, html, div, span, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, section, summary,
    time, mark, audio, video
    
    {
      background-color: #000 !important;
      color: #fff !important;
      border-color: #555 !important;
    }
    img, video, iframe {
      filter: brightness(1) !important;
    }
    pre, code, kbd, samp {
      background-color: #333 !important;
      color: #fff !important;
    }
    input, textarea, select, button {
      background-color: #333 !important;
      color: #fff !important;
      border-color: #555 !important;
    }
    a {
      color: #08f !important;
    }
    .rating-table, .rating-graph {
      background-color: #000 !important;
    }
    .rating-table .rating, .rating-graph .rating {
      color: #fff !important;
    }
    .flot-overlay canvas {
      background-color: transparent !important;
    }
    .mw-parser-output img {
      filter: none !important;
    }
  `;
  document.head.appendChild(style);
}



chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'updateTheme') {
    const whitelist = request.whitelist || [];
    const currentDomain = window.location.hostname;
    if (whitelist.includes(currentDomain)) {
      enable();
    } else {
      disable();
    }
  }
});

chrome.storage.sync.get(['whitelist'], (result) => {
  const whitelist = result.whitelist || [];
  const currentDomain = window.location.hostname;
  if (whitelist.includes(currentDomain)) {
    enable();
  }
});

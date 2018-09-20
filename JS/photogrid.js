





  const gallery = document.querySelector('.gallery');
  const overlay = document.querySelector('.overlay');
  const overlayImage = overlay.querySelector('img');
  const overlayClose = overlay.querySelector('.close');
  function generateHTML([h, v]) {
    return `
      <div class="item h${h} v${v}">
        <img src="https://res.cloudinary.com/dhvgjssfm/deb/${randomNumber(35)}.jpg">
        <div class="item__overlay">
          <button>View →</button>
        </div>
      </div>
    `;
  }
  function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
  }
  function randomArray(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
  }
  function close() {
    overlay.classList.remove('open');
  }
  const digits = Array.from({ length: 50 }, () => [randomArray(2, 4), randomArray(2, 4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]])
  const html = digits.map(generateHTML).join('');
  gallery.innerHTML = html;
  const items = document.querySelectorAll('.item');
  items.forEach(item => item.addEventListener('click', handleClick));
  overlayClose.addEventListener('click', close);

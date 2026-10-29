const works = [
  {
    title: '風',
    category: 'Branding / Package design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    description: '一枚の紙に静かな風景を置き、素材感と余白を活かしたブランディングを表現しました。'
  },
  {
    title: '余白',
    category: 'Web design / Coding',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    description: '余白を大切にした落ち着いたWebサイト。見えない空間が、伝わる余韻をつくる設計です。'
  },
  {
    title: 'うつろい',
    category: 'Art direction / Graphic design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    description: '季節の移ろいと静かな情景を、紙の質感と淡くやわらかな配色で表現した作品です。'
  },
  {
    title: '澄',
    category: 'Branding / Packaging',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    description: '透明感と清潔感を軸に、製品の価値と生活感の両方を伝えるパッケージデザインを提案しました。'
  }
];

const gallery = [
  { title: '風', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80', subtitle: '一枚の紙のブランディング', tags: 'Branding / Package design' },
  { title: '余白', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', subtitle: '静かな空間のWebサイト', tags: 'Web design / Coding' },
  { title: 'うつろい', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', subtitle: '季節の移ろいを描く', tags: 'Art direction / Graphic design' },
  { title: '澄', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80', subtitle: '透明感あるパッケージ', tags: 'Branding / Packaging' },
  { title: '花の記憶', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80', subtitle: '花と暮らしの記録', tags: 'Photography / Editorial' },
  { title: '日々の暮らし', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80', subtitle: '静かな生活の風景', tags: 'Photography / Lifestyle' },
  { title: '和の気配', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', subtitle: '空間の温度感', tags: 'Interior / Styling' },
  { title: '紙の余白', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80', subtitle: '見えない価値を整える', tags: 'Editorial / Design' }
];

const faqItems = [
  {
    question: 'デザインのこだわりは何ですか？',
    answer: '見た人が「少しだけ心を落ち着けられる」ような空間と余白を大切にしています。情報を詰め込みすぎず、伝えたい感情や物語が余白に宿るような設計を心がけています。'
  },
  {
    question: 'どのような案件を得意としていますか？',
    answer: 'ブランドの立ち上げや、Webサイト、製品・空間のビジュアル制作に対応しています。特に、伝わりやすさと美しさの両方を大切にしたデザインを得意としています。'
  },
  {
    question: '制作の流れを教えてください。',
    answer: 'まずはヒアリングで価値観や目的を整理し、方向性を定めます。その後、コンセプトの提案、デザイン案の作成、修正を重ね、最終的に丁寧に仕上げていきます。'
  },
  {
    question: '対応範囲はどこまでですか？',
    answer: 'ロゴやWEBデザインから、販促物、パッケージ、写真の選定やレイアウトまで幅広く対応可能です。必要に応じて、デザインの方向づけから実装まで一貫してサポートいたします。'
  }
];

const worksGrid = document.getElementById('works-grid');
const galleryGrid = document.getElementById('gallery-grid');
const faqList = document.getElementById('faq-list');

if (worksGrid) {
  worksGrid.innerHTML = works.map((project, index) => `
    <article class="project-card">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}の作品画像">
      </div>
      <div class="project-meta">
        <div class="project-label">
          <span class="mini-label">0${index + 1} / SELECTED WORK</span>
          <span class="project-year">${project.year}</span>
        </div>
        <button class="project-arrow" type="button" aria-label="${project.title}の詳細を見る">→</button>
      </div>
      <h3>${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        <span>${project.category}</span>
      </div>
    </article>
  `).join('');
}

if (galleryGrid) {
  galleryGrid.innerHTML = gallery.map((item) => `
    <article class="gallery-card">
      <div class="gallery-image">
        <img src="${item.image}" alt="${item.title}のギャラリー画像">
      </div>
      <div class="gallery-info">
        <span class="card-arrow">→</span>
        <h3>${item.title}</h3>
        <p>${item.subtitle}</p>
      </div>
    </article>
  `).join('');
}

if (faqList) {
  faqList.innerHTML = faqItems.map((item, index) => `
    <article class="faq-item ${index === 0 ? 'open' : ''}">
      <button class="faq-question" type="button" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span>${item.question}</span>
        <span class="faq-plus">+</span>
      </button>
      <div class="faq-answer" style="${index === 0 ? 'max-height: 200px;' : ''}">
        <p>${item.answer}</p>
      </div>
    </article>
  `).join('');

  faqList.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      faqList.querySelectorAll('.faq-item').forEach((faqItem) => {
        faqItem.classList.remove('open');
        faqItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        faqItem.querySelector('.faq-answer').style.maxHeight = '0px';
      });

      if (!isOpen) {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
}

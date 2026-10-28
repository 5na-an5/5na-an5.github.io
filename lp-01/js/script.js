const products = [
  {
    title: 'Botanical Essence Serum',
    category: 'スキンケア',
    price: '¥8,800',
    description: 'うるおいを抱え込みながら、透明感のある肌へと導くナチュラルな美容液です。',
    image: 'https://placehold.jp/600x400.png?text=Item'
  },
  {
    title: 'Aroma Calm Mist',
    category: 'アロマ',
    price: '¥4,600',
    description: 'リラックスしたい夜におすすめの、やわらかな香りと保湿成分が特徴のアロマミスト。',
    image: 'https://placehold.jp/600x400.png?text=Item'
  },
  {
    title: 'Cotton Dream Pillowcase',
    category: '寝具',
    price: '¥6,200',
    description: '肌にやさしいオーガニックコットンで、快眠をサポートする上質な枕カバーです。',
    image: 'https://placehold.jp/600x400.png?text=Item'
  }
];

const testimonials = [
  {
    name: 'Mika',
    type: '30代 / 会社員',
    avatar: 'https://placehold.jp/150x150.png?text=User',
    message: '香りが穏やかで、夜のルーティンが本当に好きになりました。すっきりとした気分で眠れるようになりました。'
  },
  {
    name: 'Aoi',
    type: '20代 / デザイナー',
    avatar: 'https://placehold.jp/150x150.png?text=User',
    message: '素材感が高く、見た目も気に入っています。化粧水とアロマミストを一緒に使うと、朝と夜の気分が変わります。'
  },
  {
    name: 'Haruka',
    type: '40代 / ママ',
    avatar: 'https://placehold.jp/150x150.png?text=User',
    message: 'エシカルな考え方に共感して購入しました。小さなケアが、家族全体の暮らしを豊かにしてくれる気がします。'
  }
];

const faqItems = [
  {
    question: 'オーガニック素材の商品の特徴は？',
    answer: '自然由来の原料をできるだけ多く使い、肌にやさしく環境負荷を軽減した商品を取り扱っています。素材の選定にもこだわり、毎日続けやすい使い心地を大切にしています。'
  },
  {
    question: '配送と梱包について教えてください。',
    answer: 'すべての注文は環境に配慮した梱包を基本としております。不要な過剰包装を避け、丁寧に発送しております。'
  },
  {
    question: '初めて購入する際のおすすめは？',
    answer: '特に人気のあるスキンケアとアロマをご一緒にお楽しみいただくセットがおすすめです。日々のケアに取り入れやすく、暮らしに溶け込みやすいラインです。'
  },
  {
    question: '返品や交換はできますか？',
    answer: '到着後にご不明点がございましたら、メールにてご連絡ください。購入後のサポートも丁寧に対応いたします。'
  }
];

const productList = document.getElementById('product-list');
const testimonialList = document.getElementById('testimonial-list');
const faqList = document.getElementById('faq-list');

if (productList) {
  productList.innerHTML = products.map((product) => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.title}">
      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.title}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-meta">
          <span class="product-price">${product.price}</span>
          <a href="#" class="btn btn-secondary">購入する</a>
        </div>
      </div>
    </article>
  `).join('');
}

if (testimonialList) {
  testimonialList.innerHTML = testimonials.map((item) => `
    <article class="testimonial-card">
      <div class="testimonial-head">
        <img src="${item.avatar}" alt="${item.name}のプロフィール写真">
        <div>
          <div class="testimonial-name">${item.name}</div>
          <div class="testimonial-meta">${item.type}</div>
        </div>
      </div>
      <div class="testimonial-body">
        <p>${item.message}</p>
      </div>
    </article>
  `).join('');
}

if (faqList) {
  faqList.innerHTML = faqItems.map((item, index) => `
    <div class="faq-item ${index === 0 ? 'open' : ''}">
      <button class="faq-question" type="button" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span>${item.question}</span>
        <span class="faq-toggle" aria-hidden="true"></span>
      </button>
      <div class="faq-answer" style="max-height: ${index === 0 ? '200px' : '0px'};">
        <div class="faq-answer-inner">${item.answer}</div>
      </div>
    </div>
  `).join('');

  faqList.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      faqList.querySelectorAll('.faq-item').forEach((faqItem) => {
        const thisAnswer = faqItem.querySelector('.faq-answer');
        const thisButton = faqItem.querySelector('.faq-question');
        faqItem.classList.remove('open');
        thisButton.setAttribute('aria-expanded', 'false');
        thisAnswer.style.maxHeight = '0px';
      });

      if (!isOpen) {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

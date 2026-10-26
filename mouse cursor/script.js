document.addEventListener('mousemove', (e) => {
  createMagicDust(e.clientX, e.clientY);
});

function createMagicDust(x, y) {
  // すべてのマウスの動きで生成すると多すぎるため、40%の確率で間引いて上品にする
  if (Math.random() > 0.6) return;

  const dust = document.createElement('div');
  dust.classList.add('magic-dust');

  // 星のサイズをランダムにする (8px 〜 24px)
  const size = Math.random() * 16 + 8;
  dust.style.width = `${size}px`;
  dust.style.height = `${size}px`;

  // マウスカーソルの位置から少しだけランダムにずらして発生させる
  const offsetX = (Math.random() - 0.5) * 30;
  const offsetY = (Math.random() - 0.5) * 30;
  dust.style.left = `${x + offsetX}px`;
  dust.style.top = `${y + offsetY}px`;

  // ホリデー感のあるシャンパンゴールド系の色をランダム生成
  const hue = 35 + Math.random() * 15; // 色相: オレンジ〜イエロー
  const lightness = 60 + Math.random() * 20; // 明度: 60%〜80%
  dust.style.backgroundColor = `hsl(${hue}, 80%, ${lightness}%)`;

  // 星が散らばる方向をランダムに決める (上方向にふわっと消える動き)
  const moveX = (Math.random() - 0.5) * 100; // 左右に-50px ~ 50px
  const moveY = (Math.random() - 1) * 100;   // 上に-100px ~ 0px
  dust.style.setProperty('--move-x', `${moveX}px`);
  dust.style.setProperty('--move-y', `${moveY}px`);

  // アニメーションの長さをランダムにする (0.8秒 〜 1.5秒)
  const duration = Math.random() * 0.7 + 0.8;
  dust.style.setProperty('--duration', `${duration}s`);

  // 画面に追加
  document.body.appendChild(dust);

  // アニメーションが終わったらHTMLから要素を削除する
  setTimeout(() => {
    dust.remove();
  }, duration * 1000);
}
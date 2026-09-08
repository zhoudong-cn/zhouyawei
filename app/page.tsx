const works = [
  { no: '01', title: '断层 / FAULT LINE', meta: '山地 · 2026', image: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1800&q=82' },
  { no: '02', title: '银色噪点', meta: '城市 · 2025', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=82' },
  { no: '03', title: '临界风速', meta: '纪录影像 · 04:18', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=82' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="wordmark" href="#top" aria-label="ZHOUYAWEI 首页">ZHOUYAWEI<span>///</span></a>
        <div className="nav-links"><a href="#works">WORKS</a><a href="#about">ABOUT</a><a href="mailto:hello@zhouyawei.com">CONTACT</a></div>
        <span className="location">CN / 31.2°N</span>
      </nav>
      <section className="hero" id="top">
        <img className="hero-image" src="https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=2200&q=88" alt="群山与荒野的黑白摄影" />
        <div className="hero-shade" />
        <div className="hero-index">PORTFOLIO<br />2024—2026</div>
        <div className="hero-copy"><p>PHOTOGRAPHY / MOTION / EXTREME</p><h1>进入<br /><i>无界</i></h1></div>
        <div className="hero-foot"><span>VISUAL ARCHIVE 001—024</span><a href="#works">下滑探索 <b>↓</b></a></div>
      </section>
      <section className="manifesto" id="about">
        <p className="eyebrow">/ MANIFESTO</p>
        <p className="statement">在山脊、风暴和城市边缘之间，<br />记录人与世界碰撞的瞬间。</p>
        <div className="coords">ZHOU YAWEI<br />INDEPENDENT VISUAL ARTIST</div>
      </section>
      <section className="works" id="works">
        <header className="section-head"><p>SELECTED WORKS</p><span>03 / 24</span></header>
        <div className="work-grid">
          {works.map((work, index) => (
            <article className={`work work-${index + 1}`} key={work.no}>
              <div className="frame"><img src={work.image} alt={work.title} />{index === 2 && <span className="play">▶</span>}<span className="corner">{work.no}</span></div>
              <div className="work-title"><h2>{work.title}</h2><p>{work.meta}</p></div>
            </article>
          ))}
        </div>
      </section>
      <footer>
        <div className="footer-mark">ZY<span>°</span></div>
        <div><p>合作 / 约拍 / 展览</p><a href="mailto:hello@zhouyawei.com">HELLO@ZHOUYAWEI.COM ↗</a></div>
        <p className="copyright">© 2026 ZHOUYAWEI<br />ALL RIGHTS RESERVED</p>
      </footer>
    </main>
  );
}

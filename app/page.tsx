const videoUrl =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4';

const works = [
  {
    title: '荒野边缘',
    type: 'PHOTOGRAPHY / 2026',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=82',
  },
  {
    title: '岩层与风',
    type: 'STILL IMAGE / 2026',
    src: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1600&q=82',
  },
  {
    title: '城市游离',
    type: 'MOTION COVER / 2025',
    src: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=82',
  },
];

const brandNames = ['BOSS', 'DIESEL', 'TUMI', 'MCM', 'BALLY', 'GUCCI'];

function Mark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 49" aria-hidden="true">
      <defs>
        <linearGradient id="bolt" x1="8" x2="34" y1="0" y2="29">
          <stop stopColor="#9e9e9e" />
          <stop offset=".34" stopColor="#a3a3a3" />
          <stop offset=".42" stopColor="#3a3a3a" />
          <stop offset=".68" stopColor="#8e8e8e" />
          <stop offset="1" stopColor="#d8d8d8" />
        </linearGradient>
      </defs>
      <path
        fill="url(#bolt)"
        d="M21.5 0v19.5h10v9.5L10 48.5v-20H.5v-10z"
      />
      <rect x=".5" y="18.5" width="9" height="10" fill="#fdfdfd" />
      <rect x="22" y="19.5" width="9.5" height="9.5" fill="#fdfdfd" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <section className="stage" id="top">
        <div className="plate" aria-hidden="true">
          <video
            className="plate-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>

        <header className="topbar">
          <a className="mark-link" href="#top" aria-label="返回首页">
            <Mark />
          </a>
          <nav className="links" aria-label="Primary">
            <a href="#profile">简介</a>
            <a href="#still">平面</a>
            <a href="#motion">视频</a>
            <a href="#contact">联系</a>
          </nav>
          <a className="pill pill-nav" href="#contact">
            <span>合作咨询</span>
          </a>
        </header>

        <div className="hero-copy">
          <p>PHOTOGRAPHY · MOTION · QUIET IMAGE</p>
          <h1>
            <span>静默影像</span>
            <span>的下一层</span>
          </h1>
          <p className="sub">
            <span>以自然纹理、人物气息与品牌现场为线索，</span>
            <span>把平面与动态影像整理成可被慢慢观看的作品集。</span>
          </p>
          <div className="actions">
            <a className="pill" href="#still">
              <span>查看作品</span>
            </a>
            <a className="ghost" href="#profile">
              进入档案
            </a>
          </div>
        </div>

        <div className="logo-strip" aria-label="部分合作品牌">
          {brandNames.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </section>

      <section className="profile band" id="profile">
        <p className="kicker">01 / PROFILE</p>
        <div>
          <h2>在留白里，让作品自己说话。</h2>
          <p>
            这是一份面向品牌、编辑与影像项目的个人作品集。内容涵盖配饰与时装品牌视觉、平面摄影、短片影像、项目记录与合作档案。整体叙事克制、干净，尽量把注意力留给图像本身。
          </p>
        </div>
      </section>

      <section className="works band dark" id="still">
        <header className="section-head">
          <p>02 / STILL WORKS</p>
          <h2>平面作品</h2>
        </header>
        <div className="work-list">
          {works.map((work, index) => (
            <article className="work-item" key={work.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <img src={work.src} alt={work.title} />
              <div>
                <h3>{work.title}</h3>
                <p>{work.type}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="motion band" id="motion">
        <p className="kicker">03 / MOTION</p>
        <div className="motion-copy">
          <h2>视频作品</h2>
          <p>
            品牌短片、人物记录、空间氛围与实验影像。页面先以沉浸式首屏建立情绪，后续可接入真实视频封面、B 站或本地压缩预览片。
          </p>
        </div>
      </section>

      <section className="brands band">
        <p className="kicker">04 / COLLABORATION</p>
        <div>
          <h2>合作品牌</h2>
          <figure className="brand-board">
            <img
              src="/brands.png"
              alt="BOSS、DIESEL、TUMI、MCM、BALLY、GUCCI、New Balance、PANDORA、Clarks、Kipling 等合作品牌"
            />
            <figcaption>SELECTED CLIENTS / BRAND COLLABORATIONS</figcaption>
          </figure>
        </div>
      </section>

      <section className="projects band dark">
        <header className="section-head">
          <p>05 / PROJECTS</p>
          <h2>参与项目</h2>
        </header>
        {[
          ['2026', '高山影像计划', 'DOCUMENTARY / PHOTOGRAPHY'],
          ['2025', '城市边界', 'EDITORIAL / VISUAL STORY'],
          ['2024', '风的档案', 'PERSONAL / MOTION'],
        ].map(([year, title, type]) => (
          <div className="project-row" key={title}>
            <span>{year}</span>
            <h3>{title}</h3>
            <p>{type}</p>
          </div>
        ))}
      </section>

      <footer className="contact" id="contact">
        <p className="kicker">06 / CONTACT</p>
        <h2>一起完成一组安静、有质感的影像。</h2>
        <div className="contact-links">
          <span>EMAIL / 待填写</span>
          <span>WECHAT / 待填写</span>
          <span>RED / 待填写</span>
        </div>
      </footer>
    </main>
  );
}

const projects = {
  "only-night-knows": {n:"01 / 09", title:"Only Night Knows", role:"Co-Producer & Production Designer", image:"assets/im13.jpg", logline:"A girl frequently molested by her drunk father asks her mother for help. Faced with an abyss of despair, she has to make a choice.", tags:["Social issues","Drama","2021 · China","LA Shorts shortlist","Lady Filmmakers award"]},
  "paradise-found": {n:"02 / 09", title:"Paradise Found", role:"Producer", image:"assets/im20.jpg", logline:"In a world where beauty is the ultimate currency, a disillusioned radio host undergoes a life-altering cosmetic procedure—only to realise perfection may cost her soul.", tags:["Sci-fi","Dark comedy","Drama","2025 · UK","BFI screening"]},
  "dream-lover": {n:"03 / 09", title:"The Last Day of the Dream Lover", role:"Producer & 1st Assistant Director", image:"assets/im28.jpg", logline:"A lesbian woman finds her relationship challenged at every turn by the tension between love and faith.", tags:["LGBTQ","Drama","2024 · UK","BFI premiere"]},
  "detective": {n:"04 / 09", title:"Detective 2: Death by 1000 Cuts", role:"Production Manager", image:"assets/im31.png", logline:"A fictional detective discovers he is a minor character doomed to die repeatedly, and breaks free to confront his creator in a battle for control of his fate.", tags:["Metafiction","Comedy","2024 · UK"]},
  "hold-please": {n:"05 / 09", title:"Hold… Please", role:"Production Manager", image:"assets/im35.jpg", logline:"A master of on-hold music at a mid-90s call centre must use his musical prowess to fight for his job and expose his boss’ automation plot.", tags:["Comedy","Music","2024 · UK"]},
  "fingertips": {n:"06 / 09", title:"At My Fingertips", role:"Producer", image:"assets/im42.jpg", logline:"A romantic drama produced between the United Kingdom and China.", tags:["Romance","Drama","2024 · UK & China"]},
  "grassland": {n:"07 / 09", title:"2104: Born in the Grassland", role:"Producer", image:"assets/im44.jpg", logline:"A country-set science-fiction story about family, landscape and a world yet to come.", tags:["Science fiction","Country","Family","2024 · UK & China"]},
  "earphone": {n:"08 / 09", title:"Earphone", role:"Co-Producer", image:"assets/im47.jpg", logline:"A short film produced in China.", tags:["Short film","2021 · China"]},
  "drowning": {n:"09 / 09", title:"Drowning, Breathing", role:"1st Assistant Director", image:"assets/im54.jpg", logline:"A UK short film made in 2024.", tags:["Short film","2024 · UK"]}
};

const dialog = document.querySelector('.project-dialog');
const openProject = key => {
  const p = projects[key];
  if (!p) return;
  dialog.querySelector('.dialog-number').textContent = p.n;
  dialog.querySelector('.dialog-role').textContent = p.role;
  dialog.querySelector('#dialog-title').textContent = p.title;
  dialog.querySelector('.dialog-logline').textContent = p.logline;
  const image = dialog.querySelector('.dialog-media img');
  image.src = p.image; image.alt = `Still from ${p.title}`;
  dialog.querySelector('.dialog-tags').innerHTML = p.tags.map(tag => `<span>${tag}</span>`).join('');
  dialog.showModal(); document.body.style.overflow = 'hidden';
};

document.querySelectorAll('[data-project]').forEach(el => {
  el.addEventListener('click', () => openProject(el.dataset.project));
  el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openProject(el.dataset.project); });
});
const closeDialog = () => { dialog.close(); document.body.style.overflow = ''; };
dialog.querySelector('.dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', e => { if (e.target === dialog) closeDialog(); });
dialog.addEventListener('close', () => { document.body.style.overflow = ''; });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.querySelector('.portrait-wrap').style.transform = `translateY(${y * .06}px)`;
}, {passive:true});

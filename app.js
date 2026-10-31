(() => {
  const DATA = window.SITE_DATA;
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];

  // theme
  const savedTheme = localStorage.getItem('ln-theme');
  if (savedTheme === 'night') document.body.classList.add('night');
  $('#themeToggle').textContent = document.body.classList.contains('night') ? 'DAY' : 'NIGHT';
  $('#themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('night');
    const night = document.body.classList.contains('night');
    localStorage.setItem('ln-theme', night ? 'night' : 'day');
    $('#themeToggle').textContent = night ? 'DAY' : 'NIGHT';
  });

  // draggable windows + position persistence
  const desktop = $('#desktop');
  $$('.float-window').forEach(win => makeDraggable(win, $('.drag-handle', win), 'ln-win-' + win.dataset.window, desktop));
  makeDraggable($('#musicPlayer'), $('.drag-handle', $('#musicPlayer')), 'ln-music', document.body, true);

  function makeDraggable(el, handle, key, boundsEl, fixed=false){
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    if (saved) {
      el.style.left = saved.x + 'px'; el.style.top = saved.y + 'px';
      el.style.right = 'auto'; el.style.bottom = 'auto'; el.style.transform = fixed ? 'none' : 'rotate(0deg)';
    }
    let sx=0, sy=0, ox=0, oy=0, dragging=false;
    handle.addEventListener('pointerdown', e => {
      dragging=true; handle.setPointerCapture(e.pointerId); el.classList.add('is-dragging');
      const r=el.getBoundingClientRect(), br=boundsEl.getBoundingClientRect();
      sx=e.clientX; sy=e.clientY; ox=r.left-br.left; oy=r.top-br.top;
    });
    handle.addEventListener('pointermove', e => {
      if(!dragging) return;
      const br=boundsEl.getBoundingClientRect();
      const nx=Math.max(0, Math.min(ox + e.clientX-sx, br.width-el.offsetWidth));
      const ny=Math.max(0, Math.min(oy + e.clientY-sy, br.height-el.offsetHeight));
      el.style.left=nx+'px'; el.style.top=ny+'px'; el.style.right='auto'; el.style.bottom='auto';
      if(!fixed) el.style.transform='rotate(0deg)';
    });
    const end=()=>{if(!dragging)return; dragging=false; el.classList.remove('is-dragging'); localStorage.setItem(key, JSON.stringify({x:parseFloat(el.style.left)||0,y:parseFloat(el.style.top)||0}));};
    handle.addEventListener('pointerup', end); handle.addEventListener('pointercancel', end);
  }

  $('#layoutReset').addEventListener('click', () => {
    Object.keys(localStorage).filter(k => k.startsWith('ln-win-') || k==='ln-music').forEach(k=>localStorage.removeItem(k));
    location.reload();
  });

  // character image support
  Object.entries(DATA.characters).forEach(([id, c]) => {
    if (!c.image) return;
    const p = $('.portrait-' + id); if (p) p.innerHTML = `<img src="${c.image}" alt="${c.name}">`;
  });

  // profile modal
  const modal = $('#profileModal');
  let currentChar = null;
  $$('[data-character]').forEach(btn => btn.addEventListener('click', () => openCharacter(btn.dataset.character)));
  $('#modalClose').addEventListener('click', ()=>modal.close());
  modal.addEventListener('click', e=>{ if(e.target===modal) modal.close(); });
  $$('.modal-tabs button').forEach(btn=>btn.addEventListener('click',()=>{
    $$('.modal-tabs button').forEach(b=>b.classList.remove('is-active')); btn.classList.add('is-active'); renderTab(btn.dataset.tab);
  }));

  function openCharacter(id){
    currentChar = DATA.characters[id]; if(!currentChar) return;
    $('#modalKicker').textContent=currentChar.kicker; $('#modalName').textContent=currentChar.name; $('#modalEn').textContent=currentChar.en;
    const visual=$('#modalVisual'); visual.style.backgroundImage=currentChar.image ? `url("${currentChar.image}")` : '';
    visual.style.backgroundColor=currentChar.color;
    $$('.modal-tabs button').forEach((b,i)=>b.classList.toggle('is-active',i===0)); renderTab('profile'); modal.showModal();
  }
  function renderTab(tab){ $('#modalContent').innerHTML = currentChar?.[tab] || ''; }

  // archive modals
  const simple=$('#simpleModal');
  $$('[data-open]').forEach(btn=>btn.addEventListener('click',()=>openPage(btn.dataset.open)));
  $('#simpleClose').addEventListener('click',()=>simple.close());
  simple.addEventListener('click',e=>{ if(e.target===simple) simple.close(); });
  $('#aboutOpen').addEventListener('click',()=>{
    $('#simpleKicker').textContent='SITE / ABOUT'; $('#simpleTitle').textContent='ABOUT';
    $('#simpleContent').innerHTML='<p>LUNA / NOX 개인홈 1차 프로토타입.</p><p>메인 창 위치와 NIGHT 모드는 브라우저에 저장됩니다.</p>';
    simple.showModal();
  });
  function openPage(id){ const p=DATA.pages[id]; if(!p)return; $('#simpleKicker').textContent=p.kicker; $('#simpleTitle').textContent=p.title; $('#simpleContent').innerHTML=p.html; simple.showModal(); }

  // fake player animation only (drop an actual audio element later)
  let playing=false;
  $('#playBtn').addEventListener('click',()=>{ playing=!playing; $('#musicPlayer').classList.toggle('is-playing',playing); $('#playBtn').textContent=playing?'Ⅱ':'▶'; });
})();

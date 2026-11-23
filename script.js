/* =========================================================
   MINHA JORNADA ESCOLAR — script.js

   ✏️ COMO PERSONALIZAR
   1) MEMORIAS  → conte a sua história (textos, momentos e fotos).
   2) REDACOES  → troque título, gênero e texto pelas suas 17 redações.
   3) Fotos     → coloque os arquivos na pasta /img e ajuste o "src".
   ========================================================= */
'use strict';

/* ---------------------------------------------------------
   1) MEMÓRIAS ESCOLARES  (ordem cronológica)
   Tipos de momento: 'causo' | 'curiosidade' | 'desafio' | 'momento'
   --------------------------------------------------------- */
const MEMORIAS = [
  {
    emoji: '🧸',
    periodo: 'Jardim de Infância · 3 a 4 anos',
    escola: '[Nome da escola / creche]',
    titulo: 'O primeiro dia de aula',
    texto: [
      'Tudo começou com uma mochilinha maior que eu e muito choro na porta da sala. [Conte aqui como foi o seu primeiro dia: quem te levou, o que você sentiu, como era a sua professora.]',
      'Foi ali que aprendi a dividir brinquedo, a pintar sem sair da linha (quase nunca) e a fazer o meu primeiro melhor amigo.'
    ],
    momentos: [
      { tipo: 'causo', texto: '[Um causo engraçado: por exemplo, o dia em que você levou um brinquedo escondido na mochila.]' },
      { tipo: 'curiosidade', texto: '[Uma curiosidade: sua comida favorita da merenda, o apelido que ganhou…]' }
    ],
    fotos: [
      { src: 'img/01-jardim.jpg', legenda: 'Meu primeiro uniforme 🎒' }
    ]
  },
  {
    emoji: '🎨',
    periodo: 'Pré-escola · 5 a 6 anos',
    escola: '[Nome da escola]',
    titulo: 'Descobrindo as letrinhas',
    texto: [
      'Na pré-escola, as letras deixaram de ser desenhos e viraram palavras. Escrever o meu próprio nome pela primeira vez foi uma vitória enorme! [Complete com a sua memória.]'
    ],
    momentos: [
      { tipo: 'desafio', texto: '[Desafio superado: aprender a amarrar o cadarço, perder o medo de se apresentar…]' },
      { tipo: 'momento', texto: '[Momento inesquecível: festa junina, formatura da pré-escola, teatrinho…]' }
    ],
    fotos: [
      { src: 'img/02-pre-escola.jpg', legenda: 'Festa junina 🌽' },
      { src: 'img/02-pre-escola-b.jpg', legenda: 'Formatura da pré 🎓' }
    ]
  },
  {
    emoji: '✏️',
    periodo: '1º ao 5º ano · Fundamental I',
    escola: '[Nome da escola]',
    titulo: 'Cadernos, tabuada e recreio',
    texto: [
      'Foram cinco anos de caderno com capa de personagem, tabuada cantada e a corrida pelo melhor lugar na fila da cantina. [Se mudou de escola, conte aqui!]',
      'Aprendi a ler de verdade, a gostar de histórias e a ter coragem de levantar a mão na sala.'
    ],
    momentos: [
      { tipo: 'causo', texto: '[Um causo: o dia da prova que você esqueceu, a brincadeira que a escola inteira conhecia…]' },
      { tipo: 'curiosidade', texto: '[Curiosidade: seu professor ou professora favorita e o motivo.]' },
      { tipo: 'desafio', texto: '[Desafio superado: decorar a tabuada do 7, ler em voz alta…]' }
    ],
    fotos: [
      { src: 'img/03-fund1.jpg', legenda: 'Turma do 5º ano 📚' },
      { src: 'img/03-fund1-b.jpg', legenda: 'Dia da criança 🎈' }
    ]
  },
  {
    emoji: '🚀',
    periodo: '6º e 7º ano · Fundamental II',
    escola: '[Nome da escola]',
    titulo: 'Muitos professores, muitas descobertas',
    texto: [
      'De repente eram várias matérias, vários professores e um monte de trabalhos em grupo! A adaptação não foi simples, mas me ensinou a me organizar. [Conte como foi a mudança.]'
    ],
    momentos: [
      { tipo: 'desafio', texto: '[Desafio: se adaptar à nova rotina, fazer novos amigos…]' },
      { tipo: 'momento', texto: '[Momento inesquecível: feira de ciências, gincana, passeio da turma…]' }
    ],
    fotos: [
      { src: 'img/04-fund2.jpg', legenda: 'Feira de ciências 🔬' }
    ]
  },
  {
    emoji: '🌈',
    periodo: '8º e 9º ano · Fundamental II',
    escola: '[Nome da escola]',
    titulo: 'Crescendo e se descobrindo',
    texto: [
      'Foi a fase das primeiras grandes amizades, dos fones de ouvido compartilhados e da dúvida sobre o futuro. [Escreva sobre quem você era nessa época.]',
      'Terminar o 9º ano foi o primeiro "até logo" de verdade.'
    ],
    momentos: [
      { tipo: 'causo', texto: '[Um causo da turma que ninguém esquece.]' },
      { tipo: 'curiosidade', texto: '[Curiosidade: modinha da época, música que não saía da cabeça…]' },
      { tipo: 'momento', texto: '[Formatura do 9º ano, festa de despedida…]' }
    ],
    fotos: [
      { src: 'img/05-9ano.jpg', legenda: 'Formatura do 9º 💐' },
      { src: 'img/05-9ano-b.jpg', legenda: 'Os parceiros de sempre 💕' }
    ]
  },
  {
    emoji: '🌱',
    periodo: '1º ano · Ensino Médio',
    escola: '[Nome da escola]',
    titulo: 'Começando o Ensino Médio',
    texto: [
      'Nova escola (ou nova fase), novos colegas e a sensação de que "agora é sério". [Conte como foi o primeiro dia e o que mudou.]'
    ],
    momentos: [
      { tipo: 'desafio', texto: '[Desafio superado: uma matéria difícil, adaptação, ansiedade…]' },
      { tipo: 'momento', texto: '[Momento inesquecível do 1º ano.]' }
    ],
    fotos: [
      { src: 'img/06-1em.jpg', legenda: 'Turma do 1º ano 🌱' }
    ]
  },
  {
    emoji: '🔥',
    periodo: '2º ano · Ensino Médio',
    escola: '[Nome da escola]',
    titulo: 'O ano das provas e dos laços',
    texto: [
      'O 2º ano foi de muito estudo, simulados e também de muita parceria. [Fale dos projetos, dos professores marcantes, das risadas nos intervalos.]'
    ],
    momentos: [
      { tipo: 'causo', texto: '[Um causo marcante do 2º ano.]' },
      { tipo: 'curiosidade', texto: '[Curiosidade: seu método de estudo, o grupo de WhatsApp da turma…]' },
      { tipo: 'desafio', texto: '[Desafio superado: aquela nota que você achou que não ia melhorar.]' }
    ],
    fotos: [
      { src: 'img/07-2em.jpg', legenda: 'Gincana do 2º ano 🏆' },
      { src: 'img/07-2em-b.jpg', legenda: 'Dia de prova (com sorriso) 😅' }
    ]
  },
  {
    emoji: '🎓',
    periodo: '3º ano · Ensino Médio',
    escola: '[Nome da escola]',
    titulo: 'A reta final',
    texto: [
      'Chegamos! O último ano foi uma mistura de ansiedade, saudade antecipada e orgulho. [Escreva sua mensagem de despedida e o que leva da escola.]',
      'Obrigado(a) a cada professor, funcionário, colega e familiar que fez parte dessa caminhada. 💖'
    ],
    momentos: [
      { tipo: 'momento', texto: '[Último dia de aula, formatura, baile, assinatura nas camisetas…]' },
      { tipo: 'desafio', texto: '[Desafio superado: vestibular, ENEM, decisão sobre o futuro…]' }
    ],
    fotos: [
      { src: 'img/08-3em.jpg', legenda: 'Foto oficial da turma 📸' },
      { src: 'img/08-3em-b.jpg', legenda: 'Último dia de aula 🥹' }
    ]
  }
];

/* ---------------------------------------------------------
   2) PORTFÓLIO DE REDAÇÕES  (17 textos)
   O "texto" aceita parágrafos separados por uma linha em branco.
   Troque tudo pelos seus textos reais.
   --------------------------------------------------------- */
const TEXTO_EXEMPLO = (tema) =>
  `Este é um texto de exemplo sobre "${tema}". Apague este parágrafo e cole aqui a introdução da sua redação, apresentando o tema e a sua tese.\n\n` +
  `No segundo parágrafo, desenvolva o primeiro argumento. Cada parágrafo da sua redação deve ficar separado do outro por uma linha em branco, assim o site organiza tudo direitinho.\n\n` +
  `No terceiro parágrafo, traga mais um argumento, um exemplo ou uma referência que sustente o seu ponto de vista.\n\n` +
  `Por fim, escreva a conclusão e, se for o caso, a proposta de intervenção. 💕`;

const REDACOES = [
  { titulo: 'A importância da leitura na formação do cidadão', genero: 'Dissertativo-argumentativo', periodo: '1º ano · 1º bimestre' },
  { titulo: 'Minha rua, meu bairro, minha história',            genero: 'Crônica',                     periodo: '1º ano · 1º bimestre' },
  { titulo: 'O dia em que o recreio ficou em silêncio',         genero: 'Conto',                       periodo: '1º ano · 2º bimestre' },
  { titulo: 'Carta ao meu eu do futuro',                        genero: 'Carta',                       periodo: '1º ano · 3º bimestre' },
  { titulo: 'Resenha: o livro que mudou meu olhar',             genero: 'Resenha',                     periodo: '1º ano · 4º bimestre' },
  { titulo: 'Desafios da mobilidade urbana no Brasil',          genero: 'Dissertativo-argumentativo', periodo: '1º ano · 4º bimestre' },
  { titulo: 'Cyberbullying: quando a tela machuca',             genero: 'Dissertativo-argumentativo', periodo: '2º ano · 1º bimestre' },
  { titulo: 'Entre o fone de ouvido e o silêncio',              genero: 'Crônica',                     periodo: '2º ano · 1º bimestre' },
  { titulo: 'A última aula',                                    genero: 'Conto',                       periodo: '2º ano · 2º bimestre' },
  { titulo: 'Carta à professora que acreditou em mim',          genero: 'Carta',                       periodo: '2º ano · 2º bimestre' },
  { titulo: 'Saúde mental dos jovens brasileiros',              genero: 'Dissertativo-argumentativo', periodo: '2º ano · 3º bimestre' },
  { titulo: 'Resenha: a série que todo mundo comenta',          genero: 'Resenha',                     periodo: '2º ano · 4º bimestre' },
  { titulo: 'Fake news e os riscos para a democracia',          genero: 'Dissertativo-argumentativo', periodo: '3º ano · 1º bimestre' },
  { titulo: 'Todo fim é um começo disfarçado',                  genero: 'Texto literário',             periodo: '3º ano · 2º bimestre' },
  { titulo: 'Inteligência artificial na escola: aliada ou ameaça?', genero: 'Dissertativo-argumentativo', periodo: '3º ano · 3º bimestre' },
  { titulo: 'Crônica de uma formatura',                         genero: 'Crônica',                     periodo: '3º ano · 4º bimestre' },
  { titulo: 'Meu discurso de despedida',                        genero: 'Discurso',                    periodo: '3º ano · 4º bimestre' }
].map((r, i) => ({ ...r, id: i, texto: r.texto || TEXTO_EXEMPLO(r.titulo) }));

/* =========================================================
   A PARTIR DAQUI É O "MOTOR" DO SITE — não precisa mexer 💕
   ========================================================= */

const $  = (sel, raiz = document) => raiz.querySelector(sel);
const $$ = (sel, raiz = document) => [...raiz.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const CORES = ['rosa', 'lilas', 'azul', 'menta', 'pessego', 'amarelo'];
const corDe = (i) => CORES[i % CORES.length];

const TIPOS = {
  causo:       { icone: '🎭', rotulo: 'Causo marcante' },
  curiosidade: { icone: '💡', rotulo: 'Curiosidade' },
  desafio:     { icone: '💪', rotulo: 'Desafio superado' },
  momento:     { icone: '✨', rotulo: 'Momento inesquecível' }
};

const paragrafos = (texto) => String(texto).split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
const htmlTexto  = (texto) => paragrafos(texto).map((p) => `<p>${esc(p)}</p>`).join('');
const num2       = (n) => String(n).padStart(2, '0');

/* ---------- Memórias ---------- */
function renderMemorias() {
  $('#trilha').innerHTML = MEMORIAS.map((m, i) =>
    `<a href="#etapa-${i}" data-cor="${corDe(i)}">${esc(m.emoji)} ${esc(m.periodo.split('·')[0].trim())}</a>`
  ).join('');

  $('#timeline').innerHTML = MEMORIAS.map((m, i) => `
    <article class="etapa reveal ${i % 2 ? 'dir' : 'esq'}" id="etapa-${i}" data-cor="${corDe(i)}">
      <span class="etapa__marco" aria-hidden="true">${esc(m.emoji)}</span>
      <div class="etapa__card">
        <span class="chip">${esc(m.periodo)}</span>
        <h3>${esc(m.titulo)}</h3>
        <p class="etapa__escola">🏫 ${esc(m.escola)}</p>
        ${m.texto.map((p) => `<p>${esc(p)}</p>`).join('')}

        ${m.momentos && m.momentos.length ? `
          <ul class="momentos">
            ${m.momentos.map((mo) => {
              const t = TIPOS[mo.tipo] || TIPOS.momento;
              return `<li class="momento"><span class="momento__rotulo">${t.icone} ${t.rotulo}</span>${esc(mo.texto)}</li>`;
            }).join('')}
          </ul>` : ''}

        ${m.fotos && m.fotos.length ? `
          <div class="galeria">
            ${m.fotos.map((f) => `
              <figure class="polaroid">
                <img src="${esc(f.src)}" alt="${esc(f.legenda)}" loading="lazy">
                <figcaption>${esc(f.legenda)}</figcaption>
              </figure>`).join('')}
          </div>` : ''}
      </div>
    </article>`).join('');

  // Se a foto ainda não existe na pasta /img, mostra um quadradinho fofo no lugar
  $$('.polaroid img').forEach((img) => {
    const trocar = () => {
      const falta = document.createElement('div');
      falta.className = 'polaroid__falta';
      falta.innerHTML = '<div><span>🖼️</span>Coloque sua foto em<br><b>' + esc(img.getAttribute('src')) + '</b></div>';
      img.replaceWith(falta);
    };
    img.addEventListener('error', trocar, { once: true });
    if (img.complete && img.naturalWidth === 0) trocar();
  });

  observarReveal();
}

function observarReveal() {
  const itens = $$('.reveal');
  if (!('IntersectionObserver' in window)) { itens.forEach((el) => el.classList.add('visivel')); return; }
  const io = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visivel'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  itens.forEach((el) => io.observe(el));
}

/* ---------- Portfólio ---------- */
const estado = { busca: '', genero: 'todos', modo: 'cards', filtradas: [], atual: -1, ultimoFoco: null };

function aplicarFiltro() {
  const q = estado.busca.trim().toLowerCase();
  estado.filtradas = REDACOES.filter((r) =>
    (estado.genero === 'todos' || r.genero === estado.genero) &&
    (!q || (r.titulo + ' ' + r.genero + ' ' + r.periodo + ' ' + r.texto).toLowerCase().includes(q))
  );
}

function trecho(texto, max = 110) {
  const t = paragrafos(texto)[0] || '';
  return t.length > max ? t.slice(0, max).trim() + '…' : t;
}

function renderPortfolio() {
  aplicarFiltro();
  const lista = estado.filtradas;

  $('#contagem').textContent = `Mostrando ${lista.length} de ${REDACOES.length} redações`;
  $('#vazio').hidden = lista.length > 0;

  // Cards
  $('#gradeRedacoes').innerHTML = lista.map((r) => `
    <button type="button" class="card-red" data-cor="${corDe(r.id)}" data-id="${r.id}">
      <span class="card-red__num">Redação nº ${num2(r.id + 1)}</span>
      <h3>${esc(r.titulo)}</h3>
      <span class="card-red__meta">✏️ ${esc(r.genero)} · ${esc(r.periodo)}</span>
      <span class="card-red__trecho">${esc(trecho(r.texto))}</span>
      <span class="card-red__ler">Ler redação →</span>
    </button>`).join('');

  // Sanfona
  $('#acordeao').innerHTML = lista.map((r) => `
    <div class="acord__item" data-cor="${corDe(r.id)}">
      <button type="button" class="acord__cab" aria-expanded="false" aria-controls="painel-${r.id}" id="cab-${r.id}">
        <span class="acord__num">${num2(r.id + 1)}</span>
        <span class="acord__titulo">${esc(r.titulo)}<small>${esc(r.genero)} · ${esc(r.periodo)}</small></span>
        <span class="acord__seta" aria-hidden="true">▾</span>
      </button>
      <div class="acord__painel" id="painel-${r.id}" role="region" aria-labelledby="cab-${r.id}" aria-hidden="true">
        <div class="acord__interno"><div class="texto-redacao">${htmlTexto(r.texto)}</div></div>
      </div>
    </div>`).join('');

  mostrarModo();
}

function mostrarModo() {
  const cards = estado.modo === 'cards';
  $('#gradeRedacoes').hidden = !cards;
  $('#acordeao').hidden = cards;
  $$('.alternar__btn').forEach((b) => {
    const ativo = b.dataset.modo === estado.modo;
    b.classList.toggle('ativo', ativo);
    b.setAttribute('aria-pressed', ativo);
  });
}

function iniciarPortfolio() {
  // opções do filtro de gênero
  const generos = [...new Set(REDACOES.map((r) => r.genero))];
  $('#filtroGenero').insertAdjacentHTML('beforeend', generos.map((g) => `<option value="${esc(g)}">${esc(g)}</option>`).join(''));

  $('#busca').addEventListener('input', (e) => { estado.busca = e.target.value; renderPortfolio(); });
  $('#filtroGenero').addEventListener('change', (e) => { estado.genero = e.target.value; renderPortfolio(); });

  $$('.alternar__btn').forEach((b) => b.addEventListener('click', () => { estado.modo = b.dataset.modo; mostrarModo(); }));

  // abrir modal pelo card
  $('#gradeRedacoes').addEventListener('click', (e) => {
    const card = e.target.closest('.card-red');
    if (!card) return;
    const pos = estado.filtradas.findIndex((r) => r.id === Number(card.dataset.id));
    abrirModal(pos, card);
  });

  // sanfona
  $('#acordeao').addEventListener('click', (e) => {
    const cab = e.target.closest('.acord__cab');
    if (!cab) return;
    const item = cab.parentElement;
    const abrir = !item.classList.contains('aberto');
    $$('.acord__item.aberto').forEach((i) => fecharItem(i)); // uma aberta por vez
    if (abrir) {
      item.classList.add('aberto');
      cab.setAttribute('aria-expanded', 'true');
      $('.acord__painel', item).setAttribute('aria-hidden', 'false');
      setTimeout(() => item.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 380);
    }
  });

  renderPortfolio();
}

function fecharItem(item) {
  item.classList.remove('aberto');
  $('.acord__cab', item).setAttribute('aria-expanded', 'false');
  $('.acord__painel', item).setAttribute('aria-hidden', 'true');
}

/* ---------- Modal ---------- */
const modal = () => $('#modal');

function abrirModal(pos, origem) {
  if (pos < 0) return;
  estado.ultimoFoco = origem || document.activeElement;
  preencherModal(pos);
  modal().hidden = false;
  document.body.classList.add('travado');
  $('#modalFechar').focus();
}

function preencherModal(pos) {
  const r = estado.filtradas[pos];
  if (!r) return;
  estado.atual = pos;
  $('.modal__caixa').dataset.cor = corDe(r.id);
  $('#modalGenero').textContent = r.genero;
  $('#modalNum').textContent = `Redação nº ${num2(r.id + 1)}`;
  $('#modalTitulo').textContent = r.titulo;
  $('#modalMeta').textContent = `✏️ ${r.genero} · 📅 ${r.periodo}`;
  $('#modalTexto').innerHTML = htmlTexto(r.texto);
  $('#modalPosicao').textContent = `${pos + 1} de ${estado.filtradas.length}`;
  $('#modalAnterior').disabled = pos === 0;
  $('#modalProxima').disabled  = pos === estado.filtradas.length - 1;
  $('#modalCorpo').scrollTop = 0;
}

function fecharModal() {
  if (modal().hidden) return;
  modal().hidden = true;
  document.body.classList.remove('travado');
  if (estado.ultimoFoco && document.contains(estado.ultimoFoco)) estado.ultimoFoco.focus();
}

function iniciarModal() {
  $$('[data-fechar]').forEach((el) => el.addEventListener('click', fecharModal));
  $('#modalAnterior').addEventListener('click', () => preencherModal(estado.atual - 1));
  $('#modalProxima').addEventListener('click',  () => preencherModal(estado.atual + 1));

  // tamanho da letra
  let tam = 1.08;
  const aplicar = () => document.documentElement.style.setProperty('--leitura', tam + 'rem');
  $('#fonteMais').addEventListener('click',  () => { tam = Math.min(1.7, +(tam + 0.1).toFixed(2)); aplicar(); });
  $('#fonteMenos').addEventListener('click', () => { tam = Math.max(0.9, +(tam - 0.1).toFixed(2)); aplicar(); });

  document.addEventListener('keydown', (e) => {
    if (modal().hidden) return;
    if (e.key === 'Escape') { fecharModal(); return; }
    if (e.key === 'ArrowLeft'  && estado.atual > 0) preencherModal(estado.atual - 1);
    if (e.key === 'ArrowRight' && estado.atual < estado.filtradas.length - 1) preencherModal(estado.atual + 1);

    // mantém o Tab dentro da janela
    if (e.key === 'Tab') {
      const foc = $$('button:not([disabled])', $('.modal__caixa'));
      if (!foc.length) return;
      const primeiro = foc[0], ultimo = foc[foc.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
    }
  });
}

/* ---------- Botão "subir" ---------- */
function iniciarSubir() {
  const btn = $('#subir');
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => { btn.hidden = window.scrollY < 600; }, { passive: true });
}

/* ---------- Início ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderMemorias();
  iniciarPortfolio();
  iniciarModal();
  iniciarSubir();
});

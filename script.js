/* ===============================
   DADOS BÁSICOS E BANCO DE DISCIPLINAS
=============================== */
const ordemHorarios = ["M23", "M45", "T23", "T45", "N12", "N34"];

const horarios = {
  M23: "08:00–10:00",
  M45: "10:00–12:00",
  T23: "14:00–16:00",
  T45: "16:00–18:00",
  N12: "18:30–20:10",
  N34: "20:10–21:50"
};

const dias = ["Seg","Ter","Qua","Qui","Sex","Sáb"];

/* Banco de Dados Atualizado */
const disciplinas = [
  // 1º Período
  {p:1, n:"Produção de Textos I", h:["3N12","6N34"], g:1},
  {p:1, n:"Fund. Filosóficos", h:["3N34","5N12"], g:1, equiv:["Fundamento da Educação"]},
  {p:1, n:"Psicologia I", h:["2N12","5N34"], g:1, equiv:["Psicologia da Educação I"]},
  {p:1, n:"Matemática Discreta I", h:["4N34","6N12"], g:2},
  {p:1, n:"Pensamento Computacional", h:["2N34","4N12"], g:4},
  {p:1, n:"Introdução a AVA", h:["7M45"], g:4, equiv:["Elementos da Informática"]},

  // 2º Período
  {p:2, n:"Psicologia II", h:["3N34","5N12"], g:1, req:["Psicologia I"], equiv:["Psicologia da Educação II"]},
  {p:2, n:"Educação Brasileira", h:["3N12","6N34"], g:1, equiv:["Estrutura e Funcionamento da Educação Brasileira"]},
  {p:2, n:"Calculo NI", h:["2N34","4N12"], g:2, equiv:["Cálculo A I"]}, 
  {p:2, n:"Programação I", h:["2N12","5N34"], g:4, req:["Pensamento Computacional"], equiv:["Introdução a Programação I"]},
  {p:2, n:"Matemática Discreta II", h:["4N34","6N12"], g:2, req:["Matemática Discreta I"]},
  {p:2, n:"Lab Programação I", h:["7M23"], g:4, coreq:["Programação I"]},

  // 3º Período
  {p:3, n:"Didática", h:["4N34","6N12"], g:1, equiv:["Didática A"]},
  {p:3, n:"Algoritmos e Estruturas de Dados", h:["3N12","6N34"], g:4, req:["Programação I", "Matemática Discreta I"]},
  {p:3, n:"Calculo NII", h:["2N34","4N12"], g:2, req:["Calculo NI"]}, 
  {p:3, n:"Circuitos Digitais", h:["3N34","5N12"], g:4},
  {p:3, n:"Programação II", h:["2N12","5N34"], g:4, req:["Programação I", "Pensamento Computacional"], equiv:["Introdução a Programação II"]},
  {p:3, n:"Lab Programação II", h:["7M45"], g:4, coreq:["Programação II"]},

  // 4º Período
  {p:4, n:"Metodologia do Ensino", h:["2N12","4N34"], g:1, req:["Didática"]},
  {p:4, n:"Banco de Dados I", h:["3N34","6N12"], g:5, req:["Algoritmos e Estruturas de Dados", "Programação I", "Programação II"]},
  {p:4, n:"Teoria da Computação", h:["2N34","5N12"], g:4, req:["Matemática Discreta I", "Matemática Discreta II"], equiv:["Introdução a Teoria da Computação"]},
  {p:4, n:"Estatística Exploratória I", h:["4N12","6N34"], g:2, req:["Calculo NI", "Calculo NII"]}, 
  {p:4, n:"Arquitetura de Computadores", h:["3N12","5N34"], g:4, req:["Circuitos Digitais"], equiv:["Infra-estrutura de Hardware"]},
  {p:4, n:"Aspectos Humanos", h:["7M23","7M45"], g:3, equiv:["Aspectos Filosóficos e Sociológicos da Informática"]},

  // 5º Período
  {p:5, n:"Engenharia de Software", h:["2N34","4N12"], g:5},
  {p:5, n:"Algebra Linear NI", h:["3N12","6N34"], g:2, equiv:["Álgebra Vetorial e Linear para Computação"]}, 
  {p:5, n:"Redes", h:["2N12","5N34"], g:5, equiv:["Rede e Sistemas Internet"]},
  {p:5, n:"Sistemas Operacionais", h:["3N34","5N12"], g:4, req:["Algoritmos e Estruturas de Dados", "Circuitos Digitais", "Arquitetura de Computadores", "Programação I", "Matemática Discreta I"], equiv:["Infra-estrutura de Software"]},
  {p:5, n:"Metodologia Científica", h:["4N34","6N12"], g:1, equiv:["Métodos de Expressão Técnica e Científico"]},
  {p:5, n:"Prática Ensino I", h:["7M23","7M45"], g:1, equiv:["Prática de Ensino de Banco de Dados"]},

  // 6º Período
  {p:6, n:"ESO I", h:["2N12","2N34"], g:3, req:["Fund. Filosóficos", "Educação Brasileira", "Metodologia do Ensino"]},
  {p:6, n:"Inteligência Artificial", h:["3N34","5N12"], g:5, req:["Programação II", "Pensamento Computacional"], equiv:["Introdução a Inteligência Artificial"]},
  {p:6, n:"Interação Homem Máquina", h:["3N12","5N34"], g:5, equiv:["Interfaces Homem-Máquina"]},
  {p:6, n:"Prática Ensino II", h:["7M23","7M45"], g:1, equiv:["Prática de Ensino de Programação"]},
  {p:6, n:"Tecnologias na Educação", h:["4N12","6N34"], g:3},

  // 7º Período
  {p:7, n:"Educação Étnico-Racial", h:["2N34","5N12"], g:1},
  {p:7, n:"ESO II", h:["3N12","3N34"], g:3, req:["Fund. Filosóficos", "Educação Brasileira", "Metodologia do Ensino", "ESO I"]},
  {p:7, n:"Educação a Distância", h:["2N12","5N34"], g:5, req:["Fund. Filosóficos"]},

  // 8º Período
  {p:8, n:"Libras", h:["2N12","4N34"], g:3},
  {p:8, n:"ESO III", h:["6N12","6N34"], g:3, req:["Fund. Filosóficos", "Educação Brasileira", "Metodologia do Ensino", "ESO I", "ESO II"]},
  {p:8, n:"Projeto Software Educacional", h:["2N34","4N12"], g:5, req:["Engenharia de Software", "Programação II", "Pensamento Computacional"], equiv:["Projeto de Desenvolvimento de Software"]},

  // 9º Período
  {p:9, n:"ESO IV", h:["5N12","5N34"], g:3, req:["Fund. Filosóficos", "Educação Brasileira", "Metodologia do Ensino", "ESO I", "ESO II", "ESO III"]},
  {p:9, n:"TCC", h:["7M45"], g:3, req:["Metodologia Científica"]}
];

const insignias = [
  "", 
  "⛰️", "💧", "⚡", "🌿", "💖", "🔮", "🌋", "🌍", "🏆"
];

/* ===============================
   CONTROLES DO SISTEMA (TEMA E VERSÃO)
=============================== */
const temaSalvo = localStorage.getItem("temaGrade");
const btnTema = document.getElementById("btn-tema");
if (temaSalvo === "dark") {
  document.body.classList.add("dark-mode");
  if (btnTema) btnTema.innerText = "☀️ Modo Claro";
}

function toggleTema() {
  const isDark = document.body.classList.toggle("dark-mode");
  if (isDark) {
    localStorage.setItem("temaGrade", "dark");
    if (btnTema) btnTema.innerText = "☀️ Modo Claro";
  } else {
    localStorage.setItem("temaGrade", "light");
    if (btnTema) btnTema.innerText = "🌙 Modo Escuro";
  }
}

// LÓGICA DE VERSÃO (Guiada vs Livre)
let modoLivre = localStorage.getItem("modoLivre") === "true";

function aplicarInterfaceVersao() {
  const btnVersao = document.getElementById("btn-versao");
  const btnAuto = document.getElementById("btn-auto");
  
  if (modoLivre) {
    btnVersao.innerText = "🎈 Modo: Livre";
    btnVersao.classList.add("modo-livre");
    btnAuto.classList.add("oculta-btn"); // Esconde o botão auto-completar
  } else {
    btnVersao.innerText = "🎯 Modo: Guiado";
    btnVersao.classList.remove("modo-livre");
    btnAuto.classList.remove("oculta-btn");
  }
}

function toggleVersao() {
  modoLivre = !modoLivre;
  localStorage.setItem("modoLivre", modoLivre);
  aplicarInterfaceVersao();
  
  // Re-desenha a interface para colocar ou tirar os cadeados
  renderizarListaPeriodos();
  atualizarCelulas();
  
  if(modoLivre) {
    mostrarAlerta("Modo Livre ativado: Pré-requisitos e bloqueios desativados.", "sucesso");
  } else {
    mostrarAlerta("Modo Guiado ativado: O sistema aplicará regras de pré-requisitos.", "sucesso");
  }
}

let alertaTimeout;
function mostrarAlerta(mensagem, tipo = "erro") {
  const alertaDiv = document.getElementById("alerta");
  alertaDiv.innerText = mensagem;
  
  if (tipo === "sucesso") alertaDiv.classList.add("sucesso");
  else alertaDiv.classList.remove("sucesso");

  alertaDiv.classList.remove("oculta");
  clearTimeout(alertaTimeout);
  alertaTimeout = setTimeout(() => { alertaDiv.classList.add("oculta"); }, 3500);
}

/* ===============================
   ESTADO E LOCALSTORAGE
=============================== */
let usadas = JSON.parse(localStorage.getItem("minhaGrade")) || {};
let concluidas = JSON.parse(localStorage.getItem("minhasConcluidas")) || []; 
let atividades = JSON.parse(localStorage.getItem("minhasAtividades")) || {}; 

const grade = document.getElementById("grade");
const domMap = new Map(); 

// Cria as linhas vazias da tabela
ordemHorarios.forEach(codigo => {
  const tr = grade.insertRow();
  tr.insertCell().innerText = horarios[codigo];
  dias.forEach(() => tr.insertCell());
});

/* ===============================
   MOTOR DE PRÉ-REQUISITOS
=============================== */
function checarRequisitos(d) {
  // Se o usuário escolheu a Versão 1 (Modo Livre), o sistema libera tudo automaticamente!
  if (modoLivre) {
    return { liberadaReq: true, liberadaCoreq: true, liberadaTotal: true, msgErro: "" };
  }

  let liberadaReq = true;
  let liberadaCoreq = true;
  let msgErro = "";

  if (d.req && !d.req.every(r => concluidas.includes(r))) {
    liberadaReq = false;
    msgErro = `🔒 Bloqueado! Pré-requisitos pendentes: ${d.req.join(" e ")}`;
  }

  if (d.coreq && !d.coreq.every(c => concluidas.includes(c) || Object.values(usadas).includes(c))) {
    liberadaCoreq = false;
    if (!msgErro) msgErro = `🔗 Bloqueado! Você precisa cursar junto (ou ter pago): ${d.coreq.join(" e ")}`;
  }

  return { liberadaReq, liberadaCoreq, liberadaTotal: liberadaReq && liberadaCoreq, msgErro };
}

/* ===============================
   ATUALIZAÇÕES DE INTERFACE
=============================== */
function atualizarProgresso() {
  const total = disciplinas.length;
  const feitas = concluidas.length;
  const porcentagem = Math.round((feitas / total) * 100) || 0;
  
  const barra = document.getElementById("barra-progresso");
  barra.style.width = `${porcentagem}%`;
  barra.innerText = `${porcentagem}%`;
}

function atualizarInsignias() {
  for (let p = 1; p <= 9; p++) {
    const materiasDoPeriodo = disciplinas.filter(d => d.p === p);
    const periodoCompleto = materiasDoPeriodo.every(d => concluidas.includes(d.n));
    
    const insigniaEl = document.getElementById(`insignia-p${p}`);
    if (insigniaEl) {
      if (periodoCompleto) {
        insigniaEl.classList.add("conquistada");
        insigniaEl.title = "Ginásio Derrotado! Você completou este período.";
      } else {
        insigniaEl.classList.remove("conquistada");
        insigniaEl.title = "Complete todas as matérias para ganhar esta insígnia.";
      }
    }
  }
}

function atualizarContador() {
  const disciplinasUnicas = new Set(Object.values(usadas));
  document.getElementById("contador").innerText = disciplinasUnicas.size;
  const totalHoras = Object.keys(usadas).length * 2;
  document.getElementById("carga-horaria").innerText = `${totalHoras}h`;
}

function atualizarCelulas() {
  for(let i=1; i<grade.rows.length; i++){
    for(let j=1; j<grade.rows[i].cells.length; j++){
      grade.rows[i].cells[j].innerText = "";
      grade.rows[i].cells[j].className = "";
    }
  }

  for(let bloco in usadas){
    const nome = usadas[bloco];
    const dia = parseInt(bloco[0]) - 2;
    const turno = bloco.slice(1);
    const linha = ordemHorarios.indexOf(turno);
    if (linha !== -1 && dia >= 0 && dia <= 5) {
      const celula = grade.rows[linha + 1].cells[dia + 1];
      celula.innerText = nome;
      const dObj = disciplinas.find(d => d.n === nome);
      const classeGrupo = dObj ? `grupo-${dObj.g}` : "";
      celula.className = `ocupado ${classeGrupo}`;
    }
  }

  for(let bloco in atividades){
    const texto = atividades[bloco];
    const dia = parseInt(bloco[0]) - 2;
    const turno = bloco.slice(1);
    const linha = ordemHorarios.indexOf(turno);
    if (linha !== -1 && dia >=0 && dia <=5){
      const celula = grade.rows[linha +1].cells[dia+1];
      celula.innerText = texto;
      celula.className = "atividade";
    }
  }
  
  // Atualiza visual de bloqueio na lista
  document.querySelectorAll('.disciplina').forEach(div => {
    const spanMat = div.querySelector('span:not(.btn-concluir)');
    let nomeMat = spanMat.innerText.split(' (')[0].replace('🔒 ', '').trim();
    const d = disciplinas.find(disc => disc.n === nomeMat);
    
    if(d) {
        const reqStatus = checarRequisitos(d);
        const isEAD = d.h.some(b => b.startsWith("7") || b.startsWith("EAD"));
        const horariosTxt = d.h.join(" / ");
        
        if(!reqStatus.liberadaTotal && !concluidas.includes(d.n)) {
            div.classList.add("bloqueada");
            spanMat.innerHTML = `<span class="icone-cadeado">🔒</span> ${d.n} (${horariosTxt})${isEAD ? " (EAD)" : ""}`;
        } else {
            div.classList.remove("bloqueada");
            spanMat.innerHTML = `${d.n} (${horariosTxt})${isEAD ? " (EAD)" : ""}`;
        }
        
        const taSelecionada = d.h.every(b => usadas[b] === d.n);
        if(taSelecionada && !concluidas.includes(d.n)) {
            div.classList.add("selecionada");
        } else {
            div.classList.remove("selecionada");
        }
    }
  });
}

/* ===============================
   ALGORITMO AUTO-COMPLETAR
=============================== */
function gerarGradeAutomatica() {
  if(!confirm("O sistema vai preencher seus horários livres com as matérias disponíveis, priorizando cronologicamente os primeiros períodos.\n\nDeseja continuar?")) {
    return;
  }
  let adicionadas = 0;
  for (let p = 1; p <= 9; p++) {
    const disciplinasPeriodo = disciplinas.filter(d => d.p === p);
    for (const d of disciplinasPeriodo) {
      if (concluidas.includes(d.n)) continue;
      const jaNaGrade = d.h.every(b => usadas[b] === d.n);
      if (jaNaGrade) continue;
      const status = checarRequisitos(d);
      if (!status.liberadaTotal) continue;
      const temConflito = d.h.some(b => usadas[b]);
      if (temConflito) continue;

      d.h.forEach(b => usadas[b] = d.n);
      adicionadas++;
    }
  }

  if (adicionadas > 0) {
    localStorage.setItem("minhaGrade", JSON.stringify(usadas));
    atualizarCelulas(); 
    atualizarContador();
    mostrarAlerta(`✨ Mágica feita! ${adicionadas} nova(s) matéria(s) encaixada(s) na sua grade.`, "sucesso");
  } else {
    mostrarAlerta("Não foi possível encaixar nenhuma matéria. Sua grade está cheia ou faltam pré-requisitos!");
  }
}

/* ===============================
   LÓGICA DOS BOTÕES
=============================== */
function limparMaterias() {
  if(confirm("Remover apenas as matérias selecionadas na grade?")) {
    usadas = {}; localStorage.removeItem("minhaGrade");
    atualizarCelulas(); atualizarContador();
  }
}

function limparExtras() {
  if(confirm("Remover apenas suas atividades extras manuais?")) {
    atividades = {}; localStorage.removeItem("minhasAtividades");
    atualizarCelulas();
  }
}

function limparTudo() {
  if(confirm("ATENÇÃO: Isso apagará toda a sua grade, progresso e atividades extras da semana. Deseja continuar?")) {
    usadas = {}; 
    atividades = {}; 
    concluidas = []; // Zera a memória de matérias pagas
    
    localStorage.removeItem("minhaGrade");
    localStorage.removeItem("minhasAtividades");
    localStorage.removeItem("minhasConcluidas"); 
    
    // A CORREÇÃO: Força o sistema a reconstruir a lista do zero
    renderizarListaPeriodos(); 
    
    atualizarCelulas(); 
    atualizarContador();
    atualizarProgresso(); 
  }
}

function baixarGrade() {
  const btnBaixar = document.getElementById("btn-baixar");
  if (btnBaixar) btnBaixar.innerText = "⏳ Gerando...";
  html2canvas(grade, {
    backgroundColor: document.body.classList.contains("dark-mode") ? "#1e1e1e" : "#ffffff",
    scale: 2
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "minha-grade.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    if (btnBaixar) btnBaixar.innerText = "📸 Baixar Grade";
  });
}

function toggleDisciplina(d, elemento, silencioso = false) {
  if (elemento.classList.contains("concluida")) {
    if (!silencioso) mostrarAlerta("Esta disciplina já foi concluída!");
    return false;
  }

  const jaSelecionada = elemento.classList.contains("selecionada");
  const status = checarRequisitos(d);

  if (!jaSelecionada && !status.liberadaTotal) {
    if (!silencioso) {
        mostrarAlerta(status.msgErro);
        elemento.classList.add("conflito");
        setTimeout(() => elemento.classList.remove("conflito"), 400); 
    }
    return false;
  }

  if(jaSelecionada) {
    d.h.forEach(b => delete usadas[b]);
    elemento.classList.remove("selecionada");
  } else {
    for(const b of d.h){
      if(usadas[b]){
        if(!silencioso) {
          mostrarAlerta(`Conflito! A disciplina ${usadas[b]} já ocupa este horário.`);
          elemento.classList.add("conflito");
          setTimeout(() => elemento.classList.remove("conflito"), 400); 
        }
        return false; 
      }
    }
    d.h.forEach(b => usadas[b] = d.n);
    elemento.classList.add("selecionada");
  }

  localStorage.setItem("minhaGrade", JSON.stringify(usadas));
  atualizarCelulas(); atualizarContador();
  return true; 
}

for(let i=1; i<grade.rows.length; i++){
  for(let j=1; j<grade.rows[i].cells.length; j++){
    const celula = grade.rows[i].cells[j];
    celula.onclick = () => {
      if(celula.classList.contains("ocupado")) return; 
      const codigo = `${j+1}${ordemHorarios[i-1]}`;
      const atual = atividades[codigo] || "";
      const texto = prompt("O que você quer marcar aqui?", atual);
      if(texto === null) return; 
      if(texto.trim() === "") delete atividades[codigo];
      else atividades[codigo] = texto.trim();
      localStorage.setItem("minhasAtividades", JSON.stringify(atividades));
      atualizarCelulas();
    }
  }
}

function toggleConcluida(d, elemento, event) {
  event.stopPropagation(); 
  const status = checarRequisitos(d);

  if (!concluidas.includes(d.n) && !status.liberadaReq) {
    mostrarAlerta(`🔒 Você não pode concluir sem antes pagar: ${d.req.join(" e ")}`);
    return;
  }

  const index = concluidas.indexOf(d.n);
  if (index > -1) {
    concluidas.splice(index, 1);
    elemento.classList.remove("concluida");
  } else {
    if (elemento.classList.contains("selecionada")) {
      d.h.forEach(b => delete usadas[b]);
      elemento.classList.remove("selecionada");
      localStorage.setItem("minhaGrade", JSON.stringify(usadas));
      atualizarContador();
    }
    concluidas.push(d.n);
    elemento.classList.add("concluida");
    elemento.classList.remove("bloqueada"); 
  }
  
  localStorage.setItem("minhasConcluidas", JSON.stringify(concluidas));
  atualizarCelulas(); atualizarProgresso(); atualizarInsignias(); 
}

function acaoPeriodo(p, acao) {
  let conflitos = 0;
  disciplinas.filter(d => d.p === p).forEach(d => {
    const el = domMap.get(d);
    if (el.classList.contains("concluida")) return;
    const jaSelecionada = el.classList.contains("selecionada");
    if (acao === "selecionar" && !jaSelecionada) {
      const sucesso = toggleDisciplina(d, el, true);
      if (!sucesso) conflitos++;
    } else if (acao === "limpar" && jaSelecionada) {
      toggleDisciplina(d, el, true);
    }
  });
  if (acao === "selecionar" && conflitos > 0) {
    mostrarAlerta(`${conflitos} disciplina(s) ignorada(s) por conflito de horário ou bloqueio.`);
  }
}

/* ===============================
   MONTAR A INTERFACE DOS PERÍODOS
=============================== */
function renderizarListaPeriodos() {
  const container = document.getElementById("periodos");
  container.innerHTML = ""; // Limpa a tela para redesenhar
  domMap.clear();

  for(let p=1; p<=9; p++){
    const divPeriodo = document.createElement("div");
    divPeriodo.className = "periodo";

    const titulo = document.createElement("h3");
    titulo.innerHTML = `${p}º Período <span class="insignia" id="insignia-p${p}">${insignias[p]}</span>`;
    divPeriodo.appendChild(titulo);

    const divControles = document.createElement("div");
    divControles.className = "botoes-periodo";
    
    const btnSelecionar = document.createElement("button");
    btnSelecionar.className = "btn-mini";
    btnSelecionar.innerText = "+ Selecionar";
    btnSelecionar.onclick = () => acaoPeriodo(p, "selecionar");

    const btnLimpar = document.createElement("button");
    btnLimpar.className = "btn-mini";
    btnLimpar.innerText = "- Limpar";
    btnLimpar.onclick = () => acaoPeriodo(p, "limpar");

    divControles.appendChild(btnSelecionar);
    divControles.appendChild(btnLimpar);
    divPeriodo.appendChild(divControles);

    disciplinas.filter(d => d.p === p).forEach(d => {
      const div = document.createElement("div");
      div.className = `disciplina grupo-${d.g}`;

      const horariosTxt = d.h.join(" / ");
      const isEAD = d.h.some(b => b.startsWith("7") || b.startsWith("EAD"));
      
      let tooltip = d.n;
      if (!modoLivre && d.req) tooltip += `\n🔒 Requer: ${d.req.join(", ")}`;
      if (!modoLivre && d.coreq) tooltip += `\n🔗 Correquisito: ${d.coreq.join(", ")}`;
      if (d.equiv) tooltip += `\n🔄 Equivalente: ${d.equiv.join(", ")}`;
      div.title = tooltip;

      const spanTexto = document.createElement("span");
      const reqStatus = checarRequisitos(d);
      
      if (reqStatus.liberadaTotal) {
        spanTexto.innerHTML = `${d.n} (${horariosTxt})${isEAD ? " (EAD)" : ""}`;
      } else {
        spanTexto.innerHTML = `<span class="icone-cadeado">🔒</span> ${d.n} (${horariosTxt})${isEAD ? " (EAD)" : ""}`;
        div.classList.add("bloqueada");
      }

      const btnConcluir = document.createElement("span");
      btnConcluir.className = "btn-concluir";
      btnConcluir.innerHTML = "✔"; 
      btnConcluir.title = "Marcar como concluída";
      btnConcluir.onclick = (event) => toggleConcluida(d, div, event);

      div.appendChild(spanTexto);
      div.appendChild(btnConcluir);
      
      domMap.set(d, div);

      if(concluidas.includes(d.n)) {
        div.classList.add("concluida");
        div.classList.remove("bloqueada"); 
      }

      const taSelecionada = d.h.every(b => usadas[b] === d.n);
      if(taSelecionada && !concluidas.includes(d.n)) {
          div.classList.add("selecionada");
      }

      div.onclick = () => toggleDisciplina(d, div);

      divPeriodo.appendChild(div);
    });

    container.appendChild(divPeriodo);
  }
  atualizarInsignias(); 
}

// Inicializações finais
aplicarInterfaceVersao(); 
renderizarListaPeriodos(); 
atualizarCelulas(); 
atualizarContador();
atualizarProgresso();
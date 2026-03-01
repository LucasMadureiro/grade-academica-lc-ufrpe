/* ===============================
   DADOS BÁSICOS (HORÁRIOS E DISCIPLINAS)
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

const disciplinas = [
  {p:1,n:"Fund. Filosóficos",h:["3N34","5N12"], g:1},
  {p:1,n:"Psicologia I",h:["2N12","5N34"], g:1},
  {p:1,n:"Produção de Textos I",h:["3N12","6N34"], g:1},
  {p:1,n:"Matemática Discreta I",h:["4N34","6N12"], g:2},
  {p:1,n:"Pensamento Computacional",h:["2N34","4N12"], g:4},
  {p:1,n:"Introdução a AVA",h:["7M45"], g:4},
  {p:2,n:"Educação Brasileira",h:["3N12","6N34"], g:1}, 
  {p:2,n:"Psicologia II",h:["3N34","5N12"], g:1}, 
  {p:2,n:"Cálculo I",h:["2N34","4N12"], g:2}, 
  {p:2,n:"Matemática Discreta II",h:["4N34","6N12"], g:2}, 
  {p:2,n:"Programação I",h:["2N12","5N34"], g:4}, 
  {p:2,n:"Lab Programação I",h:["7M23"], g:4}, 
  {p:3,n:"Didática",h:["4N34","6N12"], g:1}, 
  {p:3,n:"Algoritmos e Estruturas de Dados",h:["3N12","6N34"], g:4}, 
  {p:3,n:"Cálculo II",h:["2N34","4N12"], g:2}, 
  {p:3,n:"Circuitos Digitais",h:["3N34","5N12"], g:4}, 
  {p:3,n:"Programação II",h:["2N12","5N34"], g:4}, 
  {p:3,n:"Lab Programação II",h:["7M45"], g:4}, 
  {p:4,n:"Metodologia do Ensino",h:["2N12","4N34"], g:1}, 
  {p:4,n:"Banco de Dados I",h:["3N34","6N12"], g:5}, 
  {p:4,n:"Estatística Exploratória I",h:["4N12","6N34"], g:2}, 
  {p:4,n:"Arquitetura de Computadores",h:["3N12","5N34"], g:4}, 
  {p:4,n:"Teoria da Computação",h:["2N34","5N12"], g:4}, 
  {p:4,n:"Aspectos Humanos",h:["7M23","7M45"], g:3}, 
  {p:5,n:"Prática Ensino I",h:["7M23","7M45"], g:1}, 
  {p:5,n:"Redes",h:["2N12","5N34"], g:5}, 
  {p:5,n:"Álgebra Linear",h:["3N12","6N34"], g:2}, 
  {p:5,n:"Sistemas Operacionais",h:["3N34","5N12"], g:4}, 
  {p:5,n:"Engenharia de Software",h:["2N34","4N12"], g:5}, 
  {p:5,n:"Metodologia Científica",h:["4N34","6N12"], g:1}, 
  {p:6,n:"Prática Ensino II",h:["7M23","7M45"], g:1}, 
  {p:6,n:"ESO I",h:["2N12","2N34"], g:3}, 
  {p:6,n:"Tecnologias na Educação",h:["4N12","6N34"], g:3}, 
  {p:6,n:"Interação Homem Máquina",h:["3N12","5N34"], g:5}, 
  {p:6,n:"Inteligência Artificial",h:["3N34","5N12"], g:5}, 
  {p:7,n:"Educação a Distância",h:["2N12","5N34"], g:5}, 
  {p:7,n:"ESO II",h:["3N12","3N34"], g:3}, 
  {p:7,n:"Educação Étnico-Racial",h:["2N34","5N12"], g:1}, 
  {p:8,n:"Libras",h:["2N12","4N34"], g:3}, 
  {p:8,n:"ESO III",h:["6N12","6N34"], g:3}, 
  {p:8,n:"Projeto Software Educacional",h:["2N34","4N12"], g:5}, 
  {p:9,n:"ESO IV",h:["5N12","5N34"], g:3}
];

/* GAMIFICAÇÃO: Insígnias estilo Pokémon (1 ao 9) */
const insignias = [
  "",   // Índice 0 vazio
  "⛰️", // 1º Período: Pedra (Boulder Badge)
  "💧", // 2º Período: Água (Cascade Badge)
  "⚡", // 3º Período: Elétrico (Thunder Badge)
  "🌿", // 4º Período: Grama (Rainbow Badge)
  "💖", // 5º Período: Alma (Soul Badge)
  "🔮", // 6º Período: Psíquico (Marsh Badge)
  "🌋", // 7º Período: Fogo (Volcano Badge)
  "🌍", // 8º Período: Terra (Earth Badge)
  "🏆"  // 9º Período: Campeão (Liga Pokémon)
];

/* ===============================
   MODO ESCURO E ALERTAS
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

let alertaTimeout;
function mostrarAlerta(mensagem) {
  const alertaDiv = document.getElementById("alerta");
  alertaDiv.innerText = mensagem;
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
   ATUALIZAÇÕES DE INTERFACE (PROGRESSO E INSÍGNIAS)
=============================== */
function atualizarProgresso() {
  const total = disciplinas.length;
  const feitas = concluidas.length;
  const porcentagem = Math.round((feitas / total) * 100) || 0;
  
  const barra = document.getElementById("barra-progresso");
  barra.style.width = `${porcentagem}%`;
  barra.innerText = `${porcentagem}%`;
}

// NOVO: Verifica se o período foi 100% concluído e acende a insígnia
function atualizarInsignias() {
  for (let p = 1; p <= 9; p++) {
    const materiasDoPeriodo = disciplinas.filter(d => d.p === p);
    // Verifica se TODAS as matérias deste período estão no array "concluidas"
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
}

/* ===============================
   LÓGICA DOS BOTÕES DE LIMPEZA
=============================== */
function limparMaterias() {
  if(confirm("Remover apenas as matérias selecionadas na grade?")) {
    usadas = {};
    localStorage.removeItem("minhaGrade");
    document.querySelectorAll(".disciplina.selecionada").forEach(el => el.classList.remove("selecionada"));
    atualizarCelulas();
    atualizarContador();
  }
}

function limparExtras() {
  if(confirm("Remover apenas suas atividades extras manuais?")) {
    atividades = {};
    localStorage.removeItem("minhasAtividades");
    atualizarCelulas();
  }
}

function limparTudo() {
  if(confirm("ATENÇÃO: Isso apagará toda a sua grade e atividades extras da semana. Deseja continuar?")) {
    usadas = {}; atividades = {};
    localStorage.removeItem("minhaGrade");
    localStorage.removeItem("minhasAtividades");
    document.querySelectorAll(".disciplina.selecionada").forEach(el => el.classList.remove("selecionada"));
    atualizarCelulas();
    atualizarContador();
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

/* ===============================
   LÓGICA DE DISCIPLINAS E EXTRAS
=============================== */
function toggleDisciplina(d, elemento, silencioso = false) {
  if (elemento.classList.contains("concluida")) {
    if (!silencioso) mostrarAlerta("Esta disciplina já foi concluída!");
    return false;
  }

  const jaSelecionada = elemento.classList.contains("selecionada");

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
  atualizarCelulas();
  atualizarContador();
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
      if(texto.trim() === "") {
        delete atividades[codigo];
      } else {
        atividades[codigo] = texto.trim();
      }
      
      localStorage.setItem("minhasAtividades", JSON.stringify(atividades));
      atualizarCelulas();
    }
  }
}

function toggleConcluida(d, elemento, event) {
  event.stopPropagation(); 

  const index = concluidas.indexOf(d.n);
  
  if (index > -1) {
    concluidas.splice(index, 1);
    elemento.classList.remove("concluida");
  } else {
    if (elemento.classList.contains("selecionada")) {
      d.h.forEach(b => delete usadas[b]);
      elemento.classList.remove("selecionada");
      localStorage.setItem("minhaGrade", JSON.stringify(usadas));
      atualizarCelulas();
      atualizarContador();
    }
    
    concluidas.push(d.n);
    elemento.classList.add("concluida");
  }
  
  localStorage.setItem("minhasConcluidas", JSON.stringify(concluidas));
  
  // ATUALIZADO: Recalcula a barra de progresso e as insígnias
  atualizarProgresso(); 
  atualizarInsignias(); 
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
    mostrarAlerta(`${conflitos} disciplina(s) ignorada(s) por conflito de horário.`);
  }
}

/* ===============================
   MONTAR A INTERFACE (PERÍODOS)
=============================== */
const container = document.getElementById("periodos");

for(let p=1; p<=9; p++){
  const divPeriodo = document.createElement("div");
  divPeriodo.className = "periodo";

  // ATUALIZADO: Injeção do span da insígnia ao lado do título
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
    const isEAD = d.h.some(b => b.startsWith("7"));

    const spanTexto = document.createElement("span");
    spanTexto.innerText = `${d.n} (${horariosTxt})${isEAD ? " (EAD)" : ""}`;

    const btnConcluir = document.createElement("span");
    btnConcluir.className = "btn-concluir";
    btnConcluir.innerHTML = "✔"; 
    btnConcluir.title = "Marcar como paga";
    btnConcluir.onclick = (event) => toggleConcluida(d, div, event);

    div.appendChild(spanTexto);
    div.appendChild(btnConcluir);
    
    domMap.set(d, div);

    if(concluidas.includes(d.n)) {
      div.classList.add("concluida");
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

// Inicializações finais
atualizarCelulas();
atualizarContador();
atualizarProgresso();
atualizarInsignias(); // Inicia conferindo se já tem algum ginásio derrotado!
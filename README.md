# 🎓 Planejador Acadêmico Gamificado | Licenciatura em Computação

Uma aplicação web interativa desenvolvida para ajudar os estudantes do curso de Licenciatura em Computação da UFRPE a organizarem seus horarios de forma inteligente, visual e motivadora.

O projeto vai muito além de uma simples tabela de horários: ele funciona como um Web App completo, rodando diretamente no navegador do usuário, sem necessidade de banco de dados ou login.

## 🚀 Demonstração
**Acesse o projeto online:** (https://lucasmadureiro.github.io/grade-academica-lc-ufrpe/)

---

## ✨ Funcionalidades Principais

### 🎮 Gamificação e Retenção (A Jornada do Aluno)
* **Insígnias de Ginásio (Pokémon):** Cada um dos 9 períodos possui uma insígnia oculta. Ao concluir 100% das disciplinas de um período, a insígnia é desbloqueada com uma animação especial de conquista.
* **Barra de Progresso Global:** Acompanhamento visual em tempo real, indo de "Calouro" a "Formado 🎓", conforme o aluno avança na graduação.
* **Dashboard de Carga Horária:** Cálculo automático das horas de estudo semanais com base nos blocos de horário selecionados.

### 🎨 Interface e Experiência Visual (UI/UX)
* **Design Moderno:** Utilização da tipografia *Poppins* e layout em "Cards" flutuantes com efeitos 3D responsivos (Hover).
* **Gradientes Premium:** As disciplinas na grade possuem fundos em gradiente separados por eixos de ensino (Ex: Matemática, Formação Docente, Fundamentos da Computação).
* **Modo Escuro (Dark Mode):** Alternância instantânea para um tema noturno otimizado para conforto visual.
* **Post-its para Atividades Extras:** Diferenciação clara entre horários de aula e atividades pessoais (como estágio, laboratório ou academia).

### ⚙️ Motor de Lógica e Segurança
* **Sistema Anti-Colisão:** Detecção automática de conflitos de horário. O sistema bloqueia a ação, emite um alerta visual e anima a disciplina conflitante.
* **Persistência de Dados (Local Storage):** Todas as escolhas, atividades extras e progresso são salvos localmente no navegador do usuário. Feche a aba e volte quando quiser, sem perder nada.
* **Exportação para Imagem:** Integração com `html2canvas` para gerar e baixar um arquivo `.png` da grade montada em alta resolução.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web puras (Vanilla), focando em performance e manipulação direta do DOM:

* **HTML5:** Estruturação semântica.
* **CSS3:** Flexbox, CSS Grid, variáveis nativas, animações (`@keyframes`) e transições.
* **JavaScript (ES6+):** Lógica de estado, manipulação do `localStorage`, funções de ordem superior (`filter`, `map`, `every`) e renderização dinâmica.
* **html2canvas:** Biblioteca externa para captura de tela e exportação de dados.

---

## 📖 Como Usar (Para Alunos)

1. Acesse o link do projeto.
2. **Monte seu semestre:** Clique nas disciplinas da lista de períodos para adicioná-las à sua grade. Você também pode usar os botões "+ Selecionar" para puxar um período inteiro.
3. **Adicione seus extras:** Clique em qualquer espaço vazio (tracejado) da grade horária para digitar suas atividades pessoais (estágio, almoço, etc.).
4. **Marque o que já pagou:** Clique no botão "✔" ao lado de uma disciplina para marcá-la como concluída. Ela sairá da grade, sua barra de progresso subirá e, se você fechar o período, ganhará uma insígnia!
5. **Salve sua grade:** Clique em "📸 Baixar Grade" para exportar uma imagem perfeita para o seu celular.

---

## 👨‍💻 Autor

Desenvolvido por **Lucas Madureiro Matias** - *Licenciatura em Computação - UFRPE*

// Criando o componente personalizado
class NomeTag extends HTMLElement {
  constructor() {
    super(); // Chama o construtor da classe base HTMLElement

    // Shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });

    // Adiciona o conteúdo ao Shadow DOM
    shadow.innerHTML = `
      <style>
        p {
          color: blue;
          font-size: 1.5rem;
        }
      </style>
      <p>Olá! Este é o conteúdo da tag personalizada <nome>.</p>
    `;
  }
}

// Registrando a tag personalizada
customElements.define('nome', NomeTag);

class DinamicTitle extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // Base do component
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute("title");

    // Estilizar o component
    const style = document.createElement("style");
    style.textContent = `
      h1 {
        color: red;
      }
    `

    // Enviar para a shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

// O título deve sempre ter hífen para diferenciar das tags padrão
customElements.define("dinamic-title", DinamicTitle);
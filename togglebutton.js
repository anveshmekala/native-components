const template = document.createElement("template");
template.innerHTML = `
<head>
<link rel="stylesheet" href="index.css">
</head>
            <div class="container">
            <input  type="checkbox"  id="something"/>
              <div
                class="slider"
                
              ></div>
            </div>
`;
class ToggleButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("input")
      .addEventListener("click", () => this.toggleButton());
  }

  toggleButton() {
    const className = this.shadowRoot.querySelector(".slider").classList;
    if (className.contains("slide")) {
      this.shadowRoot.querySelector(".slider").classList.remove("slide");
    } else {
      this.shadowRoot.querySelector(".slider").classList.add("slide");
    }
  }
}

window.customElements.define("anveshmekala-toggle-button", ToggleButton);

const template = document.createElement("template");
template.innerHTML = `
<style>
.slider {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #808080;
    border-radius: 50%;
    transition-duration: 1s;
    pointer-events: none;
  }
  
  .container {
    width: 40px;
    height: 20px;
    background-color: black;
    border-radius: 30% / 50%;
    position: relative;
    pointer-events: none;
  }
  
  .slide {
    transform: translateX(100%);
  }
  
  .container input {
    opacity: 0;
    position: absolute;
    pointer-events: all;
  }
  </style>
            <div class="container">
            <input  type="checkbox"  id="something"/>
              <div
                class="slider"
                
              ></div>
            </div>
`;
class ToggleButton extends HTMLElement {
  static get observedAttributes() {
    return ["on"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const radiobutton = this.shadowRoot.querySelector(".slider");
    if (this.hasAttribute("on")) {
      radiobutton.classList.add("slide");
    }
    this.shadowRoot
      .querySelector("input")
      .addEventListener("click", () => this.toggleButton());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("input").removeEventListener("click");
  }

  attributeChangedCallback() {
    this.shadowRoot
      .querySelector(".slider")
      .classList.toggle("slide", this.hasAttribute("on"));
  }

  toggleButton() {
    this.toggleAttribute("on");
  }
}

window.customElements.define("anveshmekala-toggle-button", ToggleButton);

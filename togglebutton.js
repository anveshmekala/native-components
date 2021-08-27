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
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const attr = this.getAttribute("on");
    const radiobutton = this.shadowRoot.querySelector(".slider");
    if (attr) {
      radiobutton.classList.add("slide");
    }

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

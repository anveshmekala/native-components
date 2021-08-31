const template = document.createElement("template");

const CSS = {
  slider: "slider",
  sliderOn: "slider--on",
};

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
  
  .slider--on {
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

  get on() {
    this.getAttribute("on");
  }

  set on(value) {
    this.setAttribute("on", value);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.inputElement = this.shadowRoot.querySelector("input");
  }

  onClickListener = () => {
    this.toggleButton();
  };

  connectedCallback() {
    const radiobutton = this.shadowRoot.querySelector(`.${CSS.slider}`);
    if (this.hasAttribute("on")) {
      radiobutton.classList.add(CSS.sliderOn);
    }
    this.inputElement.addEventListener("click", this.onClickListener);
  }

  disconnectedCallback() {
    this.inputElement.removeEventListener("click", this.onClickListener);
  }

  attributeChangedCallback() {
    this.shadowRoot
      .querySelector(`.${CSS.slider}`)
      .classList.toggle(CSS.sliderOn, this.hasAttribute("on"));
  }

  toggleButton() {
    this.toggleAttribute("on");
  }
}

window.customElements.define("anveshmekala-toggle-button", ToggleButton);

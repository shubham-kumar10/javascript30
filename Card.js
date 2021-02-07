const template = document.createElement("template");
template.innerHTML = `
    <style>
        section {
                display: inline-block;
                width: 28.5%;
                background: white;
                box-shadow: 1px 2px 10px #33333352;
                padding: 1rem;
                margin: 0.5rem 0.4%;
                border-radius: 1rem;
                cursor: pointer;
                transition: 0.4s;
        }
            
        section:hover {
                transform: scale(1.03);
                box-shadow: 2px 6px 10px #2f2f2f69;
        }

        section img {
                width: 100%;
                margin-bottom: 0.8rem;
                border-radius: 1rem;
        }
            
        section a {
                color: #E91E63;
                margin-bottom: 0.5rem;
                text-decoration: none;
        }
        
        section p {
                font-size: 0.8rem;
                color: #969696;
                margin-bottom: 0;
        }
    </style>
    <section>
        <img/>
        <a target="_blank" 
        href="./01 - JavaScript Drum Kit/index.html">
        Day 1: JavaScript Drum Kit
        </a>
        <p></p>
    </section>
`;

class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("a").innerText = `${this.getAttribute(
      "name"
    )}`;
    this.shadowRoot.querySelector("a").href = `${this.getAttribute("url")}`;
    this.shadowRoot.querySelector("p").innerText = `${this.getAttribute(
      "desc"
    )}`;
  }
}

window.customElements.define("project-card", Card);

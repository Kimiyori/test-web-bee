class NavListItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["image", "title", "alt"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const image = this.attributes?.image?.value;
    const title = this.attributes?.title?.value;
    const alt = this.attributes?.alt?.value;
    this.innerHTML = `  
    <li class="nav-item fs-6  mb-3">
      <a href="/" class="text-decoration-none text-black ">
        <img src=${image}  alt=${alt} />
        <span>${title}</span>
      </a>
    </li>
      `;
  }
}

customElements.define("nav-item", NavListItem);

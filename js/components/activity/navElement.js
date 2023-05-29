class NavListItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["image", "title","alt"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const image = this.attributes?.image?.value;
    const title = this.attributes?.title?.value;
    const alt = this.attributes?.alt?.value;
    this.innerHTML = `  
    <li class="user-item">
      <img src=${image} width="20x" height="20x" alt=${alt} />
      <span>${title}</span>
    </li>
      `;
  }
}

customElements.define("nav-item", NavListItem)

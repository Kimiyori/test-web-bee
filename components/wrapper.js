class Wrapper extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const title = this.attributes?.title.value;
    const mark = this.attributes?.mark.value;
    const hasChilds = this.hasChildNodes();
    this.innerHTML = `  
 <div class="d-flex justify-content-between mb-3">
    <h4 class="fw-normal">${title}</h4>
    <ul class="nav gap-3">
      <li class="nav-item p-1 drop-toggle">
        <img src="assets/icons/common/Dropdown.svg" alt="Dropdown" />
      </li>
      <li class="nav-item p-1">
        <img src="assets/icons/common/Reload.svg" alt="Reload" />
      </li>
      <li class="nav-item p-1">
        <img src="assets/icons/common/Close.svg" alt="Close" />
      </li>
    </ul>
  </div>
  <div class="position-relative d-flex justify-content-center align-items-center drop-down" id="${mark}">
      ${hasChilds ? Array.from(this.children).reduce((acc, child) => acc + child.outerHTML.toString(), "") : ""}
  </div>
      `;
  }
}

customElements.define("wrapper-element", Wrapper);

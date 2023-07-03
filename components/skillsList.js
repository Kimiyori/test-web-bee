class SkillsList extends HTMLElement {
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
    const title = this.attributes?.title.value;
    const skills = JSON.parse(this.attributes?.skills.value);
    this.innerHTML = `  
        <article>
            <h5 class="mb-4">${title}</h5>
            <div class="d-flex flex-row gap-4">
             ${skills.reduce(
               (acc, skill) => acc + `<span class="bg-body-secondary bg-opacity-75 px-4 py-2 rounded">${skill}</span>`,
               ""
             )}
            </div>
        </article>
      `;
  }
}

customElements.define("skills-list", SkillsList);

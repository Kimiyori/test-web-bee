function escapeSpecialChars(jsonString) {
  return jsonString.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
}

const fullBlock = (data) => {
  return `
    <article class="bg-white p-4">
      ${
        data.content.image &&
        `<img class='w-100 object-fit-cover mb-4' src=${data.content.image} alt="Post Image" />`
      }
      ${
        data.content.author &&
        data.content.quote &&
        `<div class="d-flex align-items-center mb-4">
              <img src="assets/icons/Comments.svg"  alt="Comments icon" />
                  <span class="text-info mx-1">${data.content.author.firstName} ${data.content.author.lastName}</span>commented:
            </div>
            <figure>
              <blockquote class="blockquote">
                <p  class="fs-6 mb-4">
                  ${data.content.quote}
                </p>
                <footer class="blockquote-footer">
                  ${data.content.author.firstName}, <time datetime="10:30" >10:30 am<time>
                </footer>
              </blockquote>
            </figure>`
      }
      <div class="d-flex gap-3">
        <div class="">
          <img src="assets/icons/Views.svg" alt="Views icon" />
          <span>432</span>
        </div>
        <div >
          <img src="assets/icons/Comments.svg"  alt="Comm icon" />
          <span>47</span>
        </div>
      </div>
    </article>
    `;
};
const shortBlock = (data) => {
  return `
    <article class="bg-white d-flex align-items-center justify-content-between p-4" >
      <h4 class="fw-normal">${data.content.title}</h4>
      <div class="d-flex gap-2">
        <img src="assets/icons/TimeBlog.svg" alt="Time icon" /> 
        <span >${data.content.timestamp} minutes ago</span>
        <img  src="assets/icons/Dropdown.svg"  alt="Dropdown icon" />
      </div>
    </article>
    `;
};
class ActivityBlock extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["data"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const data = JSON.parse(escapeSpecialChars(this.attributes.data.value));
    this.innerHTML = data.type === "full" ? fullBlock(data) : shortBlock(data);
  }
}

customElements.define("activity-block", ActivityBlock);

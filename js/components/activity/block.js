function escapeSpecialChars(jsonString) {
  return jsonString.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
}

const fullBlock = (data) => {
  return `
    <article class="article-long">
      ${data?.content?.image ? `<img class='preview-image' src=${data.content.image} />` : ""}
      ${
       data?.content?.author && data?.content?.quote
         ? `<div class="article-long__author">
              <img src="../assets/icons/Comments.svg" width="25px" height="25px" alt="Comments icon" />
                <span>
                  <font color="#5095EC">${data.content.author.firstName} ${data.content.author.lastName}</font> commented:
                </span>
            </div>
            <figure>
              <blockquote>
                <p>
                  ${data.content.quote}
                </p>
                <figcaption>
                  – ${data.content.author.firstName}, <time datetime="10:30" >10:30 am<time>
                </figcaption>
              </blockquote>
            </figure>`
         : ""
      }
      <div class="article__details">
        <div class="inline_center">
          <img src="../assets/icons/Views.svg" width="20px" height="20px" alt="Views icon" />
          <span>432</span>
        </div>
        <div class="inline_center">
          <img src="../assets/icons/Comments.svg" width="20px" height="20px" alt="Comm icon" />
          <span>47</span>
        </div>
      </div>
    </article>
    `;
};
const shortBlock = (data) => {
  return `
    <article class="article-short" >
      <h4>${data.content.title}</h4>
      <div class="inline_center">
        <img src="../assets/icons/Time.svg" width="20px" height="20px" alt="Time icon" /> 
        <span>${data.content.timestamp} minutes ago</span>
        <img src="../assets/icons/Dropdown.svg" width="20px" height="20px" alt="Dropdown icon" />
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
    const data = JSON.parse(escapeSpecialChars(this.attributes?.data?.value));
    this.innerHTML = data.type === "full" ? fullBlock(data) : shortBlock(data);
  }
}

customElements.define("activity-block", ActivityBlock);

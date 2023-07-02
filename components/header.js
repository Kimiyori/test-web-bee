class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    this.innerHTML = `   
  <header>
    <section class="z-1 p-1 bg-light shadow-sm position-relative" id="upper-header">
      <figure class="fs-5 position-absolute top-50 start-0 translate-middle-y ms-5">
        <img src="assets/icons/header/Back.svg" alt="..." />
        <span class="ms-2 fw-light">User pages - Profile</span>
      </figure>
      <ul class="nav  justify-content-end gap-4 me-5" aria-label="upper-nav">
        <li class="nav-item text-center">
          <a href="/stat.html" class="align-middle text-decoration-none text-black">
            <img src="assets/icons/header/Statistics.svg" alt="Stat icon" />
            <p class="mb-0 mt-1 fw-light">Statistics</p>
          </a>
        </li>
        <li class="nav-item text-center">
          <a href="/invoices.html" class="align-middle text-decoration-none text-black">
            <img src="assets/icons/header/Invoices.svg" alt="Invoices icon" />
            <p class="mb-0 mt-1 fw-light">Invoices</p>
          </a>
        </li>
        <li class="nav-item text-center">
          <a href="/schedule.html" class="align-middle text-decoration-none text-black">
            <img src="assets/icons/header/Schedule.svg" alt=".Schedule icon" />
            <p class="mb-0 mt-1 fw-light">Schedule</p>
          </a>
        </li>
      </ul>
    </section>
    <section class="row bg-white shadow-sm" id="bottom-header">
      <ul class="col  ms-5 nav gap-1"  aria-label="header-nav">
        <li class="nav-item h-100 d-flex align-items-center">
          <a
            href="/"
            onclick="route(event)"
            class="container text-decoration-none text-black fw-light"
          >
            <img src="assets/icons/header/Resume.svg" alt="Resume icon" />
            <span class="align-middle">Resume</span>
          </a>
        </li>
        <li class="nav-item h-100 d-flex align-items-center">
          <a href="/map.html" onclick="route(event)" class="container text-decoration-none text-black fw-light">
            <img src="assets/icons/header/Map.svg" alt="Map icon" />
            <span class="align-middle">Map</span>
          </a>
        </li>
        <li class="nav-item h-100 d-flex align-items-center">
          <a
            href="/time.html"
            onclick="route(event)"
            class="container text-decoration-none text-black fw-light"
          >
            <img src="assets/icons/header/Time.svg" alt="Time icon" />
            <span class="align-middle">Time</span>
          </a>
        </li>
      </ul>
      <ul class="col justify-content-end nav gap-1 me-5" aria-label="header-nav">
        <li class="nav-item p-1 d-inline-flex align-items-center">
          <a href="/notes.html" class="container text-decoration-none text-black fw-light">
            <img src="assets/icons/header/Notes.svg" alt="Notes icon" />
            <span class="align-middle">Notes</span>
          </a>
        </li>
        <li class="nav-item p-1 d-inline-flex align-items-center">
          <a href="/friends.html" class="container text-decoration-none text-black fw-light">
            <img src="assets/icons/header/Friends.svg" alt="Friends icon" />
            <span class="align-middle">Friends</span>
          </a>
        </li>
        <li class="nav-item p-1 d-inline-flex align-items-center">
          <a href="/photo.html" class="container text-decoration-none text-black fw-light">
            <img src="assets/icons/header/Photo.svg" alt="Photo icon" />
            <span class="align-middle">Photos</span>
          </a>
        </li>
        <li class="nav-item p-1 d-inline-flex align-items-center">
          <a href="/settings.html" class="container text-decoration-none text-black fw-light">
            <img src="assets/icons/header/Settings.svg" alt="Settings icon" />
            <span class="align-middle">Settings</span>
            <img src="assets/icons/common/Dropdown.svg" width="20px" alt="Dropdown button" />
          </a>
        </li>
      </ul>
    </section>
  </header>
  `;
  }
}

customElements.define("main-header", Header);

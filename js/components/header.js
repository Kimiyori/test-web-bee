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
    <section class="z-1 p-1 bg-light shadow-sm position-relative" style="height:64px">
      <figure class="fs-5 position-absolute top-50 start-0 translate-middle-y ms-5">
        <img src="assets/icons/Back.svg" alt="..." />
        <span class="ms-2 fw-light">User pages - Profile</span>
      </figure>
      <ul class="nav fs-6 h-100 justify-content-end list-unstyled gap-3 p-0 me-5">
        <li class="nav-item text-center">
          <a href="#" class="align-middle text-decoration-none text-black">
            <img src="assets/icons/Statistics.svg" alt="Stat icon" />
            <p class="mb-0 mt-1 fw-light">Statistics</p>
          </a>
        </li>
        <li class="nav-item text-center ms-3">
          <a href="#" class="align-middle text-decoration-none text-black">
            <img src="assets/icons/Invoices.svg" alt="Invoices icon" />
            <p class="mb-0 mt-1 fw-light">Invoices</p>
          </a>
        </li>
        <li class="nav-item text-center ms-3">
          <a href="#" class="align-middle text-decoration-none text-black">
            <img src="assets/icons/Schedule.svg" alt=".Schedule icon" />
            <p class="mb-0 mt-1 fw-light">Schedule</p>
          </a>
        </li>
      </ul>
    </section>
    <section class="row justify-content-evenly bg-white shadow-sm fs-6" style="height:40px">
      <ul class="col  ms-5 nav gap-1" id="navigation">
        <li class="nav-item active-buttons h-100 d-flex align-items-center">
          <a
            href="/"
            onclick="route(event)"
            class="container text-decoration-none text-black fw-light"
          >
            <img src="assets/icons/Activity.svg" alt="Activity icon" />
            <span class="align-middle">Activity</span>
          </a>
        </li>
        <li class="nav-item active-buttons h-100 d-flex align-items-center">
          <a href="/map.html" onclick="route(event)" class="container text-decoration-none text-black fw-light">
            <img src="assets/icons/Map.svg" alt="Map icon" />
            <span class="align-middle">Map</span>
          </a>
        </li>
        <li class="nav-item active-buttons h-100 d-flex align-items-center">
          <a
            href="/time.html"
            onclick="route(event)"
            class="container text-decoration-none text-black fw-light"
          >
            <img src="assets/icons/Time.svg" alt="Time icon" />
            <span class="align-middle">Time</span>
          </a>
        </li>
      </ul>
      <ul class="col justify-content-end ms-3 nav gap-1 me-5">
        <li class="nav-item p-1 d-inline-flex align-items-center">
          <a href="/" class="container text-decoration-none text-black fw-light">
            <img src="assets/icons/Notes.svg" alt="Notes icon" />
            <span class="align-middle">Notes</span>
          </a>
        </li>
        <li class="nav-item p-1 d-inline-flex align-items-center">
          <a href="/" class="container text-decoration-none text-black fw-light">
            <img src="assets/icons/Friends.svg" alt="Friends icon" />
            <span class="align-middle">Friends</span>
          </a>
        </li>
        <li class="nav-item p-1 d-inline-flex align-items-center">
          <a href="/" class="container text-decoration-none text-black fw-light">
            <img src="assets/icons/Photo.svg" alt="Photo icon" />
            <span class="align-middle">Photos</span>
          </a>
        </li>
        <li class="nav-item p-1 d-inline-flex align-items-center">
          <a href="/" class="container text-decoration-none text-black fw-light">
            <img src="assets/icons/Settings.svg" alt="Settings icon" />
            <span class="align-middle">Settings</span>
            <img src="assets/icons/Dropdown.svg" width="20px" alt="Dropdown button" />
          </a>
        </li>
      </ul>
    </section>
  </header>
  `;
  }
}

customElements.define("main-header", Header);

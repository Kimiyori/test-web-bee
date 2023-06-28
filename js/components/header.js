class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    this.innerHTML = ` <header>
      <section class="z-1 p-1 bg-light shadow-sm position-relative">
        <figure class="fs-5  position-absolute top-50 start-0 translate-middle-y ms-5">
          <img src="../assets/icons/Back.svg" alt="..." />
          <span class="ms-2 fw-light">User pages - Profile</span>
        </figure>
          <ul class="nav fs-6 h-100 justify-content-end list-unstyled gap-3 p-0 me-5">
            <li class="nav-item text-center ">
              <a   href="#" class="align-middle text-decoration-none text-black">
                <img  src="../assets/icons/Statistics.svg" alt="Stat icon" />
                <p class="mb-0 mt-1  fw-light">Statistics</p>
              </a>
            </li>
            <li class="nav-item text-center ms-3">
              <a  href="#" class="align-middle text-decoration-none text-black">
                <img  src="../assets/icons/Invoices.svg"  alt="Invoices icon" />
                <p class="mb-0 mt-1 fw-light">Invoices</p>
              </a>
            </li>
            <li class="nav-item text-center ms-3">
              <a  href="#" class="align-middle text-decoration-none text-black">
                <img  src="../assets/icons/Schedule.svg"  alt=".Schedule icon" />
                <p class="mb-0 mt-1 fw-light">Schedule</p>
              </a>
            </li>
          </ul>
      </section>
      <section class="row justify-content-evenly bg-white shadow-sm fs-6 ">
        <ul class="col justify-content-start ms-5 nav  gap-3 " id="navigation">
          <li class="nav-item  p-1 active-buttons d-inline-flex align-items-center">
          <a href="/pages/activity.html" onclick="onClick(event)" class=" text-decoration-none text-black ms-2 fw-light ">
              <img src="../assets/icons/Activity.svg"  alt="Activity icon" />
             <span> Activity</span>
              </a>
          </li>
          <li class="nav-item  p-1 active-buttons d-inline-flex align-items-center">
          <a href="/pages/map.html" onclick="onClick(event)" class="align-baseline text-decoration-none text-black ms-2 fw-light">
            <img src="../assets/icons/Map.svg"  alt="Map icon" />
            Map</a>
          </li>
          <li class="nav-item  p-1 active-buttons d-inline-flex align-items-center">
          <a href="/pages/time.html" onclick="onClick(event)" class="align-middle text-decoration-none text-black ms-2 fw-light">
            <img src="../assets/icons/Time.svg"  alt="Time icon" />
            Time</a>
          </li>
        </ul>
        <ul class="col justify-content-end ms-3 nav  gap-3  me-5">
          <li class="nav-item p-1 d-inline-flex align-items-center">
          <img src="../assets/icons/Notes.svg"  alt="Notes icon" />
            <a href="/" class="align-middle text-decoration-none text-black ms-2 fw-light">Notes</a>
          </li>
          <li class="nav-item   p-1 d-inline-flex align-items-center">
          <img src="../assets/icons/Friends.svg"  alt="Friends icon" />
            <a href="/" class="align-middle text-decoration-none text-black ms-2 fw-light">Friends</a>
          </li>
          <li class="nav-item  p-1 d-inline-flex align-items-center">
          <img src="../assets/icons/Photo.svg"  alt="Photo icon" />
            <a href="/" class="align-middle text-decoration-none text-black ms-2 fw-light">Photos</a>
          </li>
          <li class="nav-item  p-1 d-inline-flex align-items-center">
          <img src="../assets/icons/Settings.svg"   alt="Settings icon" />
            <a href="/" class="align-middle text-decoration-none text-black ms-2 fw-light"> Settings</a>
          </li>
          <li class="nav-item  p-1 d-inline-flex align-items-center">
            <img src="../assets/icons/Dropdown.svg"  class="activity-icon" alt='Dropdown button' />
          </li>
        </ul>
      </section>
    </header>`;
  }
}

customElements.define("main-header", Header);

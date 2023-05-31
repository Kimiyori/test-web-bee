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
          <img src="../assets/icons/Back.svg" width="15px" height="15px" alt="..." />
          <span class="ms-2 fw-light">User pages - Profile</span>
        </figure>
          <ul class="nav fs-6 h-100 justify-content-end list-unstyled gap-3 p-0 me-5">
            <li class="nav-item text-center ">
              <a   href="#" class="align-middle text-decoration-none text-black">
                <img  src="../assets/icons/Statistics.svg" width="20px" height="20px" alt="Stat icon" />
                <p class="mb-0 mt-1  fw-light">Statistics</p>
              </a>
            </li>
            <li class="nav-item text-center ms-3">
              <a  href="#" class="align-middle text-decoration-none text-black">
                <img  src="../assets/icons/Invoices.svg" width="20px" height="20px" alt="Invoices icon" />
                <p class="mb-0 mt-1 fw-light">Invoices</p>
              </a>
            </li>
            <li class="nav-item text-center ms-3">
              <a  href="#" class="align-middle text-decoration-none text-black">
                <img  src="../assets/icons/Schedule.svg" width="20px" height="20px" alt=".Schedule icon" />
                <p class="mb-0 mt-1 fw-light">Schedule</p>
              </a>
            </li>
          </ul>
      </section>
      <section class="row justify-content-evenly bg-white shadow-sm fs-6 ">
        <ul class="col justify-content-start ms-5 nav  gap-3">
          <li class="nav-item  bg-body-secondary bg-opacity-50 p-1">
              <img src="../assets/icons/Activity.svg" width="15px" height="15px" alt="Activity icon" />
              <a href="/activity"  class="align-middle text-decoration-none text-black ms-2 fw-light">Activity</a>
          </li>
          <li class="nav-item  p-1">
            <img src="../assets/icons/Map.svg" width="15px" height="15px" alt="Map icon" />
            <a href="/map"  class="align-middle text-decoration-none text-black ms-2 fw-light">Map</a>
          </li>
          <li class="nav-item  p-1">
            <img src="../assets/icons/Time.svg" width="15px" height="15px" alt="Time icon" />
            <a href="/time"  class="align-middle text-decoration-none text-black ms-2 fw-light">Time</a>
          </li>
        </ul>
        <ul class="col justify-content-end ms-3 nav  gap-3  me-5">
          <li class="nav-item    p-1">
          <img src="../assets/icons/Notes.svg" width="15px" height="15px" alt="Notes icon" />
            <a href="/" class="align-middle text-decoration-none text-black ms-2 fw-light">Notes</a>
          </li>
          <li class="nav-item   p-1">
          <img src="../assets/icons/Friends.svg" width="15px" height="15px"  alt="Friends icon" />
            <a href="/" class="align-middle text-decoration-none text-black ms-2 fw-light">Friends</a>
          </li>
          <li class="nav-item  p-1 ">
          <img src="../assets/icons/Photo.svg" width="15px" height="15px"  alt="Photo icon" />
            <a href="/" class="align-middle text-decoration-none text-black ms-2 fw-light">Photos</a>
          </li>
          <li class="nav-item  p-1 ">
          <img src="../assets/icons/Settings.svg" width="15px" height="15px"  alt="Settings icon" />
            <a href="/" class="align-middle text-decoration-none text-black ms-2 fw-light"> Settings</a>
          </li>
          <li class="nav-item  p-1 ">
            <img src="../assets/icons/Dropdown.svg" width="15px" height="15px" class="activity-icon" alt='Dropdown button' />
          </li>
        </ul>
      </section>
    </header>`;
  }
}

customElements.define("main-header", Header);
{/* <section class="p-1 bg-light shadow-sm position-relative">
<figure class="fs-5 position-absolute">
  <img src="../assets/icons/Back.svg" width="15px" height="15px" alt="..." />
  <span>User pages - Profile</span>
</figure>
<nav class="fs-4 float-end h-100 mr-3 d-flex align-items-center">
  <ul class="fs-6 h-100 list-style-type-none d-flex gap-1 p-0 list-unstyled">
    <li class="text-center d-flex align-items-center p-1">
      <a role="button" href="#" class="text-decoration-none text-black">
        <img class="me-2" src="../assets/icons/Statistics.svg" width="20px" height="20px" alt="Stat icon" />
        <p>Statistics</p>
      </a>
    </li>
    <li class="text-center d-flex align-items-center p-1">
      <a role="button" href="#" class="text-decoration-none text-black">
        <img class="me-2" src="../assets/icons/Invoices.svg" width="20px" height="20px" alt="Invoices icon" />
        <p>Invoices</p>
      </a>
    </li>
    <li class="text-center d-flex align-items-center p-1">
      <a role="button" href="#" class="text-decoration-none text-black">
        <img class="me-2" src="../assets/icons/Schedule.svg" width="20px" height="20px" alt=".Schedule icon" />
        <p>Schedule</p>
      </a>
    </li>
  </ul>
</nav>
</section> */}

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
      <section class="z-1 p-1 pe-0 ps-0 bg-light shadow-sm navbar navbar-expand-lg">
        <figure class="fs-5  navbar-brand ms-5 m-0">
          <img src="../assets/icons/Back.svg" width="15px" height="15px" alt="..." />
          <span class="ms-2 fw-light">User pages - Profile</span>
        </figure>
        <button class="navbar-toggler  me-5"
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent1" 
                aria-controls="navbarSupportedContent1" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  mt-lg-0" id="navbarSupportedContent1">
          <ul class="navbar-nav fs-6 justify-content-end gap-3 p-0 me-5 ms-auto flex-row">
            <li class="nav-item text-center ms-3">
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
        </div>
      </section>
      <section class="navbar navbar-expand-lg bg-white shadow-sm fs-6 pt-lg-0 pb-lg-0">
          <button class="btn d-lg-none bg-body-secondary bg-opacity-50 ms-5" type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasResponsive" 
          aria-controls="offcanvasResponsive"
          id="sidebar-menu">
            Show side menu
          </button> 
          <button class="navbar-toggler me-5 ms-auto"
                  type="button" data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent" 
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" ms-5  collapse navbar-collapse mt-3 mt-lg-0" id="navbarSupportedContent">
            <ul class="navbar-nav  justify-content-start  gap-3 me-auto ">
              <li class="nav-item active-buttons bg-body-secondary bg-opacity-50 p-1">
                  <img src="../assets/icons/Activity.svg" width="15px" height="15px" alt="Activity icon" />
                  <a href="/"    
                  onclick="route()"  
                  class="align-middle text-decoration-none text-black ms-2 fw-light">
                    Activity
                  </a>
              </li>
              <li class="nav-item active-buttons p-1">
                <img src="../assets/icons/Map.svg" width="15px" height="15px" alt="Map icon" />
                <a href="/map"  ddata-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" onclick="route()"  class="align-middle text-decoration-none text-black ms-2 fw-light">Map</a>
              </li>
              <li class="nav-item active-buttons p-1">
                <img src="../assets/icons/Time.svg" width="15px" height="15px" alt="Time icon" />
                <a href="/time"  data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" onclick="route()"  class="align-middle text-decoration-none text-black ms-2 fw-light">Time</a>
              </li>
            </ul>
            <hr class="hr" />
            <ul class=" navbar-nav justify-content-end   gap-3  me-5">
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
              <li class="nav-item  p-1 	d-none d-lg-block">
                <img src="../assets/icons/Dropdown.svg" width="15px" height="15px" class="activity-icon" alt='Dropdown button' />
              </li>
            </ul>
          </div>
  
      </section>
    </header>`;
  }
}

customElements.define("main-header", Header);
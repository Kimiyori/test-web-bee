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
   <section id="upper-header" class="z-1 p-1 px-0 bg-light shadow-sm navbar navbar-expand-lg">
      <figure class="fs-5 navbar-brand ms-5 m-0">
         <img src="static/assets/icons/header/Back.svg" alt="..." />
         <span class="ms-2 fw-light">User pages - Profile</span>
      </figure>
      <button
         class="navbar-toggler me-5"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarSupportedContent1"
         aria-controls="navbarSupportedContent1"
         aria-expanded="false"
         aria-label="Toggle navigation"
         >
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse mt-lg-0" id="navbarSupportedContent1">
         <ul class="navbar-nav justify-content-end gap-4 me-5 pe-3 ms-auto flex-row" aria-label="upper-nav">
            <li class="nav-item text-center">
               <a href="/stat" class="align-middle text-decoration-none text-black">
                  <img src="static/assets/icons/header/Statistics.svg" alt="Stat icon" />
                  <p class="mb-0 mt-1 fw-light">Statistics</p>
               </a>
            </li>
            <li class="nav-item text-center">
               <a href="/invoices" class="align-middle text-decoration-none text-black">
                  <img src="static/assets/icons/header/Invoices.svg" alt="Invoices icon" />
                  <p class="mb-0 mt-1 fw-light">Invoices</p>
               </a>
            </li>
            <li class="nav-item text-center">
               <a href="/schedule" class="align-middle text-decoration-none text-black">
                  <img src="static/assets/icons/header/Schedule.svg" alt="Schedule icon" />
                  <p class="mb-0 mt-1 fw-light">Schedule</p>
               </a>
            </li>
         </ul>
      </div>
   </section>
   <section id="bottom-header" class="navbar navbar-expand-lg bg-white shadow-sm py-lg-0">
      <button
         class="btn d-lg-none bg-body-secondary bg-opacity-50 ms-5"
         type="button"
         data-bs-toggle="offcanvas"
         data-bs-target="#offcanvasResponsive"
         aria-controls="offcanvasResponsive"
         id="sidebar-menu"
         >
      Show side menu
      </button>
      <button
         class="navbar-toggler me-5 ms-auto"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
         >
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="ms-5 collapse navbar-collapse mt-3 mt-lg-0" id="navbarSupportedContent">
         <ul class=" navbar-nav gap-3 me-auto" aria-label="header-nav">
            <li class="nav-item d-inline-flex align-items-center ">
               <a
                  href="/"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  class="container text-decoration-none text-black fw-light ms-0"
                  data-link
                  >
               <img src="static/assets/icons/header/Resume.svg" alt="Activity icon" />
               <span class="align-middle">Resume</span>
               </a>
            </li>
            <li class="nav-item d-inline-flex align-items-center">
               <a
                  href="/map"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  class="container text-decoration-none text-black  fw-light ms-0"
                  data-link
                  >
               <img src="static/assets/icons/header/Map.svg" alt="Map icon" />
               <span class="align-middle">Map</span>
               </a>
            </li>
            <li class="nav-item d-inline-flex align-items-center">
               <a
                  href="/time"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  class="container  text-decoration-none text-black fw-light ms-0"
                  data-link
                  >
               <img src="static/assets/icons/header/Time.svg" alt="Time icon" />
               <span class="align-middle">Time</span>
               </a>
            </li>
         </ul>
         <hr class="hr" />
         <ul class="navbar-nav gap-1 me-5" aria-label="header-nav">
            <li class="nav-item p-1 d-inline-flex align-items-center">
               <a href="/notes" class="container text-decoration-none text-black fw-light ms-0">
               <img src="static/assets/icons/header/Notes.svg" alt="Notes icon" />
               <span class="align-middle">Notes</span>
               </a>
            </li>
            <li class="nav-item p-1 d-inline-flex align-items-center">
               <a href="/friends" class="container text-decoration-none text-black fw-light ms-0">
               <img src="static/assets/icons/header/Friends.svg" alt="Friends icon" />
               <span class="align-middle">Friends</span>
               </a>
            </li>
            <li class="nav-item p-1 d-inline-flex align-items-center">
               <a href="/photos" class="container text-decoration-none text-black fw-light ms-0">
               <img src="static/assets/icons/header/Photo.svg" alt="Photo icon" />
               <span class="align-middle">Photos</span>
               </a>
            </li>
            <li class="nav-item p-1 d-inline-flex align-items-center">
               <a href="/settings" class="container text-decoration-none text-black fw-light ms-0">
               <img src="static/assets/icons/header/Settings.svg" alt="Settings icon" />
               <span class="align-middle">Settings</span>
               <img src="static/assets/icons/common/Dropdown.svg" width="20px" alt="Dropdown button" />
               </a>
            </li>
         </ul>
      </div>
   </section>
</header>
    `;
  }
}

customElements.define("main-header", Header);

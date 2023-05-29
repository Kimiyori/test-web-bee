class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    this.innerHTML = ` <header>
      <section class="upper-nav">
        <figure>
          <img src="../assets/icons/Back.svg" width="15px" height="15px" alt="..." />
          <span>User pages - Profile</span>
        </figure>
        <nav class="upper-nav__nav header-nav">
          <ul class="ul-list">
            <li>
              <a href="#" class="a-tag">
                <img src="../assets/icons/Statistics.svg" width="20px" height="20px" alt="Stat icon" />
                <p>Statistics</p>
              </a>
            </li>
            <li>
              <a href="#" class="a-tag">
                <img src="../assets/icons/Invoices.svg" width="20px" height="20px" alt="Invoices icon" />
                <p>Invoices</p>
              </a>
            </li>
            <li>
              <a href="#" class="a-tag">
                <img src="../assets/icons/Schedule.svg" width="20px" height="20px" alt=".Schedule icon" />
                <p>Schedule</p>
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <section class="bottom-nav">
        <nav class="header-nav">
          <ul class="ul-list">
            <li class="active">
                <img src="../assets/icons/Activity.svg" width="15px" height="15px" alt="Activity icon" />
                <a href="/activity" onclick="route()" class="a-tag">Activity</a>
            </li>
            <li>
              <img src="../assets/icons/Map.svg" width="15px" height="15px" alt="Map icon" />
              <a href="/map" onclick="route()" class="a-tag">Map</a>
            </li>
            <li>
              <img src="../assets/icons/Time.svg" width="15px" height="15px" alt="Time icon" />
              <a href="/time" onclick="route()" class="a-tag">Time</a>
            </li>
          </ul>
        </nav>
        <nav class=" header-nav">
          <ul class="ul-list">
            <li>
            <img src="../assets/icons/Notes.svg" width="15px" height="15px" alt="Notes icon" />
              <a href="/" class="a-tag">Notes</a>
            </li>
            <li>
            <img src="../assets/icons/Friends.svg" width="15px" height="15px"  alt="Friends icon" />
              <a href="/" class="a-tag">Friends</a>
            </li>
            <li>
            <img src="../assets/icons/Photo.svg" width="15px" height="15px"  alt="Photo icon" />
              <a href="/" class="a-tag">Photos</a>
            </li>
            <li>
            <img src="../assets/icons/Settings.svg" width="15px" height="15px"  alt="Settings icon" />
              <a href="/" class="a-tag"> Settings</a>
            </li>
            <li>
              <img src="../assets/icons/Dropdown.svg" width="15px" height="15px" class="activity-icon" alt='Dropdown button' />
            </li>
          </ul>
        </nav>
      </section>
    </header>`;
  }
}

customElements.define("main-header", Header);

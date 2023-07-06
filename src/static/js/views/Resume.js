export default async function Resume  ()  {
  return `
<main class="bg-light p-lg-5 p-2">
  <div class="row">
    <section class="col d-flex flex-column gap-4 h-100">
      <article class="bg-white p-4">
        <div class="position-relative">
          <img src="static/assets/img/abstractimg.jpeg" class="w-100 object-fit-cover" alt="Resume Image" />
          <h6
            class="position-absolute top-50 start-50 translate-middle text-white w-100 bg-body-secondary bg-opacity-50 text-center"
          >
            Resume
          </h6>
        </div>
        <hr class="solid" />
        <address class="d-flex flex-column flex-sm-row gap-4 justify-content-evenly mb-0">
          <div class="d-flex flex-column align-items-center gap-3">
            <img src="static/assets/icons/resume/contact/City.svg" alt="City" />
            <p class="text-decoration-none text-black" href="mailto:jim@rock.com">Rostov-on-Don</p>
          </div>
          <a
            class="text-decoration-none text-black d-flex flex-column align-items-center gap-3"
            href="mailto:maksimkalin17@gmail.com"
          >
            <img src="static/assets/icons/resume/contact/Email.svg" alt="Email" />
            <p>maksimkalin17@gmail.com</p></a
          >
          <a
            class="text-decoration-none text-black d-flex flex-column align-items-center gap-3"
            href="tel:+79381081108"
          >
            <img src="static/assets/icons/resume/contact/Phone.svg" alt="Phone" />
            <p>+7 (938) 108-11-08</p></a
          >
        </address>
      </article>
      <article class="bg-white p-4">
        <h2 class="mb-4 bg-body-secondary p-2">Skills</h2>
        <hr class="solid" />
        <skills-list
          title="Front-end stack"
          skills='["JavaScript","TypeScript","HTML/CSS","React","Redux"]'
        ></skills-list>
        <hr class="solid" />
        <skills-list title="Back-end stack" skills='["Python","Django","FastAPI","aiohttp"]'></skills-list>
        <hr class="solid" />
        <skills-list title="Data" skills='["PostgreSQL","Redis","MongoDB"]'></skills-list>
        <hr class="solid" />
        <skills-list title="Development" skills='["GIT","Docker","Nginx"]'></skills-list>
      </article>
    </section>
    <div
      class="col-2 offcanvas-lg offcanvas-end bg-light"
      tabindex="-1"
      id="offcanvasResponsive"
      aria-labelledby="offcanvasResponsiveLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Side menu</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          data-bs-target="#offcanvasResponsive"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body flex-column d-flex gap-4">
        <aside class="row bg-white text-center py-3 px-5 g-1 justify-content-center">
          <img class="rounded-circle mb-3 img-fluid" src="static/assets/img/user-avatar.png" alt="User avatar" />
          <h5 class="fs-5 mb-3 fw-normal">Maxim Maxim</h5>
          <h4 class="fs-6 mb-3 fst-italic fw-light">Web programmer</h4>
          <div class="d-flex justify-content-center gap-3">
            <a href="https://t.me/tooooooook/">
              <img src="static/assets/icons/resume/nav/Telegram.svg" alt="Telegram" />
            </a>
            <a href="https://github.com/Kimiyori">
              <img src="static/assets/icons/resume/nav/Github.svg" alt="Github" />
            </a>
            <a href="https://twitter.com/xmayedax">
              <img src="static/assets/icons/resume/nav/Twitter.svg" alt="Twitter" />
            </a>
          </div>
        </aside>
        <aside class="row bg-white g-1 px-4 py-3">
          <div class="d-flex justify-content-between mb-2 drop-toggle">
            <h4 class="m-0 fs-6 fw-normal">Navigation</h4>
            <img src="static/assets/icons/resume/nav/UpButton.svg" alt="UpButton icon" />
          </div>
      <ul class="nav flex-column drop-down" aria-label="side-nav">
        <hr class="solid mt-0" />
        <li class="nav-item fs-6 mb-3">
          <a href="/profile" class="text-decoration-none text-black">
            <img src="static/assets/icons/resume/nav/MyProfile.svg" alt="MyProfile" />
            <span>My profile</span>
          </a>
        </li>

        <li class="nav-item fs-6 mb-3">
          <a href="/balance" class="text-decoration-none text-black">
            <img src="static/assets/icons/resume/nav/Balance.svg" alt="Balance" />
            <span>Balance</span>
          </a>
        </li>

        <li class="nav-item fs-6 mb-3">
          <a href="/conn" class="text-decoration-none text-black">
            <img src="static/assets/icons/resume/nav/Connections.svg" alt="Connections" />
            <span>Connections</span>
          </a>
        </li>

        <li class="nav-item fs-6 mb-3">
          <a href="/friends" class="text-decoration-none text-black">
            <img src="static/assets/icons/resume/nav/FriendsNavigation.svg" alt="Friends" />
            <span>Friends</span>
          </a>
        </li>
        <hr class="solid" />
        <side-nav-item
          image="static/assets/icons/resume/nav/Events.svg"
          title="Events"
          alt="Events"
          href="/events.html"
        ></side-nav-item>
        <li class="nav-item fs-6 mb-3">
          <a href="/events" class="text-decoration-none text-black">
            <img src="static/assets/icons/resume/nav/Events.svg" alt="Events" />
            <span>Events</span>
          </a>
        </li>

        <li class="nav-item fs-6 mb-3">
          <a href="/settings" class="text-decoration-none text-black">
            <img src="static/assets/icons/resume/nav/SettingsNavigation.svg" alt="Settings" />
            <span>Account settings</span>
          </a>
        </li>
      </ul>
        </aside>
        <aside class="row bg-white g-1 px-4 py-3">
          <div class="d-flex justify-content-between mb-2 drop-toggle">
            <h4 class="fs-6 fw-normal">Share your thoughts</h4>
            <img src="static/assets/icons/resume/nav/UpButton.svg" alt="UpButton" />
          </div>
          <div class="drop-down">
            <hr class="solid" />
            <textarea class="form-control mb-2"></textarea>
            <button type="button" class="btn btn-primary w-100">Save</button>
          </div>
        </aside>
      </div>
    </div>
  </div>
</main>

        `;
};

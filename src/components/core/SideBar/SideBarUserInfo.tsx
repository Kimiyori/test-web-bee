import UserAvatar from "../../../assets/img/user-avatar.png";
import Telegram from "../../../assets/icons/resume/nav/Telegram.svg";
import GitHub from "../../../assets/icons/resume/nav/Github.svg";
import Twitter from "../../../assets/icons/resume/nav/Twitter.svg";

export const UserSummary = () => {
  return (
    <>
      <aside className="row bg-white text-center mb-4 py-3 px-4 g-1 justify-content-center">
        <img
          className="rounded-circle mb-3 object-fit-cover img-fluid w-75"
          src={UserAvatar}
          alt="User avatar"
        />
        <h5 className="fs-5 mb-3 fw-normal">Maxim Maxim</h5>
        <h4 className="fs-6 mb-3 fst-italic fw-light">Web programmer</h4>
        <div className="d-flex justify-content-center gap-3">
          <a href="https://t.me/tooooooook/">
            <img src={Telegram} alt="Telegram" />
          </a>
          <a href="https://github.com/Kimiyori">
            <img src={GitHub} alt="Github" />
          </a>
          <a href="https://twitter.com/xmayedax">
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>
      </aside>
    </>
  );
};

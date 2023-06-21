import UserAvatar from "../../../assets/activity/user-avatar.png";
import Telegram from "../../../assets/icons/Telegram.svg";
import Hh from "../../../assets/icons/Hh.svg";
import Twitter from "../../../assets/icons/Twitter.svg";

export const UserSummary = () => {
  return (
    <>
      <aside className="row bg-white text-center mb-4 pt-3 pb-3 ps-4 pe-4 g-1 justify-content-center">
        <img
          className="rounded-circle mb-3 object-fit-cover img-fluid"
          style={{ minWidth: "100px", minHeight: "100px" }}
          src={UserAvatar}
          alt="User avatar"
        />
        <h5 className="fs-5 mb-3 fw-normal">Hanna Dorman</h5>
        <h4 className="fs-6 mb-3 fst-italic fw-light">UX/UI designer</h4>
        <div className="user-info__contact-icons">
          <img src={Telegram} width="30x" height="30x" alt="Telegram icon" />
          <img src={Hh} width="30x" height="30x" alt="HeadHunter icon" />
          <img src={Twitter} width="30x" height="30x" alt="Twitter icon" />
        </div>
      </aside>
    </>
  );
};


import UserAvatar from "../../../assets/activity/user-avatar.png";
import Telegram from "../../../assets/icons/Telegram.svg";
import Hh from "../../../assets/icons/Hh.svg";
import Twitter from "../../../assets/icons/Twitter.svg";

export const UserSummary = () => {
  return (
    <>
      <aside className="row bg-white text-center mb-4 py-3 px-4 g-1 justify-content-center">
        <img
          className="rounded-circle mb-3 object-fit-cover img-fluid w-75"
          src={UserAvatar}
          alt="User avatar"
        />
        <h5 className="fs-5 mb-3 fw-normal">Hanna Dorman</h5>
        <h4 className="fs-6 mb-3 fst-italic fw-light">UX/UI designer</h4>
        <div>
          <img src={Telegram}  alt="Telegram icon" />
          <img src={Hh} className="mx-2" alt="HeadHunter icon" />
          <img src={Twitter}  alt="Twitter icon" />
        </div>
      </aside>
    </>
  );
};


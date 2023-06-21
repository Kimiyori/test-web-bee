import UpButton from "../../../assets/icons/UpButton.svg";
export const SideBarComments = () => {
  return (
    <>
      <aside className="row bg-white g-1 ps-4 pe-4 pt-3 pb-3 mb-4">
        <div className="d-flex justify-content-between mb-2">
          <h4 className="fs-6 fw-normal">Share your thoughts</h4>
          <img src={UpButton} alt="..." />
        </div>
        <hr className="solid" />
        <textarea className="form-control mb-2"></textarea>
        <button type="button" className="btn btn-primary">
          Save
        </button>
      </aside>
    </>
  );
};

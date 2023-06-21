export const SideBarHeader = () => {
  return (
    <>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">
          Side menu
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          data-bs-target="#offcanvasResponsive"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

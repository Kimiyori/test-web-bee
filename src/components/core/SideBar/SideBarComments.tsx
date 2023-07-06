import { SideBarDropdownMenu } from "./SideBarDropdownMenu";
export const SideBarComments = () => {
  return (
    <>
      <aside className="row bg-white g-1 ps-4 pe-4 pt-3 pb-3 mb-4">
        <SideBarDropdownMenu title={"Share your thoughts"}>
          <textarea className="form-control mb-2" />
          <button type="button" className="btn btn-primary">
            Save
          </button>
        </SideBarDropdownMenu>
      </aside>
    </>
  );
};

import { DATA_FULL, DATA_SHORT } from "../MockData";
import FullBlock from "../components/core/BlockData/FullBlock";
import ShortBlock from "../components/core/BlockData/ShortBlock";
import SideBar from "../components/core/SideBar/SideBarBody";

const ActivityPage = () => {
  const FullPosts = DATA_FULL.map((item, index) => (
    <FullBlock image={item.image} author={item.author} quote={item.quote} key={index} />
  ));
  const ShortPosts = DATA_SHORT.map((item, index) => (
    <ShortBlock title={item.title} timestamp={item.timestamp} key={index} />
  ));
  return (
    <>
      <main className="bg-light m-lg-5 m-2">
        <div className="row">
          <section className="col">
            {FullPosts}
            {ShortPosts}
          </section>
          <SideBar />
        </div>
      </main>
    </>
  );
};

export default ActivityPage;

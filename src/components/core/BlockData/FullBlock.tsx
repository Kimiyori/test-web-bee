import Views from "../../../assets/icons/Views.svg";
import Comments from "../../../assets/icons/Comments.svg";
type FullBlockData = {
  image: string;
  author: { firstName: string; lastName: string };
  quote: string;
};
const FullBlock = ({ image, author, quote }: FullBlockData) => {
  return (
    <>
      <article className="bg-white p-4 mb-4">
        <img className="w-100 object-fit-cover mb-4" style={{ maxHeight: "650px" }} src={image} alt="Post" />
        <div className="d-flex align-items-center mb-4">
          <img src={Comments} width="25px" height="25px" alt="Comments icon" />
          &nbsp;
          <span style={{ color: "#5095EC" }}>
            {author.firstName} {author.lastName}
          </span>
          &nbsp;
          <span>commented:</span>
        </div>
        <figure>
          <blockquote className="blockquote">
            <p className="fs-6 mb-4 ">{quote}</p>
            <footer className="blockquote-footer">{author.firstName}, 10:30 am</footer>
          </blockquote>
        </figure>
        <div className="d-flex">
          <div className="me-4">
            <img src={Views} width="20px" height="20px" alt="Views icon" />
            &nbsp;
            <span>432</span>
          </div>
          <div>
            <img src={Comments} width="20px" height="20px" alt="Comm icon" />
            &nbsp;
            <span>47</span>
          </div>
        </div>
      </article>
    </>
  );
};
export default FullBlock;

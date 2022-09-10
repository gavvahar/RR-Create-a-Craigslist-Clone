import Posting from "./Posting";
const gallery = (props) => {
  return (
    <div className="gallery">
      {props.postings.map((p, i) => {
        return <Posting posting={p} key={i} />;
      })}
    </div>
  );
};

export default gallery;

//
// Import Post CSS //
//
import "./post.css";

/////TAbleau content//////

const articles = [
  {
    title: "titre 1",
    text: "titre 2",
  },
];

function NewPost(props) {
  return (
    <div className="postContainer">
      <div className="postContent">
        <div>
          <h2 className="titlePost">{props.title}</h2>
          <div>
            <p className="textPost">{props.text}</p>
            <div className="descriptionPost">
              <p className="datePost">
                <span className="bold">Date :</span> {props.date}
              </p>
              <a href="#" className="sharebox">
                <span className="fb-icon"></span> Partager
              </a>
              <p className="autorPost">
                <span className="bold">Auteur :</span> {props.autor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;

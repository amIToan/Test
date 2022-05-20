import { useSelector } from "react-redux";

const PostList = () => {
  const { loading, postLists, error } = useSelector((state) => state.PostList);
  console.log(postLists);
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <h3> Post from JSON PLACE HOLDER</h3>
          {postLists.length > 0 ? (
            postLists.slice(0, 10).map((item) => (
              <div
                className="col-4 card mb-3 mx-3"
                style={{ width: "18rem" }}
                key={item.id}
              >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p>
                    <b>Id : {item.id}</b>
                  </p>
                  <p className="card-text">{item.body}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="alert alert-danger">No data</div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostList;

import "./POstform.css";
import { useState } from "react";
const PostForm = () => {
  const [state, setState] = useState();
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <textarea
          type="text"
          className="form-control"
          id="body"
          onChange={(e) => {
            setState({ ...state, [e.target.name]: e.target.value });
          }}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default PostForm;

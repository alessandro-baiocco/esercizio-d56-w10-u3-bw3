import { useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import SecondaryFooter from "../footer/SecondaryFooter";
import { CaretDown } from "react-bootstrap-icons";
import { getPostsFetch } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const SideBarRight = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.getPosts.content);
  const postsSliced = posts.slice(-5);
  const loading = useSelector((state) => state.loadingProfile.content);

  useEffect(() => {
    dispatch(getPostsFetch());
  }, []);

  return (
    <div>
      <section>
        <div className="border border-tertiary rounded bg-white p-2">
          <div className="d-flex justify-content-between fs-6 fw-bold mb-2">
            LinkedIn Notizie
            <span>
              <i className="bi bi-info-square-fill"></i>
            </span>
          </div>
          <ul>
            {loading ? (
              <Spinner variant="success"></Spinner>
            ) : (
              posts &&
              postsSliced.map((post, i) => (
                <li id="sideBarRightList">
                  <div key={`post-${i}`}>
                    <h6 style={{ height: "18px", overflow: "hidden" }}> {post.text}</h6>
                    <p className="text-secondary"> . {post.createdAt.slice(0, 10)} </p>
                  </div>
                </li>
              ))
            )}
          </ul>
          <Button className="btn btn-light fs-6">
            Show more
            <CaretDown />
          </Button>
        </div>
      </section>
      <SecondaryFooter />
    </div>
  );
};

export default SideBarRight;

import { useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import SecondaryFooter from "../footer/SecondaryFooter";
import { CaretDown, ChevronCompactDown } from "react-bootstrap-icons";
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
        <div className="border border-tertiary rounded bg-white p-3">
          <div className="d-flex justify-content-between fs-6  mb-2" style={{ fontWeight: "600" }}>
            LinkedIn Notizie
            <span>
              <i className="bi bi-info-square-fill"></i>
            </span>
          </div>
          <ul>
            {loading ? (
              <div class="line">
                <div class="inner"></div>
              </div>
            ) : (
              posts &&
              postsSliced.map((post, i) => (
                <li id="sideBarRightList" key={`li-${i}`}>
                  <div>
                    <h6 style={{ height: "20px", overflow: "hidden" }}> {post.text}</h6>
                    <p className="text-secondary"> . {post.createdAt.slice(0, 10)} </p>
                  </div>
                </li>
              ))
            )}
          </ul>
          <Button className="btn ms-3 btn-light opacity-75" style={{ fontSize: "14px" }}>
            Show more
            <ChevronCompactDown className="fs-5 ms-2" />
          </Button>
        </div>
      </section>
      <SecondaryFooter />
    </div>
  );
};

export default SideBarRight;

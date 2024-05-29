"use client";
import { useSelector } from "react-redux";
import SweetAlert2 from "react-sweetalert2";
import ImageDisplay from "./ImageDisplay";
import VideoDisplay from "./VideoDisplay";
import ParagraphDisplay from "./ParageraphDisplay";

function Display() {
  const { url, errors } = useSelector((state) => state.url);

  return (
    <div className="dispaly ">
      <div className="d-flex flex-wrap mx-3 my-2 position-relative">
        {url.map((item, index) => {
          if (item.type === "image") {
            return (
              <div key={index} className="mx-2">
                {!errors.includes(index) ? (
                  <ImageDisplay index={index} item={item} />
                ) : (
                  <SweetAlert2
                    title="Oops..."
                    text="The link entered is incorrect!!!"
                    show={true}
                    animation={true}
                    icon="error"
                  />
                )}
              </div>
            );
          } else if (item.type === "video") {
            return (
              <div key={index}>
                {!errors.includes(index) ? (
                  <VideoDisplay index={index} item={item} />
                ) : (
                  <SweetAlert2
                    title="Oops..."
                    text="The link entered is incorrect!!!"
                    show={true}
                    animation={true}
                    icon="error"
                  />
                )}
              </div>
            );
          } else if (item.type === "paragraph") {
            return (
              <div key={index}>
                {item.value ? (
                  <ParagraphDisplay item={item} />
                ) : (
                  <SweetAlert2
                    title="Oops..."
                    text="It should not be empty"
                    show={true}
                    animation={true}
                    icon="error"
                  />
                )}
              </div>
            );
          } else if (item.type === "scroll-text") {
            return (
              <div key={index}>
                {item.value ? (
                  <div class="scrollable-div mx-3">
                    <p>{item.value}</p>
                  </div>
                ) : (
                  <SweetAlert2
                    title="Oops..."
                    text="It should not be empty"
                    show={true}
                    animation={true}
                    icon="error"
                  />
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Display;

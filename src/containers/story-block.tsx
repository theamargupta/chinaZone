import { useState } from "react";
import Stories from "react-insta-stories";

const StoryBlock = () => {
  const [openStory, setOpenStory] = useState(true);
  return (
    <div className="w-full flex items-center justify-center relative  sm:hidden">
      {openStory ? (
        <div
          onClick={() => setOpenStory(false)}
          className="flex items-center justify-center"
          style={{ cursor: "pointer" }}
        >
          <Header
            profileImage={
              "https://cdn.shopify.com/s/files/1/0624/0659/0635/products/1_110x110@2x.png?v=1658314706"
            }
            heading={"Cactus"}
          />
          <Header
            profileImage={
              "https://cdn.shopify.com/s/files/1/0624/0659/0635/products/8810473a_110x110@2x.jpg?v=1664521971"
            }
            heading={"Child Blanket"}
          />
          <Header
            profileImage={
              "https://cdn.shopify.com/s/files/1/0624/0659/0635/products/photo_2022-07-19_17-30-46_110x110@2x.jpg?v=1658314846"
            }
            heading={"UFO Ball"}
          />
          <Header
            profileImage={
              "https://cdn.shopify.com/s/files/1/0624/0659/0635/products/Sd2b7d5c97d0648798c759d37e6ff5971z_110x110@2x.jpg?v=1658459727"
            }
            heading={"Talking Flash Cards"}
          />
        </div>
      ) : (
        <>
          <div
            className="justify-center items-center flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            style={{ background: "black", height: "100%" }}
          >
            <Stories
              stories={stories2}
              defaultInterval={3000}
              width={"100%"}
              height={"80vh"}
              onAllStoriesEnd={() => setOpenStory(true)}
            />
            <div
              className="w-full flex justify-center align-top"
              onClick={() => setOpenStory(true)}
            >
              <img
                src="https://www.freeiconspng.com/thumbs/close-button-png/black-circle-close-button-png-5.png"
                alt=""
                width="50"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default StoryBlock;
const stories2 = [
  {
    url:
      "https://cdn.shopify.com/s/files/1/0624/0659/0635/products/1_360x.png?v=1658314706",
    duration: 5000,
    header: {
      heading: "Amar Enterprises",
      subheading: "Posted 30m ago",
      profileImage:
        "https://i.ibb.co/7b4mFp5/295498313-111917338261987-3661204109327278358-n.jpg",
    },
  },
  {
    url:
      "https://cdn.shopify.com/s/files/1/0624/0659/0635/products/photo_2022-07-19_17-30-46_360x.jpg?v=1658314846",
    duration: 5000,
    header: {
      heading: "Amar Enterprises",
      subheading: "Posted 30m ago",
      profileImage:
        "https://i.ibb.co/7b4mFp5/295498313-111917338261987-3661204109327278358-n.jpg",
    },
  },
  {
    url:
      "https://cdn.shopify.com/s/files/1/0624/0659/0635/products/Sd2b7d5c97d0648798c759d37e6ff5971z_360x.jpg?v=1658459727",
    duration: 5000,
    header: {
      heading: "Amar Enterprises",
      subheading: "Posted 30m ago",
      profileImage:
        "https://i.ibb.co/7b4mFp5/295498313-111917338261987-3661204109327278358-n.jpg",
    },
    seeMore: ({ close }) => {
      return (
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: "0px",
            left: "0px",
            boxSizing: "border-box",
            zIndex: 99999,
          }}
          onClick={close}
        >
          <div
            style={{
              maxWidth: "100%",
              height: "100%",
              padding: "40px",
              background: "white",
            }}
          >
            <h2>Just checking the see more feature.</h2>
            <p style={{ textDecoration: "underline" }}>
              Go on, close this popup.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    url: "https://picsum.photos/1000/1000",
    duration: 5000,
    header: {
      heading: "Amar Enterprises",
      subheading: "Posted 30m ago",
      profileImage:
        "https://i.ibb.co/7b4mFp5/295498313-111917338261987-3661204109327278358-n.jpg",
    },
  },
];

const Header = ({ profileImage, heading }) => (
  <div style={styles.main as React.CSSProperties}>
    {profileImage && <img style={styles.img} src={profileImage} />}
    <span style={styles.text as React.CSSProperties}>
      <p style={styles.heading}>{heading}</p>
    </span>
  </div>
);

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    border: "2px solid rgba(0, 0, 0)",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    filter: "drop-shadow(0 0px 3px rgba(0, 0, 0))",
    marginRight: 10,
  },
  heading: {
    fontSize: "0.5rem",
    color: "rgba(0, 0, 0)",
    margin: 0,
    marginBottom: 2,
  },
};

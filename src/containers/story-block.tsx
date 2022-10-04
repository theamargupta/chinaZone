import { useState } from "react";
import Stories from "react-insta-stories";

const StoryBlock = ({ storyItems }: any) => {
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
            key={storyItems[0].id}
            profileImage={storyItems[0].thumb}
            heading={storyItems[0].name}
          />
          <Header
            key={storyItems[1].id}
            profileImage={storyItems[1].thumb}
            heading={storyItems[1].name}
          />
          <Header
            key={storyItems[2].id}
            profileImage={storyItems[2].thumb}
            heading={storyItems[2].name}
          />
        </div>
      ) : (
        <>
          <div
            className="justify-center items-center flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            style={{ background: "black", height: "100%" }}
          >
            <Stories
              stories={storyItems.map((item) => ({
                url: item.content,
                duration: 3000,
                type: item.type,
                header: {
                  heading: item.name,
                  subheading: "Amar Enterprises",
                  profileImage: item.thumb,
                },
              }))}
              storyStyles={{
                width: "100vw",
                objectFit: "cover",
              }}
              defaultInterval={3000}
              width={"100vw"}
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

const Header = ({ profileImage, heading }) => (
  <div style={styles.main as React.CSSProperties}>
    {profileImage && <img style={styles.img} src={profileImage} />}
    <span style={styles.text as React.CSSProperties}>
      <p style={styles.heading as React.CSSProperties}>{heading}</p>
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
    marginRight: 10,
  },
  heading: {
    fontSize: "0.7rem",
    color: "rgba(0, 0, 0)",
    fontWeight: "bold",
    margin: 0,
    marginBottom: 2,
  },
};

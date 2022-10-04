import React from "react";
import Stories, { WithSeeMore } from "react-insta-stories";

export default function StoryBlock() {
  return (
    <div className="w-full flex items-center justify-center relative my-35px">
      <Stories
        stories={stories2}
        defaultInterval={3000}
        width={400}
        height={768}
      />
    </div>
  );
}

const stories2 = [
  {
    content: () => (
      <div
        style={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
          background: "rgb(51, 51, 51)",
          color: "#fff",
          width: "100%",
          padding: "20px",
          height: "100%",
        }}
      >
        <h1 style={{ color: "#fff" }}>The new version is here.</h1>
        <p>This is the new story.</p>
        <p>Now render React components right into your stories.</p>
        <p>Possibilities are endless, like here - here's a code block!</p>
        <pre>
          <code
            style={{
              background: "rgb(238, 238, 238)",
              padding: "5px 10px",
              borderRadius: "4px",
              color: "rgb(51, 51, 51)",
            }}
          >
            console.log('Hello, world!')
          </code>
        </pre>
        <p>Or here, an image!</p>
        <br />
        <img
          src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1650&amp;q=80"
          style={{ display: "block", maxWidth: "100%", borderRadius: "4px" }}
        />
        <h3>Perfect. But there's more! →</h3>
      </div>
    ),
  },
  {
    url: "https://picsum.photos/1000/1000",
    duration: 5000,
    header: {
      heading: "Amar Enterprises",
      subheading: "Posted 30m ago",
      profileImage: "https://picsum.photos/100/100",
    },
  },
  {
    url: "https://picsum.photos/1000/1000",
    duration: 5000,
    // seeMoreCollapsed: () => <h1>CheckOut</h1>,
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
    content: (props) => (
      <div style={{ background: "pink", padding: 20, height: "100%" }}>
        <h1 style={{ marginTop: 10, marginBottom: 0 }}>🌝</h1>
        <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
      </div>
    ),
  },
];

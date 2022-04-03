import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useState } from "react";
import Posts from "./components/Posts";
import Reputation from "components/Reputation";
import { Button, Typography } from "antd";
import glStyles from "components/gstyles";
import AddPost from "./components/AddPost";
import LogoStk from "../../assets/deStackOverflow.png";
import LogoOpenSorcerer from "../../assets/wizzie.png";
const Feed = () => {
  const { selectedCategory } = useMoralisDapp();
  const [showAddPost, setShowAddPost] = useState(false);
  const { Title, Paragraph } = Typography;
  let result = null;

  function toogleShowAddPost() {
    setShowAddPost(!showAddPost);
  }

  if (selectedCategory["category"] === "default") {
    result = (
      <div className="col-lg-9">
        <div
          style={{
            ...glStyles.card,
            padding: "10px 50px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>
            <Paragraph>
              <p
                style={{
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                  width: "100%",
                  fontFamily: "Poppins",
                  textAlign: "center",
                }}
              >
                <img
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                  src= {LogoStk}
                  alt="Polytter"
                  width="500"
                  height="100"
                />
              </p>
              <br />
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "Libre Baskerville",
                }}
              >
                <Title level={6}>Stack Overflow 3.0</Title>
              </div>
            </Paragraph>
            <Paragraph style={{textAlign: "center"}}>
              <p
                style={{
                  paddingBottom: "3rem",
                }}
              />
              <p style={{fontSize: "1.1rem"}}>Post your questions !!</p>
            </Paragraph>
            <Paragraph style={{textAlign: "center"}}>
            <p style={{fontSize: "1.1rem"}}>Reputation system works on the basis of upvotes and downvotes.</p>
            </Paragraph>
            <Paragraph style={{textAlign: "center"}}> 
            <p style={{fontSize: "1.1rem"}}>Currently works on Polygon Testnet.</p>
            </Paragraph>

            <div style={{textAlign: "center"}}>
            <Title level={5}>
                <p/>
                <p
                style={{fontSize: "1.5rem", paddingTop: "3rem"}}
                >Choose the categories and start exploring!</p>
              </Title>
            </div>
            <p
                style={{
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                  width: "100%",
                  fontFamily: "Poppins",
                  textAlign: "center",
                  backgroundColor: "#000000",
                }}
              >
                <img
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                  src= {LogoOpenSorcerer}
                  alt="OpenSorcerer"
                  width="300"
                  height="400"
                />
              </p>
              <h4 style={{ fontFamily: "Libre Baskerville", verticalAlign: "middle", }}>
                  Open Sorcerer
              </h4>
          </Typography>
        </div>
      </div>
    );
  } else {
    result = (
      <div className="col-lg-9">
        <div
          style={{
            ...glStyles.card,
            padding: "10px 13px",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0px 0px 10px #FFA500",
          }}
        >
          <h4 style={{ fontFamily: "Libre Baskerville" }}>
            {" "}
            Your Reputation in {selectedCategory["category"]} is <Reputation />{" "}
          </h4>
          <Button type="primary" onClick={toogleShowAddPost} style={{ color: "#ffffff", boxShadow: "0px 0px 5px #00FFFF"}}>
            Post
          </Button>
        </div>
        {showAddPost ? <AddPost /> : ""}
        <Posts />
      </div>
    );
  }

  return result;
};

export default Feed;

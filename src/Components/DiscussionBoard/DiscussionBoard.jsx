import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import CreatePosts from "./CreatePost";
import Posts from "./Posts";

const DiscussionBoard = () => {
  const [posts, setPosts] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState("posts");

  const handleCreatePost = (post) => {
    const postId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;

    post.id = postId;

    setPosts([...posts, post]);

    setActiveTab("posts");
  };

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Tabs
        activeKey={activeTab}
        onSelect={handleSelectTab}
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="posts" title="User Posts">
          <Posts posts={posts} />
        </Tab>

        <Tab eventKey="write" title="Write Posts">
          <CreatePosts handleCreatePost={handleCreatePost} />
        </Tab>
      </Tabs>
    </>
  );
};

export default DiscussionBoard;

import { useState } from "react";
import "DiscussionPage.css";

function DiscussionPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "How to Learn Cricket?",
      content: "Can anyone suggest a roadmap for beginners?"
    }
  ]);

  const addDiscussion = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="container">

      <header className="header">
        <h1>Community Discussion Forum</h1>
        <p>Share Ideas and Connect with Others</p>
      </header>

      <div className="card">
        <h2>Create Discussion</h2>

        <input
          type="text"
          placeholder="Discussion Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="5"
          placeholder="Share your thoughts here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button onClick={addDiscussion}>
          Post Discussion
        </button>
      </div>

      <h2 className="recent">Recent Discussions</h2>

      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>

          <button className="replyBtn">
            Reply
          </button>
        </div>
      ))}

    </div>
  );
}

export default DiscussionPage;
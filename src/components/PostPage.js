import React, { useState } from "react";
import "./PostPage.css";

function PostsPage() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => setShowPopup(!showPopup);

    return (
        <div className="posts-container">
            {/* Header Section */}
            <div className="posts-header">
                <h1>Posts</h1>
                <div className="header-buttons">
                    <div className="button-container">
                        <button className="new-post-btn" onClick={togglePopup}>
                            New post <span>▼</span>
                        </button>
                        {showPopup && (
                            <div className="popup-content">
                                <ul className="popup-options">
                                    <li>
                                        <span role="img" aria-label="text-post">
                                            📝
                                        </span>{" "}
                                        Text post
                                    </li>
                                    <li>
                                        <span role="img" aria-label="video-post">
                                            🎥
                                        </span>{" "}
                                        Video post
                                    </li>
                                    <li>
                                        <span role="img" aria-label="audio-post">
                                            🎧
                                        </span>{" "}
                                        Audio post
                                    </li>
                                    <hr />
                                    <li>
                                        <span role="img" aria-label="new-note">
                                            📄
                                        </span>{" "}
                                        New note
                                    </li>
                                    <li>
                                        <span role="img" aria-label="new-chat">
                                            💬
                                        </span>{" "}
                                        New chat thread
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="posts-content">
                <p>You don't have any posts yet!</p>
                <div className="posts-buttons">
                    <button onClick={togglePopup}>New Post</button>
                    <button>Import Posts</button>
                </div>
            </div>
        </div>
    );
}

export default PostsPage;

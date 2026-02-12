import {
  FaHeading,
  FaUse,
  FaLink,
  FaCloudUploadAlt,
  FaTimes,
  FaRegPaperPlane,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import "CreatePost.css";

import React from "react";

const CreatePost = () => {
  return (
    <div className="Create-post-page">
      <Navbar />
      <div className="create-post-container">
        <header className="from-header">
          <h1>create new post</h1>
          <p>share your thoughts andstories with the world</p>
        </header>
        <div className="post-from-card">
          <form>
            <div className="from-group">
              <label>Post Title</label>
              <div className="input-wrapper">
                <FaHeading className="input-icon" />
                <input
                  type="text"
                  name="title"
                  className="from-control;"
                  placeholder="Enter a Catch title"
                />
              </div>
            </div>

            <div className="from-group">
              <label>Author Name</label>
              <div className="input-wrapper">
                <FaHeading className="input-icon" />
                <input
                  type="text"
                  name="author"
                  className="from-control"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="from-group">
              <label>Description</label>
              <textarea
                name="description"
                className="from-control"
                placeholder="Whats on your mind ? Write your story here"
              ></textarea>
            </div>
            <div className="from-group">
              <label>Cover Image</label>
              <div className="image-source-tabs">
                <button type="button" className="tab-btn active">
                  Image Url
                </button>
                <button type="button" className="tab-btn">
                  Upload File
                </button>
              </div>
              <div className="input-wrapper">
                <FaLink className="input-icon" />
                <input
                  type="url"
                  name="imageUrl"
                  placeholder="PAst Image URL here(e.g. https://....)"
                />
              </div>
              <div className="image-upload-area">
                <FaCloudUploadAlt className="upload-icon" />
                <p>click to upload image from your device</p>
              </div>
              <div className="image-preview-container">
                <img src="" alt="" className="image-preview" />
                <button type="button" className="remove-image-btn">
                  <FaTimes />
                </button>
              </div>
            </div>
            
            <div className="from-actions-row">
              <button type="button" className="remove-image-btn">
                <FaRegPaperPlane /> Publish Post
              </button>

              <button type="button" className="cancel-btn">
                Clear Form
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const ADD_BLOG = gql`
  mutation MyMutation($title: String!, $description: String!) {
    insert_blog_one(object: { title: $title, description: $description }) {
      id
      title
      description
    }
  }
`;

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [MyMutation, {loading, error}] = useMutation(ADD_BLOG, {
    refetchQueries: [{ query: ADD_BLOG }],
    update: (cache, { data: { insert_blog_one } }) => {
      const { blog } = cache.readQuery({ query: ADD_BLOG });
      cache.writeQuery({
        query: ADD_BLOG,
        data: { blog: blog.concat([insert_blog_one]) },
      });
    },
    onCompleted: () => {
      console.log("Blog added successfully");
      alert("Blog added successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error :(</p>

  const handleSubmit = (title, description) => {
    const result = { title, description }
    console.log(result);

    
    MyMutation({
      variables: { 
        title: title,
        description: description
      },
    })

    setTitle("");
    setDescription("");
  };

  return (
    <>
      <div className="bg-base-200 px-10 py-4 mt-10 rounded-lg">
        <h1 className="text-xl font-bold text-center">Add Blog</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            rows="3"
            placeholder="Description"
            className="textarea h-24 textarea-bordered"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="category 1">Category 1</option>
            <option value="category 2">Category 2</option>
            <option value="category 3">Category 3</option>
          </select>
        </div> */}
        <div className="flex justify-center items-center">
          <button className="btn btn-primary mt-4" onClick={() => {
            handleSubmit(title, description)
          }}>
            Add Blog
          </button>
        </div>
      </div>
    </>
  );
};

export default AddBlog;

import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import AddBlog from "./AddBlog";
import { FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";


const GET_BLOGS = gql`
  query GetBlogs {
    blog {
      id
      category_name
      category_description
    }
  }
`;

const Blog = () => {
  const { loading, error, data } = useQuery(GET_BLOGS);
  console.log(data);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  return (
    <>
      <div className="bg-base-200 p-10">
        <div className="flex justify-end pr-12">
          <label htmlFor="my-modal-3" className="btn btn-primary">Add Blog</label>

          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-primary btn-sm btn-circle absolute right-5 top-5"
              >
                ✕
              </label>
              <AddBlog/>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-center">Help Topics</h1>
      </div>
      <div className="bg-base-200 flex justify-center items-center pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.blog.map((blog) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={blog.id}>
              <div className="card-body">
                <div className="flex justify-start items-center bg-base-200 w-fit p-5 rounded-full">
                 <FaBlog className="h-8 w-8" />
                </div>
                <h2 className="card-title">
                  <Link to={`/blog/${blog.id}`}>
                  {blog.category_name}
                  </Link>
                </h2>
                <p>{blog.category_description}</p>  
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;

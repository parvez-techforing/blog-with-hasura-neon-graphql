import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_BLOGS = gql`
  query GetBlogs {
    blog {
      id
      title
      description
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
          <button className="btn btn-primary">Add Blog</button>
        </div>
        <h1 className="text-4xl font-bold text-center">Blogs</h1>
      </div>
      <div className="bg-base-200 flex justify-center items-center pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.blog.map((blog) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={blog.id}>
              <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p>{blog.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;

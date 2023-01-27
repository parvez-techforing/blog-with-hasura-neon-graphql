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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="p-10 bg-base-200 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.blog.map((blog) => (
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body" key={blog.id}>
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
  );
};

export default Blog;

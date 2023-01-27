import React from 'react';
import {  useQuery } from '@apollo/client';
import gql from 'graphql-tag';


const GET_BLOGS = gql`
  query GetBlogs {
    blog {
      id
      title
      description
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
        <h1>
          Blogs
        </h1>
        {data.blog.map((blog) => (
          <div key={blog.id}>
            <p>
              {blog.title}
            </p>
            <p>
              {blog.description}
            </p>
          </div>
        ))}      
    </>
  );
};

export default Home;
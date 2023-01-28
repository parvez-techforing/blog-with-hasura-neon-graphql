import React from "react";
import Search from "./../Search/Search";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_BLOG = gql`
    query GetBlog($id: Int!) {
        blog_by_pk(id: $id) {
            id
            title
            description
            category_name
            category_description
        }
    }
`;

const GET_CATEGORY_NAME = gql`
    query GetCategoryName {
        blog {
            id
            category_name
        }
    }
`;

const GET_CATEGORY_BASED_BLOGS = gql`
    query GetCategoryBasedBlogs($category_name: String!) {
        blog(where: { category_name: { _eq: $category_name } }) {
            id
            title
        }
    }
`;


const SingleBlog = () => {
    const [categoryName, setCategoryName] = React.useState("");
    const blogId = window.location.pathname.split("/")[2];
    const { loading, error, data } = useQuery(GET_BLOG, {
        variables: { id: parseInt(blogId) },
    });
    // console.log(data);

    //category based blogs
    const { loading: loading2, error: error2, data: data2 } = useQuery(
        GET_CATEGORY_BASED_BLOGS,
        {
            variables: { category_name: categoryName },
        }
    );
    console.log(data2);

    //category name
    const { loading: loading3, error: error3, data: data3 } = useQuery(GET_CATEGORY_NAME);
    // console.log(data3);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    if (loading2) return <p>Loading...</p>;
    if (error2) return <p>Error :(</p>;

    if (loading3) return <p>Loading...</p>;
    if (error3) return <p>Error :(</p>;

  return (
    <>
      <Search />
      <div className="drawer drawer-mobile lg:px-20 bg-base-200">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-6">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">{data.blog_by_pk.category_name}</Link>
              </li>
              <li>{data.blog_by_pk.title}</li>
            </ul>
          </div>
            <div className="flex justify-between items-center">
                <div className="mt-10">
                    <h1 className="text-2xl font-bold">{data.blog_by_pk.title}</h1>
                    <p className="text-base-content text-opacity-50 mt-3">{data.blog_by_pk.description}</p>
                </div>
            </div>
        </div>
        <div className="drawer-side bg-white">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {
                data3.blog.map((item) => (
                    <li className="flex justify-center items-center" key={item.id}>
                        <h2 className="text-lg font-bold"
                            onClick={() => {
                                setCategoryName(item.category_name)
                            }}
                        >{item.category_name}</h2>
                    </li>
                ))
            }
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

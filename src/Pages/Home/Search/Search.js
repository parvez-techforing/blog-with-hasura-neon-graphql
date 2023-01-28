import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_SEARCH = gql`
  query GetSearch($search: String!) {
    blog(
      where: {
        title: { _ilike: $search }
        _or: { category_name: { _ilike: $search } }
      }
    ) {
      id
      title
      category_name
    }
  }
`;

const Search = () => {
  const [search, setSearch] = React.useState("");
  const { loading, error, data } = useQuery(GET_SEARCH, {
    variables: { search: `%${search}%` },
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleSearch = (search) => {
    console.log(search);
  };

  return (
    <>
      <div className="bg-primary text-white px-24 h-72 flex items-center">
        <div>
          <h1 className="text-2xl font-semibold">How can we help you?</h1>
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-black px-4 py-2 w-96 mt-2 outline-0"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="btn bg-white border-0 ml-5 hover:btn-primary"
            onClick={() => handleSearch(search)}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;

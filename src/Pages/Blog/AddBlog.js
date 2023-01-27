import React from 'react';

const AddBlog = () => {
  return (
    <>
      <div className="bg-base-200 px-10 py-4 mt-10 rounded-lg">
        <h1 className='text-xl font-bold text-center'>Add Blog</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" placeholder="Title" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            rows="3"
            placeholder="Description"
            className="textarea h-24 textarea-bordered"
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select className="select select-bordered w-full">
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
          </select>
        </div>
        <div className='flex justify-center items-center'>
         <button className="btn btn-primary mt-4">Add Blog</button>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
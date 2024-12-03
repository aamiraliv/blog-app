import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./api/push";

const DisplayBlog = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getData = async () => {
      try {
        const responds = await api.get(`/blogs/${id}`);
        console.log(responds);
        
        setBlog(responds.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  console.log(blog);

  return (
    <div className="bg-background min-h-[85vh] mt-[12vh] p-5  xl:mt-[15vh]">
      <div className="flex flex-col gap-5 p-5 rounded-md bg-card ">
        <div className="w-full">
          <h1 className="text-text font-bold text-2xl px-5 py-2 bg-lightCard rounded-lg w-full text-center ">
            {blog?.title}
          </h1>
        </div>
        <div className="w-full min-h-[150px] rounded-lg bg-lightCard px-5 py-2">
          <p className="text-text text-center">{blog?.content}</p>
        </div>
        <div className=" flex justify-between px-2">
          <p className="author-details">{blog?.name}</p>

          <p className="author-details">{blog?.email}</p>
          <p className="author-details">{blog?.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayBlog;

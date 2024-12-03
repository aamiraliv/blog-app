import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "./api/push";

const Blogs = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const responds = await api.get("/blogs");
      setBlog(responds.data);
    };
    getData();
  }, []);

  return (
    <div className="p-5 w-full bg-background min-h-[85vh] mt-[12vh] xl:mt-[15vh]">
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 ">
        {blog.map((item) => {
          return (
            <Link to={`/display/${item.id}`} key={item.id}>
              <div className="bg-card rounded-lg p-5 min-h-[150px] flex flex-col justify-between">
                <h2 className="text-2xl text-text font-bold mb-4">
                  {item.title}
                </h2>
                <p className="text-text">author : {item.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;

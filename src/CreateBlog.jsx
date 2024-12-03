import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateBlog.css";
import api from "./api/push";

const CreateBlog = () => {
  const navigate = useNavigate()
  const [blogs,setBlogs] = useState([])
  const [issubmit, setIssubmit] = useState(false)
  const [data, setData] = useState({
    id: "",
    title: "",
    name: "",
    content: "",
    email: "",
    phone: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/blogs", data);
      console.log(response.data);
      alert("YOUR BLOG HAS BEEN CREATED");
      setIssubmit(!issubmit);
      navigate("/blogs")
      } catch (error) {
        console.error(error);
      }
  }

  useEffect(()=>{
    const getBlog = async () => {
    const responds =await api.get('/blogs')
    setBlogs(responds.data)
  }
  getBlog();
  },[issubmit])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({...data, [name]: value, id:String( blogs.length + 1) });
  };

  console.log(data);

  return (
    <div className="bg-background min-h-[85vh] w-full p-5 mt-[12vh] xl:mt-[15vh] ">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 ">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Your Name"
            value={data.name}
            name="name"
            onChange={handleChange}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Enter Your Email"
            value={data.email}
            name="email"
            onChange={handleChange}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Enter Your Phone Number"
            value={data.phone}
            name="phone"
            onChange={handleChange}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Blog Title.."
            value={data.title}
            name="title"
            onChange={handleChange}
          />
          <textarea
            className="input-field w-full min-h-[300px] xl:col-[1/3]"
            name="content"
            id="content"
            placeholder="Enter Your Blog Content.."
            value={data.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="text-center w-full p-5 rounded-lg bg-card font-bold my-5 text-text hover:bg-lightCard transition-[1s] ease-in-out">
          Post Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;

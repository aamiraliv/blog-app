import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-background h-screen p-5 mt-[100px]">
      <div className="flex flex-col gap-5 mt-5 xl:flex-row">
        <div className="flex justify-center items-center w-full bg-card h-[70vh] rounded-md p-6 xl:w-1/2">
          <p className="text-text font-semibold text-2xl">
            &quot;Explore a world of engaging articles, insightful thoughts, and
            trending stories from various niches. Whether you&apos;re here for
            tech updates, lifestyle tips, or creative ideas, we&apos;ve got
            something for everyone!&quot;
          </p>
        </div>
        <div className="flex justify-center items-center xl:w-1/2">
          <Link to={'/create'}><button className="text-text font-semibold rounded-3xl px-5 py-3 hover:bg-card bg-lightCard">create blog</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

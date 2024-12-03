import { Link } from 'react-router-dom';
import './Home.css';

const Nav = () => {
  return (
    <div className='bg-background p-5 fixed w-full top-0'>
      <div className="px-4 flex items-center justify-between nav-bar rounded-md  bg-card">
        <h1 className="text-text font-BebasNeue capitalize tracking-widest font-bold text-sm xl:text-2xl ">
          Daily Blogs..
        </h1>
        <div className="flex flex-row gap-5 py-4">
          <Link to={'/'}><p className="nav-titles">Home</p></Link>
          <Link to={'/blogs'}><p className="nav-titles">blogs</p></Link>
          <Link to={'/create'}><p className="nav-titles">create blogs</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Nav

import * as React from 'react';
import { assetsIcon } from '../assets/icons'

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    return (
        <div className='container w-full bg-red-50 mx-auto flex flex-row p-2 mt-2 justify-between'>
            <h1 className='font-bold text-2xl'>Book Store</h1>
            <ul className='flex items-center gap-5'>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Course</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
            <div className=' relative flex items-center justify-center'>
                <input
                    type="text"
                    placeholder='Search'
                    className='bg-gray-200 text-gray-800 w-full py-1 pl-10 pr-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <img
                    src={assetsIcon.magnifyingGlass}
                    alt="magnifying glass"
                    className='w-5 h-5 absolute left-2' // Position icon inside input field
                />
            </div>
            <button className = ' py-1 px-3 rounded bg-black text-white'>
                Login
            </button>
        </div>
    );
};

export default Navbar;

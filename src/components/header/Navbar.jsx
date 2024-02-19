import React from 'react'
import { UserAuth } from '../../context/AuthContext'
import { FaGithub } from "react-icons/fa";

function Navbar() {
    const { currentUser, logout } = UserAuth();

    async function handleLogout() {
        try {
            await logout();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-full fixed z-10'>
            <header className="navbar bg-base-100 flex justify-around">
                    <div className="navbar-start">
                        <p className="text-xl">Realtime Chat</p>
                    </div>
                    <div className='right-0'>
                        {currentUser ? <button className="btn bg-base-100" onClick={handleLogout}>Kilépés</button> : <a href='https://github.com/Tbence2002/realtimechat-app' target='_blank' rel="noreferrer" className='text-xl'><FaGithub /></a>}
                    </div>
            </header>
        </div>
    )
}

export default Navbar
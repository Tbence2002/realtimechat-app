import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/login.json'

function Login() {
    const { currentUser, signInWithGoogle } = UserAuth();
    const navigate = useNavigate();

    async function handleLogin() {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (currentUser) {
            navigate("/chat");
        }
    }, [currentUser, navigate])

    return (
            <div className="hero h-screen px-5 flex items-center justify-center bg-base-200">
                <div className="card card-compact w-100 p-1 sm:w-96 bg-base-100 shadow-xl">
                    <Lottie animationData={animationData} className='' />
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Szia!</h1>
                        <p className="py-2">A beszélgetés megkezdéséhez kérlek jelentkezz be a google fiókoddal.</p>
                        <div className="card-actions ">
                        <button onClick={handleLogin} className="btn">Google bejelentkezés</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
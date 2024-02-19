import React, { useState } from 'react'
import { UserAuth } from '../../context/AuthContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/Firebase';
import toast, { Toaster } from 'react-hot-toast';

function SendChat() {
    const [value, setValue] = useState("");
    const { currentUser } = UserAuth();

    async function handleSendMessage(e) {
        e.preventDefault();

        if (value.trim() === "") {
            toast.error("Kérem ügyeljen a helyes formátumra!")
            return;
        }

        try {
            const { uid, displayName, photoURL } = currentUser;
            await addDoc(collection(db, "messages"), {
                text: value,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
            })
        } catch (error) {
            console.log(error)
        }

        setValue("");
    }

    return (
        <div className='send-container'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="bg-base-200 fixed bottom-0 w-full py-5 sm:py-10 shadow-lg">
                <form onSubmit={handleSendMessage} className='containerStyle flex gap-2 justify-center items-center px-5 flex-col sm:flex-row'>
                    <textarea value={value} placeholder='Ide írja üzenetét.' onChange={(e) => setValue(e.target.value)} className='pt-2 input w-full h-20 resize-none focus:outline-none bg-gray-100 text-black' />
                    <button type='submit' className='btn w-auto bg-base-100 text-white px-5 text-sm'>Üzenet elküldése</button>
                </form>
            </div>
        </div>
    )
}

export default SendChat
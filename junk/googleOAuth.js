import React, { useState } from 'react';
import './googleOAuth.css';
import { useEffect } from 'react';

function Google() {
    const [status, setStatus] = useState(null)
    const [auth, setAuth] = useState(null)
    useEffect(() => {
        window.gapi.load("client:auth2", async () => {
            await window.gapi.client.init({ clientId: '890015266885-qp1ghupjc2ovi9a1o0kfqetli7at2m94.apps.googleusercontent.com', scope: 'email' })
            let Oauth = await window.gapi.auth2.getAuthInstance()
            setAuth(await window.gapi.auth2.getAuthInstance())
            setStatus(Oauth.isSignedIn.get())
            console.log(status)
        })
    })


    return (
        <div className="googleWrapper" onClick={() => auth.signIn()}>
        </div>
    )
}

export default Google
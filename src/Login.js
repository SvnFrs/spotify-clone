import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className='login'>
        {/* Spotify logo */}
            {/* <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' alt='yolo'></img> */}
            <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png' alt='yolo'></img>
        {/* Login button */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
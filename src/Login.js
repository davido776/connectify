import React, { useState } from 'react';
import './Login.css';
import {auth} from './firebase';
import linkedinimage from './images/Linkedin-image.png';
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice';

function Login(props) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [profilepic, setProfilepic] = useState("")
    const dispatch = useDispatch();
    
    //register
    const register = () =>{
        if(!name){
            return alert("please enter a name")
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photoUrl:profilepic,
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl:profilepic
                }))
                
            })
        })
        .catch(error=>alert(error))
    }
    const loginToApp = (e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch((login({
                email : userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profilepic: userAuth.user.photoUrl

            })))
        })
        .catch(error=>alert(error))
    }
    return (
        <div className = "login">
            <img
            src={linkedinimage}
            alt=""/>

            <form>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="full name" type="text"/>
                <input value={profilepic} onChange={e=>setProfilepic(e.target.value)} placeholder='Profile picture' type="text"/>
                <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email"/>
                <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password"/>
                <button type='submit' onClick={loginToApp}>Sign in</button>
                
            </form>
            <p>Not a member?{" "}<span className="login__register" onClick={register}>Register Now</span></p>

        </div>
    );
}

export default Login;
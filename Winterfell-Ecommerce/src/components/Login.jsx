import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import '../css/Login.css'
import api from './AxiosInstance';
export default function () {
    const url="http://localhost:8080/api/auth/login";
    const navigate=useNavigate();
    const [form,setForm]=useState({
        mail : "",
        password : ""

    });

    function handleChange(e){

        console.log(e.target.name);
        setForm({...form,[e.target.name]: e.target.value})

    }
    function handleSubmit(e){
            e.preventDefault();
        
        api.post(`/auth/login`,form).then(response=>{

            localStorage.setItem("token",response.data)
            alert("Login successfuly")
            setForm({
            mail : '',
            password : ''
            });
           navigate("/", { replace: true });
        }).catch(error => {
            console.log("Login Error:", error);
            alert("Login failed!");
        });
        
    }

  return (
    <div>
        <div className='login-container'>
            <div className='winterfell-login'>
                <p>Good Styles.</p>
                <p>Better Days.</p>
            </div>
            <div className='form-container' >
                <form className='form-login' onSubmit={handleSubmit} >
                    <h3>WinterFell</h3>
                    <h1>Wellcome Back</h1>
                    <label>Email</label>
                    <input type="email" className='input' placeholder='Enter your mail' name="mail" onChange={(e)=>handleChange(e)} value={form.mail} required />
                    <label>Password</label>
                    <input type="password" className='input' placeholder='Enter password' name='password' onChange={(e)=>handleChange(e)} value={form.password} required />

                    <button type='submit' className='button'> submit</button>

                </form>
            </div>
        </div>
    </div>
  )
}

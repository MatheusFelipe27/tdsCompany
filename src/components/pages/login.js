import React, { useState } from 'react'
import './login.css'
import image2 from './image2.png'
import { Link } from 'react-router-dom'
import logo from './logo.png'

import { MdEmail, MdLock } from "react-icons/md"
import { HiEye, HiEyeOff, HiLogout } from "react-icons/hi"
import reactRouterDom from 'react-router-dom'

function Login() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [show, setShow] = useState(false)

   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }

   return (
      <div className="login">
          <div className="login-inicio">
            <img
               src={logo}
               alt="MdLockLogin App"
            />
         </div>
         <div className="login-logo">
            <img
               src={image2}
               alt="MdLockLogin App"
            />
         </div>

         <div className="login-right">
            <h1>Login</h1>

            <div className="login-loginInputEmail">
               <MdEmail />
               <input
                  type="email"
                  placeholder="Digite um email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
            </div>

            <div className="login-loginInputPassword">
               <MdLock />
               <input
                  placeholder="Digite sua senha"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               <div className="login-eye">
                  {show ? (
                     <HiEye
                        size={20}
                        onClick={handleClick}
                     />
                  ) : (
                        <HiEyeOff
                           size={20}
                           onClick={handleClick}
                        />
                     )}
               </div>
            </div>

            <button className="teste" type="submit">
               Entrar
            </button>

            <div className="agatres">
               <h3>Não tenho conta!</h3>
            </div>
            <Link to= "/cadastro"><button className="tester" type="submit">Cadastrar </button></Link>  
         </div>
      </div>
   )
}

export default Login
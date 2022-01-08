import React, { useState } from 'react'
import './cadastro.css'
import image2 from './image2.png'
import logo from './logo.png'

import { MdEmail, MdLock, MdAccountCircle } from "react-icons/md"
import { HiEye, HiEyeOff, HiLogout } from "react-icons/hi"
import { Link } from 'react-router-dom'

function Login() {
   const [nome, setNome] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [repeatingPassword, setRepeating] = useState("")

   const [show, setShow] = useState(false)

   const [showing, setShowing] = useState(false)

   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }

   const showClick = (e) => {
    e.preventDefault()
    setShowing(!showing);
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
            <h1>Cadastro</h1>

            <div className="login-loginInputEmail">
               <MdAccountCircle />
               <input
                  type="text"
                  placeholder="Digite um Nome"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
               />
            </div>

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


            <div className="login-loginInputPassword">
               <MdLock />
               <input
                  placeholder="Confirme sua senha"
                  type={showing ? "text" : "password"}
                  value={repeatingPassword}
                  onChange={e => setRepeating(e.target.value)}
               />
               <div className="login-eye">
                  {showing ? (
                     <HiEye
                        size={20}
                        onClick={showClick}
                     />
                  ) : (
                        <HiEyeOff
                           size={20}
                           onClick={showClick}
                        />
                     )}
               </div>
            </div>

            <button type="submit">
               Cadastrar
            </button>

            <div className="agatres">
               <h3>Já possuo conta!</h3>
            </div>  
            <Link to= "/login">
                <button type="submit">
                Login
                </button>
            </Link>    
         </div>
      </div>
   )
}

export default Login
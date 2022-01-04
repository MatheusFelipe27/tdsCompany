import React from 'react';
import logo from './logo.png'
import './home.css'
import telastratee from './telastratee.png'
import juntos from './juntos.png'



function Home(){
        return( 
            <div>
                <nav>
                    <label className="logo"><img src={logo} alt="Click" height="110px" width="150px"/></label>
                    <ul className="ul">
                        <li><a href="#QuemSomos"> Quem somos</a></li>
                        <li> <a href="#Strateegiadigital">Strateegia.digital</a></li>
                        <li><a href="#"> Youtube Tutorials</a></li>
                        <li><a href="#"> <button className="cadbut">Cadastre-se</button> </a> </li>
                        <li><a href="#"> <button className="logbut">Login</button> </a> </li>
                    </ul>
                </nav>
                <label className="images" ><img src={juntos} alt="juntos" height="600px" width="450px"/></label>
                <div className='div1'>
                    <a name="QuemSomos"></a>
                    <h1>Assista. Aprenda. Compartilhe.</h1>
                    <h1>Embarcar em jornadas <span>Click</span> !</h1>
                </div>
                <div className="div2"> 
                    <p>O que é preciso para aprender algo na atualidade? Na Click são necessárias quatro coisas: um bom vídeo tutorial, uma pessoa instigada a aprender, compartilhamento de saberes e uma plataforma que una tudo isso! </p> 
                    <p>Embarque em jornadas de aprendizado que integram os bons vídeos tutoriais do YouTube com os debates estruturados e colaborativos do Strateegia.digital. </p>
                </div>
                <div className="div3">
                    <a href="https://google.com.br"><button className="jorneybutton">Comece sua jornada!</button></a>
                </div>

                <label className="images2" ><img src={telastratee} alt="tela" height="600px" width="450px"/></label>
                <div className="div1">
                    <a name="Strateegiadigital"></a>
                    <h1>Strateegia.digital</h1>
                </div>
                <div className="div2">
                    <p>Uma plataforma que explora jornadas para criar alternativas e fazer escolhas desenvolver através de debates estruturados e colaborativos distribuídos no tempo e espaço de cada pessoa.</p>
                    <p> É possível personalizar as jornadas, escolher jornadas pré-prontas e entrar em jornadas públicas que compartilham os melhores vídeos tutoriais, dicas e outros debates produtivos!</p>
                </div>
                <div className="div4">
                    <a href="https://app.strateegia.digital/"> <button className="stratbutton"> Acesse o strateegia.digital</button></a>
                </div>
            </div>
        );
}

export default Home;
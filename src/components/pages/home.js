import React from 'react';
import logo from './logo.png'
import './home.css'
import telastratee from './telastratee.png'
import juntos from './juntos.png'
import Navbar from '../layouts/navbar';
import ytb from './ytb.png'
import Footer from '../layouts/footer'
import {Link} from 'react-router-dom'


function Home(){
        return( 
            <div>
                <Navbar/>
                <div className="allcontent"> 
                    <label className="images juntos" ><img src={juntos} alt="juntos" height="450px" width="450px"/></label>
                    <div className='div1'>
                        <a name="QuemSomos"></a>
                        <h1>Assista. Aprenda. Compartilhe.</h1>
                        <h1>Embarcar em jornadas <span>Click</span> !</h1>
                    </div>
                    <div className="div2"> 
                        <p>O que é preciso para aprender algo na atualidade? Na Click são necessárias quatro coisas: um bom vídeo tutorial,
                             uma pessoa instigada a aprender, compartilhamento de saberes e uma plataforma que una tudo isso! </p> 
                        <p>Embarque em jornadas de aprendizado que integram os bons vídeos tutoriais do YouTube com os debates
                             estruturados e colaborativos do Strateegia.digital. </p>
                    </div>
                    <div className="div3">
                        <Link to="/cadastro"> <button className="jorneybutton">Comece sua jornada!</button></Link>
                    </div>

                    <label className="images2" ><img src={telastratee} alt="tela" height="450px" width="450px"/></label>
                    <div className="div1">
                        <a name="Strateegiadigital"></a>
                        <h1>strateegia.digital</h1>
                    </div>
                    <div className="div2">
                        <p>Uma plataforma que explora jornadas para criar alternativas e fazer escolhas desenvolver através de debates estruturados e colaborativos distribuídos no tempo e espaço de cada pessoa.</p>
                        <p> É possível personalizar as jornadas, escolher jornadas pré-prontas e entrar em jornadas públicas que compartilham os melhores vídeos tutoriais, dicas e outros debates produtivos!</p>
                    </div>
                    <div className="div4">
                        <a href="https://app.strateegia.digital/"> <button className="stratbutton"> Acesse o strateegia.digital</button></a>
                    </div>
                    <label className="images3" ><img src={ytb} alt="ytb" height="520px" width="520px"/></label>
                    <div className="h1right">
                        <a name="Youtube"></a>
                        <h1>Youtube Tutorials</h1>
                    </div>
                    <div className="divright">
                        <p>A modalidade de tutoriais do YouTube é uma tendência mundial. Com várias temáticas, esses tutoriais geralmente se dividem em playlists e com eles,
                            diversos usuários tem melhorado o seu aprendizado!</p> <p> Se você é uma pessoa que gosta de aprender com vídeos online, então o Click é perfeito para desenvolver esses saberes! </p>
                    </div>
                    <Footer/>

                </div>    
            </div>
        );
}

export default Home;
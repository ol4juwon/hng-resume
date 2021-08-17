import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import guts from '../../assets/img/guts.png';
import reactLogo from '../../assets/img/react.png'
import javaLogo from '../../assets/img/java.jpeg'
import phpLogo from '../../assets/img/PHP.jpg'
import htmlLogo from '../../assets/img/html.png'
import cssLogo from '../../assets/img/css.png'
import hngLogo from '../../assets/img/hng.png'
import zuriLogo from '../../assets/img/zuri.png'
import i4gLogo from '../../assets/img/i4g.png'
import Flipcard from '../Flipcard'
const Home = () => {
    const juwon =( <div ><h3>Name:</h3><p>Olajuwon Lawal</p></div>);
    const reactTxt = (<div>
   <h3> Language:</h3>
   <p>Reactjs</p>
    </div>
    )
    const javaTxt = (<div>
    <h3>Language:</h3>
    <p>Java</p>
    <h3> Frameworks:</h3>
    <p>Springboot</p>
    </div>)
    const phpTxt = (<div>
        <h3>Language:</h3>
        <p>PHP</p>
        <h3>Frameworks:</h3>
        <p>Laravel</p>
    </div>)
    const htmlTxt = (<div>
        <h3>Language:</h3>
        <p>HTML5</p>
    </div>);
    const cssTxt = (<div>
        <h3>Language:</h3>
        <p>CSS3</p>
        <h3>Frameworks</h3>
        <p>
            <ul>
                <li>SCSS</li>
                <li>Bootstrap</li>
            </ul>
        </p>
    </div>)
    return (
        
        <Home.Wrapper>
            <Header />
            <div>
            <Flipcard aos="slide-up" duration="2000" img={guts} details={juwon} />
            </div>
            <hr />
            <h2> Stacks </h2>
            <hr/>
            <div>
                
                <Flipcard aos="slide-left" duration="1500" img={reactLogo} details={reactTxt} />
                
                <Flipcard aos="slide-right" duration="2000" img={javaLogo} details={javaTxt} />
                
            </div>
            <hr/>
            <div>
                <Flipcard aos="fade-up" duration="1600" img={phpLogo} details={phpTxt} />
            </div>
            <hr />
            <div>
                <Flipcard aos="fade-right" duration="2400" img={htmlLogo} details={htmlTxt} />
                <Flipcard aos="fade-left" duration="1500" img={cssLogo} details={cssTxt} />
            </div>
            <hr />
            <h2>Experience</h2>
            <hr />
            <ul className="experience">
                <li>
                    <h3>TM30 Global</h3>
                    <h4>Fullstack Intern</h4>
                    <p>Feb, 2012 till Date</p>
                </li>
            </ul>

            <hr />
            <div data-aos="zoom-out" data-aos-delay="1000"  data-aos-duration="5000" className="footer">
            <a href="zuri.team"><img src={hngLogo} alt="HNGi8" width="100px" height="100px"/></a>
            <a href="internship.zuri.team"><img src={zuriLogo} alt="Zuri" width="100px" height="100px" /></a>
            <a href="internship.zuri.team"><img src={i4gLogo} alt="Ingressive 4 good" width="250px" height="100px" /></a>
            </div>
        </Home.Wrapper>
    )
}

Home.Wrapper = styled.div`
width: 100%;
margin: 0 ;
padding:10px;
background: black;
color: white;
hr{
    margin:10px;
}
h2{
    text-align: center;
    font-family: 'Roboto', san-serif;
    font-size: 40px;
    color: white;
}

div{
    display: flex;
    flex-direction: column wrap;
}
.footer{
width: 50%;
margin: 0 auto;
a{
    margin:10px;
}
}
@media   screen and (max-width:420px){
    width:100%;
    div{
        width: 100%;
        display: flex;
    flex-direction: column  wrap;
    margin:10;
    div{
        display:flex;
        flex-direction: column;
    }
    }
    
    
}

.experience{
    li{
        color:white;
       h3{
           color: cyan;
       }
       p{
           color:white;
       }
}
}


`

export default Home

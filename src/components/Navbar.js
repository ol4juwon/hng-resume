import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Navbar = () => {
    return (
        <Navbar.Wrapper>
           <Link to="/" > <h1>OL4JUWON </h1></Link> 
           
        </Navbar.Wrapper>
    )
}

Navbar.Wrapper  = styled.div`
padding:2px;
margin:0 auto;
h1{
    text-align: center;
}
a{
    color: white;
    text-decoration: none;
    font-size:30px;

}
a:hover{
   font-size: 35px;
}
@media screen and (max-width: 400px;) {
a{
    font-size: 10px;
}
}

`

export default Navbar

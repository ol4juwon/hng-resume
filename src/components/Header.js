import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

const Header = () => {
    return (
        <Header.Wrapper data-aos="fade" data-aos-duration="2000">
           <Navbar /> 
        </Header.Wrapper>
    )
}
Header.Wrapper = styled.div`
width: 100%;
@media only screen and (max-width){
    width:100%;
}
`

export default Header

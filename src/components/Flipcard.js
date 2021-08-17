import React from 'react'
import styled from 'styled-components'
const Flipcard = (props) => {
    return (
        <Flipcard.Wrapper data-aos={props.aos} data-aos-duration={props.duration}>
                <div className="flipcard-inner">
                    <div className="flipcard-front">
                        <img src={props.img} alt={props.alt}/>

                         </div>{/*front div ends  */}
                         <div className="flipcard-back">
                             {props.details}
                             </div>{/* back div end */}
                    </div>
        </Flipcard.Wrapper>
    )
}

Flipcard.Wrapper = styled.div`
    height:400px;
    width: 300px;
    perspective:1000px;
    margin: 0 auto;
    img{
        height:400px;
        width:300px;
    }
    .flipcard-inner{
        position:relative;
        width:100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(255,255,255,0.5);
    }
    &:hover .flipcard-inner{
        transform: rotateY(180deg);
    }
    .flipcard-front{
        background-color:#000;
        color:white;
    }
    .flipcard-back{
        background-color: #000;
        color:white;
        padding:20px;
        transform: rotateY(180deg);
        display: flex;
        flex-direction: column wrap;
        div{
            width: 80%;
            display: flex;
            flex-direction: column nowrap;
            text-align: center;
            h3{
                width:100%;
                color:white;
            }
            p{
                width:100%;
                color:green;
                font-family: 'Roboto';
                font-weight:400;
                font-style: bold;
            }
        }
        
    }
    .flipcard-front, .flipcard-back{
        position: absolute;
        width: 100%;
        height:100%;
        --webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    @media screen and (max-width:420px){
        .flipcard-back{
            background-color: #000;
            color:white;
            padding-top:20px;
            transform: rotateY(180deg);
            display: flex;
            flex-direction: column wrap;
            div{
                width: 80%;
                display: flex;
                flex-direction: column nowrap;
                text-align: center;
                h3{
                    width:100%;
                    color:white;
                }
                p{
                    width:100%;
                    color:green;
                    font-family: 'Roboto';
                    font-weight:400;
                    font-style: bold;
                }
            }
            
        }
        .flipcard-front, .flipcard-back{
            position: absolute;
            width: 100%;
            height:100%;
            --webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }
img{
    width:100%;
}
div{
    width:100%;
}
.flipcard-inner{
    position:relative;
    width:100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(255,255,255,0.5);
}
    }
`
export default Flipcard
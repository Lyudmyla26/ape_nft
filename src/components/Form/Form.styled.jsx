import styled from 'styled-components';
import '../../font/BiroScript/stylesheet.css';
import '../../font/MessinaSans/stylesheet.css';
export const Forms = styled.div`
width: 216px;
margin: 0 auto;
@media only screen and (min-width: 768px) {
width: 581px;
  } 
.title{
font-size: 44px;
font-weight: 900;
line-height: 0,91;   
text-transform: uppercase;
text-align: center;
@media only screen and (min-width: 768px) {
   font-size: 60px;
   line-height: 1;  

  } 
  @media only screen and (min-width: 1280px) {
font-size: 120px;
  } 
}

.close{    
margin: 15px auto 10px;
display: block;
}
.description{
font-family: 'Messina Sans Mono', sans-serif; 
font-size: 16px;
font-weight: 400;
line-height: 1.18;   
text-transform: uppercase;
text-align: center;
@media only screen and (min-width: 1280px) {
font-size: 24px;
line-height: 1.2; 
  } 
}
.form-label{
display: flex;
border-radius: 8px  8px;
backdrop-filter: blur(12px);
background-color: ${props => props.theme.color.primary_text_black};
margin: 15px 0 0;
}

.form-label input{
background-color: ${(props) => props.theme.color.primary_black};
outline: none ;
border: none;
height: 46px;
border-radius: 0 8px 8px 0;
margin: auto;
color: inherit;
font-family: 'Messina Sans Mono', sans-serif; 
font-size: 12px;
font-weight: 400;
line-height: 1.17;   
text-transform: uppercase;
width: 100%; 
 @media only screen and (min-width: 1280px) {
  font-size: 16px;
line-height: 1.19;   
  }

&.valid-input:not(:placeholder-shown) {
      border: 2px solid ${(props) => props.theme.color.primary_white}; 
    }

&.invalid-input {
      border: 1px solid red; 
      color: ${(props) => props.theme.color.primary_red}; 
    }
}

.icon{
margin: 12px 8px;
}
form{
  @media only screen and (min-width: 768px) {
width: 248px;
display: block;
    margin: 15px auto;
  }
    @media only screen and (min-width: 1280px) {
width: 397px;

  }
  
}
.button-form{
backdrop-filter: blur(12px);
background: ${(props) => props.theme.color.primary_pink};
border-radius: 8px;
padding: 10px 0 12px ;
width: 100%;
border: none;
cursor: pointer;
font-size: 16px;
font-weight: 900;
line-height: 1.18;   
color: inherit;
margin: 15px 0 0;
transition-property: color;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 @media only screen and (min-width: 1280px) {
font-size: 28px;
line-height: 1.21;   
  }
}
.button-form:hover,
.button-form:focus {
color: ${(props) => props.theme.color.primary_black}
  }
.error{
display: block;
text-align: end;
font-family: 'Messina Sans Mono', sans-serif; 
font-size: 12px;
font-weight: 400;
line-height: 1.17;   
text-transform: uppercase;
color: red;
}


`
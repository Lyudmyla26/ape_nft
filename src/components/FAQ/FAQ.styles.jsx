import styled from 'styled-components';
import '../../font/BiroScript/stylesheet.css';
import '../../font/MessinaSans/stylesheet.css';
export const FAQs = styled.div`
.title{
font-size: 44px;
font-weight: 900;
line-height: 1;   
text-transform: uppercase;
text-align: center;
margin-top: 30px;
margin-bottom: 15px;
}
.list-questions{
width: 216px;
margin: 0 auto;
}
.questions-thumb{
display: flex;
gap: 15px;
margin-bottom: 10px;
transition-property: color;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
}
.questions{
font-size: 20px;
font-weight: 900;
line-height: 1;   
text-transform: uppercase;
transition-property: color;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
}
.questions:hover,
.questions:focus,
.questions:active .questions
{
color:${props => props.theme.color.primary_pink};
}
.questions-thumb:hover .questions-number,
.questions-thumb:focus .questions-number,
.questions-thumb:active .questions-number {
color: ${props => props.theme.color.primary_white};
}

.questions-number{
color:${props => props.theme.color.primary_pink};
font-family: 'Biro Script Plus', sans-serif; 
font-size: 12px;
font-weight: 400;
line-height: 1.66;   
}
.active{
color: ${props => props.theme.color.primary_pink};
}
.active-number{
color: ${props => props.theme.color.primary_white};
}
.activeli{
padding: 5px;
background-color: ${props => props.theme.color.primary_text_black};
border-radius: 12px;
margin-bottom: 10px;
}
.answer{
font-family: 'Messina Sans Mono', sans-serif; 
font-size: 12px;
font-weight: 400;
line-height: 1.16;   
text-transform: uppercase;
margin-left: 26px;
}
`
import styled from 'styled-components';

export const Container = styled.section`
list-style: none;
padding: 10px 20px;
color: #ffffff;
text-transform: capitalize;
font-weight: 600;
border: 2px solid #025f70;
border-radius: 5px;
margin-bottom: 10px;
background: #4EB9CD;
transition: all 0.75s ease;
display: flex;
flex-direction: row;
// justify-content: stretch;
// align-items: stretch;
margin: 2px 15px;
width: 320px;
    div{
        display: flex; 
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;  
            button{
            align-items: flex-end;
            }
    }  
`;
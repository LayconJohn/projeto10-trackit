import styled from "styled-components";


export default function Menu( {children, isDisplay} ) {

    return (
        <EspacoTitulo isDisplay={isDisplay}>
            {children}
        </EspacoTitulo>
    )
}

const EspacoTitulo = styled.div`
    width: 100%;
    display: ${props => props.isDisplay ? "flex" : "Inherit"};
    justify-content: space-between;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 100px;


    h2 {
        font-size: 23px;
        color: #126BA5;
        font-weight: 400;
        margin-left: 17px;
    }

    p {
        color: #BABABA;
        font-size: 18px;
    }

    div {
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        font-size: 27px;
        margin-right: 18px;
    }

    div:active {
        transform: translate3d(1px, 2px, 2px);
    }
`;
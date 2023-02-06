import React from "react";

const Home = (props) =>{
    return <div style={{textAlign : "center",
    }}>
        <div style={{fontSize :"30px"
    }}>
            <h1>내가 강아지라면 <br></br>어떤 강아지 일까??</h1>
        </div>
        <h2 style={{ }}>당신의 강아지 유형을 찾아보세요!</h2>
        <button style ={{color : "blue",
    width :"250px",
    height :"100px",
    borderRadius :"50px",
    fontSize :"30px"}} onClick={props.goToGame}>시작하기</button>
        
       
        <p>MADE BY BEOMSU</p>

    </div>
}

export default Home;
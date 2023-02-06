import React, { useState, useEffect } from 'react'
import { Title, Button } from '../styles/mystyle'
import { resultcontent } from '../utilities/resultcontents'

const Result = (props) => {

    const [ resultCharacter, setCharacter ] = useState({})

    useEffect(() => {
        const { e, s, t, j } = props.points
        let result = ""
        result += e > 0 ? "E" : "I"
        result += s > 0 ? "S" : "N"
        result += t > 0 ? "T" : "F"
        result += j > 0 ? "J" : "P"

        const finalResult = resultcontent.filter(content => {
            return content.type === result
        })
        setCharacter(finalResult[0])
    }, [])

    return <div>
        <Title>
            <img src={resultCharacter.imgSrc} />
            <h2>{resultCharacter.type}</h2>
            <p>{resultCharacter.description}</p>
        </Title>
        <Button onClick={props.goToHome}>다시 하기</Button>
    </div>
}

export default Result
import React from 'react'
import { Title, Button } from '../styles/mystyle'
import { questioncontent } from '../utilities/questioncontents'

const Question = (props) => {
    const { count, selectAnswer } = props
    return <div>
        <Title>
            <h3>{questioncontent[count].number}</h3>
            <h2>{questioncontent[count].question}</h2>
        </Title>
        <Button onClick={() => selectAnswer(1, questioncontent[count].type)}>
            {questioncontent[count].answer1}
        </Button>
        <br />
        <Button onClick={() => selectAnswer(2, questioncontent[count].type)}>
            {questioncontent[count].answer2}
        </Button>
    </div>
}

export default Question
import React from 'react'
import styled from 'styled-components'

import TimePassed from '../partial/TimePassed'

const TextArea = styled.div`
    color: black;
    flex: 1;
    align-self: center;
    padding: 0 1rem;
`   

const Row = styled.div`
    display: flex;
    margin-bottom: 2rem;
`

const UserImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-left: 1rem;
`

const PostImg = styled.img`
    height: 50px;
    width: 50px;
    object-fit: cover;
    margin-right: 1rem;
`

const UserName = styled.div`
    font-weight: 700;
    display: inline;
`

const UserComment = styled.span`
    margin-left: .5rem;
`

const ActivityComment = ({userName, userImg, userComment, postImg, postId, activityDate}) => {
    return (
        <Row>
            <UserImg src={userImg} alt='userName'/>
            <TextArea>
                <UserName>{userName}</UserName>
                <UserComment>{`commented: ${userComment}`}</UserComment>
                <TimePassed createdAt={activityDate}/>
            </TextArea>
            <PostImg src={postImg} alt='post'/>
        </Row>
    )
}

export default ActivityComment
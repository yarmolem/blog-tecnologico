import React from 'react'
import HeaderCard from '../../components/Card/HeaderCard'

const PostComment = (props) => {
  return (
    <div>
      <HeaderCard text={props.text} boton={false} />
    </div>
  )
}

export default PostComment

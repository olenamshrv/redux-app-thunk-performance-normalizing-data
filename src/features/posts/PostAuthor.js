import React from 'react'
import { useSelector } from 'react-redux'

import { selectUserById } from '../users/usersSlice'

export const PostAuthor = ({ userId }) => {
  // const author = useSelector((state) => state.users).find(
  //   // (user) => Number(user.id) === Number(userId),
  //   (user) => user.id === userId,
  // )

  const author = useSelector((state) => selectUserById(state, userId))

  return <span>by {author ? author.name : 'Unknown author'}</span>
}

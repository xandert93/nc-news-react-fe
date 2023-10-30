import { useMutation } from '@tanstack/react-query'
import { articleCommentApi } from '../api'
import { Button } from '@mui/material'
import { useState } from 'react'

export const ArticleCommentRating = ({ id, vote_count: initialVoteCount }) => {
  const [voteCount, setVoteCount] = useState(initialVoteCount)

  const { mutate, error } = useMutation({
    mutationFn: articleCommentApi.updateRating,
    onMutate: ({ commentId, incVal }) => {
      setVoteCount((prev) => prev + incVal)
    },
    onError: (err, { commentId, incVal }) => {
      setVoteCount((prev) => prev - incVal)
    },
  })

  const handleIncrementClick = (incVal) => (e) => mutate({ commentId: id, incVal })

  const isIncremented = voteCount === initialVoteCount + 1
  const isDecremented = voteCount === initialVoteCount - 1

  if (error) {
    alert(error.message) // JFN
  }

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleIncrementClick(1)}
        children="🔺"
        disabled={isIncremented}
      />
      <span>{voteCount}</span>
      <Button
        variant="outlined"
        onClick={handleIncrementClick(-1)}
        children="🔻"
        disabled={isDecremented}
      />
    </>
  )
}

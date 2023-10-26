import { Box, Button, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { articleApi } from '../api'
import { useState } from 'react'

export const ArticleRating = ({ id, vote_count: initialVoteCount }) => {
  const [voteCount, setVoteCount] = useState(initialVoteCount)

  const { mutate, error } = useMutation({
    mutationFn: articleApi.updateRatingById,
    onMutate: ({ id, incVal }) => {
      setVoteCount((prev) => prev + incVal)
    },
    onError: (err, { id, incVal }) => {
      setVoteCount((prev) => prev - incVal)
    },
  })

  const handleClick = (incVal) => (e) => mutate({ id, incVal })

  const isIncremented = voteCount === initialVoteCount + 1
  const isDecremented = voteCount === initialVoteCount - 1

  if (error) {
    alert(error.message) // JFN
  }

  return (
    <Box>
      <Button onClick={handleClick(1)} children="🔺" disabled={isIncremented} />
      <Typography component="span" children={voteCount} />
      <Button onClick={handleClick(-1)} children="🔻" disabled={isDecremented} />
    </Box>
  )
}

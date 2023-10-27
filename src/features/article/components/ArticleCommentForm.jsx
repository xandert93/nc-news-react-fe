import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { articleCommentApi } from '../api'
import { Button, TextField } from '@mui/material'
import { Form } from '../../../components'
import { useAuthUser } from '../../../useAuthUser'
import { useState } from 'react'

export const ArticleCommentForm = () => {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const { isPending, mutateAsync } = useMutation({
    mutationFn: articleCommentApi.createOne,
    onSuccess: (savedComment) => {
      queryClient.invalidateQueries('article-comments')
    },
  })

  const { user } = useAuthUser()

  const [errMessage, setErrMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formEl = e.target

    const { body } = Object.fromEntries(new FormData(formEl))

    if (!body) return setErrMessage('Please provide a comment')

    await mutateAsync({
      article_id: id,
      username: user.username,
      body,
    })

    formEl.reset() // JFN
    setErrMessage('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        label="New Comment"
        placeholder="Placeholder"
        name="body"
        multiline
        rows={4}
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        children="Submit"
        disabled={isPending}
      />
      {errMessage && <p style={{ color: 'red' }}>{errMessage}</p>}
    </Form>
  )
}

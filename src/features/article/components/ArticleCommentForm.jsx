import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { articleCommentApi } from '../api'
import { Button, TextField } from '@mui/material'
import { Form } from '../../../components'

export const ArticleCommentForm = () => {
  const { id } = useParams()

  const { isPending, mutateAsync } = useMutation({
    mutationFn: articleCommentApi.createOne,
    onSuccess: (savedComment) => {
      queryClient.invalidateQueries('article-comments')
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formEl = e.target

    const { body } = Object.fromEntries(new FormData(formEl))

    await mutateAsync({
      article_id: id,
      username: 'grumpy19', // ⚠️ fix. hardcoded...
      body,
    })

    formEl.reset() // JFN
  }

  const queryClient = useQueryClient()

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
    </Form>
  )
}

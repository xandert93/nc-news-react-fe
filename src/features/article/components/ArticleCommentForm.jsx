import { useParams } from 'react-router-dom'

import { Button, TextField } from '@mui/material'
import { Form } from '../../../components'
import { useAuthUser } from '../../../useAuthUser'

export const ArticleCommentForm = ({ isPending, mutateAsync }) => {
  const { id } = useParams()

  const { user } = useAuthUser()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formEl = e.target

    const { body } = Object.fromEntries(new FormData(formEl))

    await mutateAsync({
      article_id: id,
      author: user.username, // ⚠️ shouldn't be sent ...should come from auth token on server
      body,
    })

    formEl.reset() // JFN
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
    </Form>
  )
}

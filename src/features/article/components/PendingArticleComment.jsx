import { useAuthUser } from '../../../useAuthUser'
import { ArticleComment } from './ArticleComment'

export const PendingArticleComment = ({ comment }) => {
  const { user } = useAuthUser()

  return (
    <ArticleComment
      comment={{
        ...comment,
        // ⚠️ so component doesn't break:
        author: user,
        vote_count: 0,
        created_at: Date.now(),
      }}
      style={{
        opacity: 0.5, // apparently industry standard
        pointerEvents: 'none',
      }}
    />
  )
}

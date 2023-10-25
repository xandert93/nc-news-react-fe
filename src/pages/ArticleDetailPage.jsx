import { useQuery } from '@tanstack/react-query'

import { useParams } from 'react-router-dom'
import { articleApi } from '../features/article/api'

import { Article } from '../features/article/components'

export const ArticleDetailPage = () => {
  const { id } = useParams()

  const { data: article } = useQuery({
    queryKey: ['articles', Number(id)],
    queryFn: () => articleApi.getById(id),
  })

  if (!article) return 'No article...yet'

  return (
    <div>
      <Article {...article} />
    </div>
  )
}

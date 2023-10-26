import { useEffect } from 'react'

export const useSetDocumentTitle = (pageTitle) => {
  useEffect(() => {
    document.title = `${pageTitle} | ${import.meta.env.VITE_APP_NAME}`
  }, [pageTitle])
}

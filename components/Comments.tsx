'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug, title }: { slug: string; title: string }) {
  if (!siteMetadata.comments?.provider) {
    return null
  }

  // Format the discussion title to include the blog title and site name
  const formattedTitle = `${title} | ${siteMetadata.author} | Portfolio`

  if (siteMetadata.comments.provider === 'giscus') {
    const config = {
      ...siteMetadata.comments,
      giscusConfig: {
        ...siteMetadata.comments.giscusConfig,
        term: formattedTitle,
      },
    }
    return <CommentsComponent commentsConfig={config} slug={slug} />
  }

  return <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
}

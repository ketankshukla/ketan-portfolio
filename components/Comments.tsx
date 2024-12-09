'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug, title }: { slug: string; title: string }) {
  if (!siteMetadata.comments?.provider) {
    return null
  }
  // Use the full title for the discussion
  const discussionTitle = `${title} | ${siteMetadata.title}`
  return <CommentsComponent commentsConfig={siteMetadata.comments} slug={discussionTitle} />
}

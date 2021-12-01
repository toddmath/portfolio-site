import React from 'react'

import FeaturedProjects from '../featured-projects/featured-projects.component'
import { useFeaturedQuery } from '@hooks'

import { CardStack, FeaturedHeading } from './featured.styles'

export default function Featured() {
  const featuredProjects = useFeaturedQuery()

  return (
    <CardStack
      maxWidth='1045px'
      bigDesktopStyles={`max-width: 845px;`}
      desktopStyles={`max-width: 696px;`}
    >
      <FeaturedHeading id='projects'>Some Things I&apos;ve Built</FeaturedHeading>
      <FeaturedProjects projects={featuredProjects} />
    </CardStack>
  )
}

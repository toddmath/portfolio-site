import React from 'react'
import { motion } from 'framer-motion'

import { useGithubInfo } from '@hooks'
import { socialMedia } from '@config'
import { FormattedIcon, IconStar, IconFork } from '@components/icons'

import {
  StyledContainer,
  StyledSocial,
  MotionSocialList,
  StyledSocialLink,
  Metadata,
  GitHubLink,
  StyledGitHubInfo,
  StyledGitHubInfoInner,
} from './footer.styles'

const Footer = () => {
  const { stars, forks } = useGithubInfo()

  return (
    <StyledContainer>
      <StyledSocial>
        <MotionSocialList>
          {socialMedia?.map(({ name, url }) => (
            <motion.li
              key={name}
              layout
              layoutId={name}
              whileHover={{ scale: 0.75, color: 'var(--interactive-hover)' }}
              transition={{ type: 'spring', damping: 7, stiffness: 100 }}
            >
              <StyledSocialLink
                href={url}
                target='_blank'
                rel='nofollow noopener norefferer'
                aria-label={name}
                role='link'
              >
                <FormattedIcon name={name} />
              </StyledSocialLink>
            </motion.li>
          ))}
        </MotionSocialList>
      </StyledSocial>

      <Metadata>
        <GitHubLink
          href='https://github.com/toddmath/portfolio-site'
          target='_blank'
          rel='nofolow noopener noreferrer'
        >
          Designed by Todd Matheson
          {/* <div>Designed by Todd Matheson</div> */}
          <StyledGitHubInfo>
            {stars > 0 && (
              <StyledGitHubInfoInner>
                <motion.div whileHover={{ scale: 1.2, color: 'var(--interactive-hover)' }}>
                  <IconStar />
                </motion.div>
                <span>{stars}</span>
              </StyledGitHubInfoInner>
            )}
            {forks > 0 && (
              <StyledGitHubInfoInner>
                <motion.div>
                  <IconFork />
                </motion.div>
                <span>{forks}</span>
              </StyledGitHubInfoInner>
            )}
          </StyledGitHubInfo>
        </GitHubLink>
      </Metadata>
    </StyledContainer>
  )
}

export default Footer

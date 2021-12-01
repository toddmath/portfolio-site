import React from 'react'
import { motion } from 'framer-motion'

import { useGithubInfo } from '@hooks'
import { socialMedia } from '@config'
import { Icon } from '@components/icons'

import {
  StyledContainer,
  StyledSocial,
  MotionSocialList,
  StyledSocialLink,
  StyledMetadata,
  StyledGitHubLink,
  StyledGitHubInfo,
  StyledGitHubInfoInner,
} from './footer.styles'

const Footer = () => {
  const { stars, forks } = useGithubInfo()

  return (
    <StyledContainer>
      <StyledSocial>
        <MotionSocialList>
          {socialMedia?.map(({ name, url }, i) => (
            <motion.li
              key={i}
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
                <Icon name={name} size='24' />
              </StyledSocialLink>
            </motion.li>
          ))}
        </MotionSocialList>
      </StyledSocial>

      <StyledMetadata>
        <StyledGitHubLink
          href='https://github.com/toddmath/portfolio-site'
          target='_blank'
          rel='nofolow noopener noreferrer'
        >
          Designed by Todd Matheson
          <StyledGitHubInfo>
            {stars > 0 && (
              <StyledGitHubInfoInner>
                <motion.div
                  whileHover={{ scale: 1.2, color: 'var(--interactive-hover)' }}
                >
                  <Icon name='star' strokeWidth='1.5' size='20' />
                </motion.div>
                <span>{stars}</span>
              </StyledGitHubInfoInner>
            )}
            {forks > 0 && (
              <StyledGitHubInfoInner>
                <motion.div>
                  <Icon name='fork' strokeWidth='1.5' size='22' />
                </motion.div>
                <span>{forks}</span>
              </StyledGitHubInfoInner>
            )}
          </StyledGitHubInfo>
        </StyledGitHubLink>
      </StyledMetadata>
    </StyledContainer>
  )
}

export default Footer

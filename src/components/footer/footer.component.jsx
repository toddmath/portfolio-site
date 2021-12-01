import React from 'react'

import { useGithubInfo } from '@hooks'
import { socialMedia } from '@config'
import { FormattedIcon, IconStar, IconFork } from '@components/icons'

import {
  StyledContainer,
  StyledSocial,
  StyledSocialList,
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
        <StyledSocialList>
          {socialMedia?.map(({ name, url }) => (
            <li key={name}>
              <StyledSocialLink
                href={url}
                target='_blank'
                rel='nofollow noopener norefferer'
                aria-label={name}
                role='link'
              >
                <FormattedIcon name={name} />
              </StyledSocialLink>
            </li>
          ))}
        </StyledSocialList>
      </StyledSocial>

      <Metadata>
        <GitHubLink
          href='https://github.com/toddmath/portfolio-site'
          target='_blank'
          rel='nofolow noopener noreferrer'
        >
          <div>Designed by Todd Matheson</div>

          <StyledGitHubInfo>
            {stars > 0 && (
              <StyledGitHubInfoInner>
                <IconStar />
                <span>{stars}</span>
              </StyledGitHubInfoInner>
            )}
            {forks > 0 && (
              <StyledGitHubInfoInner>
                <IconFork />
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

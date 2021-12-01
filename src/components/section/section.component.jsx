import React from 'react'
import T from 'prop-types'

import { Section as SectionOuter } from '@styles'

function Section({
  ariaLabel,
  maxWidths,
  maxWidth = '1045px',
  bigDesktopStyles,
  desktopStyles,
  width,
  textAlign,
  margin,
  padding,
  tabletStyles,
  children,
}) {
  return (
    <SectionOuter
      aria-label={ariaLabel}
      maxWidth={maxWidth}
      bigDesktopStyles={bigDesktopStyles}
      desktopStyles={desktopStyles}
      maxWidths={maxWidths}
      width={width}
      textAlign={textAlign}
      margin={margin}
      padding={padding}
      tabletStyles={tabletStyles}
    >
      {children}
    </SectionOuter>
  )
}

Section.propTypes = {
  ariaLabel: T.string,
  maxWidth: T.string,
  bigDesktopStyles: T.string,
  desktopStyles: T.string,
  maxWidths: T.oneOfType([
    T.shape({
      giant: T.string,
      bigDesktop: T.string,
      desktop: T.string,
      tablet: T.string,
      thone: T.string,
      phablet: T.string,
      phone: T.string,
      tiny: T.string,
    }),
    T.string,
  ]),
  width: T.string,
  textAlign: T.string,
  margin: T.node,
  padding: T.node,
  tabletStyles: T.node,
  children: T.node,
}

export default Section

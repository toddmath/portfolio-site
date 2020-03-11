import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: ${props => (props.block ? 'block' : 'flex')};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  flex-direction: ${props => props.flexDirection || 'row'};
  flex-grow: ${props => props.flexGrow || 0};
  flex-shrink: ${props => props.flexShrink || 1};
  flex-basis: ${props => props.flexBasis || 'auto'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
  flex: ${props => props.flex || '0 1 auto'};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  max-width: ${props => props.maxWidth || 'none'};
`

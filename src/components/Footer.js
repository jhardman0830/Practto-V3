import React from 'react'
import styled from 'styled-components'
import theme from '../theme/theme'
import { toRem } from '../utils/utils'
import Facebook from 'react-icons/lib/fa/facebook-official'
import Youtube from 'react-icons/lib/fa/youtube-play'
import Instagram from 'react-icons/lib/fa/instagram'
import Twitter from 'react-icons/lib/fa/twitter'
import { gql, graphql } from 'react-apollo'
import PropTypes from 'prop-types'

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${toRem(4)} ${toRem(32)};
  bottom: 0;
  left: 0;
`

const Copyright = styled.span`
  font-size: ${toRem(10)};
  font-weight: lighter;
  color: ${theme.white};
`

const SocialMedia = styled.ul`
  list-style: none;
  margin: 0;
`

const Item = styled.li`
  display: inline-block;
  padding-left: 8px;
  margin: 0;
`

const Footer = ({ data }) => (
  <StyledFooter>
    <Copyright>
      {`© ${new Date().getFullYear()} Practto all rights reserved`}
    </Copyright>
    <SocialMedia>
      <Item>
        <a
          href={data.allAboutDenttoes && data.allAboutDenttoes[0].facebook}
          target='_blank'
        >
          <Facebook size={16} color={theme.white} />
        </a>
      </Item>
      <Item>
        <a
          href={data.allAboutDenttoes && data.allAboutDenttoes[0].youtube}
          target='_blank'
        >
          <Youtube size={16} color={theme.white} />
        </a>
      </Item>
      <Item>
        <a
          href={data.allAboutDenttoes && data.allAboutDenttoes[0].instagram}
          target='_blank'
        >
          <Instagram size={16} color={theme.white} />
        </a>
      </Item>
      <Item>
        <a
          href={data.allAboutDenttoes && data.allAboutDenttoes[0].twitter}
          target='_blank'
        >
          <Twitter size={16} color={theme.white} />
        </a>
      </Item>
    </SocialMedia>
  </StyledFooter>
)

Footer.propTypes = {
  data: PropTypes.object
}

const query = gql`
  query {
    allAboutDenttoes(last: 1) {
      facebook
      youtube
      instagram
      twitter
    }
  }
`

export default graphql(query)(Footer)

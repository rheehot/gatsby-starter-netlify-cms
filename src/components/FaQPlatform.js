import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link, graphql, StaticQuery } from 'gatsby'

import { AppStoreIcon, PlayStoreIcon, PcIcon } from "./Icon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FaQSection = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-style: normal;
  margin: 10px;
  text-align: center;
`;

const SectionTitle = styled.div`
  color: #6529E7;
`;

const SectionItem = styled.div`
  width: 250px;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  margin-top: 10px;
  margin-bottom: 10px;
`;

class FaQPlatform extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    console.log('FaQ Main posts : ', posts);

    let iosPosts = [];
    let androidPosts = [];
    let pcPosts = [];

    for (const post of posts) {
      if (post.node.frontmatter.platform === "ios") iosPosts.push(post);
      if (post.node.frontmatter.platform === "android") androidPosts.push(post);
      if (post.node.frontmatter.platform === "pc") pcPosts.push(post);
    }

    return (
      <Wrapper>
        <FaQSection>
          <SectionTitle>
            {<AppStoreIcon/>}&nbsp;IOS
          </SectionTitle>
          <SectionItem/>
          {iosPosts.map((post) =>
            <Link to={post.node.fields.slug}>
              <SectionItem>
                {post.node.frontmatter.title}
              </SectionItem>
            </Link>
          )}
        </FaQSection>
        <FaQSection>
          <SectionTitle>
            {<PlayStoreIcon/>}&nbsp;ANDROID
          </SectionTitle>
          <SectionItem/>
          {androidPosts.map((post) =>
            <Link to={post.node.fields.slug}>
              <SectionItem>
                {post.node.frontmatter.title}
              </SectionItem>
            </Link>
          )}
        </FaQSection>
        <FaQSection>
          <SectionTitle>
            {<PcIcon/>}&nbsp;PC
          </SectionTitle>
          <SectionItem/>
          {pcPosts.map((post) =>
            <Link to={post.node.fields.slug}>
              <SectionItem>
                {post.node.frontmatter.title}
              </SectionItem>
            </Link>
          )}
        </FaQSection>
      </Wrapper>
    )
  }
}

FaQPlatform.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query FaQMainRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "faq-content" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                platform
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <FaQPlatform data={data} count={count} />}
  />
)

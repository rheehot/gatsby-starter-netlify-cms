import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link, graphql, StaticQuery } from 'gatsby'


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

class FaQTag extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    console.log('FaQ Tag posts : ', posts);

    let tags = {};

    for (const post of posts) {
      const current_tags = post.node.frontmatter.faq_tags;

      for (const tag of current_tags) {
        console.log('tags : ', tags)
        if (tag in tags) {
          tags[tag].push(post);
        } else {
          tags[tag] = [];
          tags[tag].push(post);
        }
      }
    }

    return (
      <Wrapper>
          {Object.keys(tags).map((tag) => {
            return (
              <FaQSection>
                <SectionTitle>
                  {tag}
                </SectionTitle>
                <SectionItem/>
                {tags[tag].map((post) =>
                  <Link to={post.node.fields.slug}>
                    <SectionItem>
                      {post.node.frontmatter.title}
                    </SectionItem>
                  </Link>
                )}
              </FaQSection>
            )
          })}
      </Wrapper>
    )
  }
}

FaQTag.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query FaQTagRollQuery {
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
                faq_tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <FaQTag data={data} count={count} />}
  />
)

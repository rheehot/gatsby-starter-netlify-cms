import React from 'react'

import Layout from '../../components/Layout'
import FaqRoll from "../../components/FaqRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <FaqRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

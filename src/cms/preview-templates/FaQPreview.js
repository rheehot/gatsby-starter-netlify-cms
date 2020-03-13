import React from 'react'
import PropTypes from 'prop-types'
import { FaQContentTemplate } from '../../templates/faq-content'

const FaQPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'faq_tags'])
  return (
    <FaQContentTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

FaQPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default FaQPreview

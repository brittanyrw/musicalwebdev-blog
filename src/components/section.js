import React from 'react'
import PropTypes from 'prop-types'

import './section.css'

const Section = ({ name, blog, children, big }) => {
  return (
    <section id={name} className={blog ? 'blog-list-container' : ''}>
      <div className={`${big ? '' : 'container small'}`}>{children}</div>
    </section>
  )
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
  blog: PropTypes.bool,
  big: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Section

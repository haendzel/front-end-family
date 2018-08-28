import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import './styles.pcss'

const Window = ({
  title,
  close,
  children,
  className,
  ...props
}) => (
  <div className={c('window', className)} {...props}>
    <div className='window-border'>
      {(title || close) && (
        <div className='window-header'>
          {title && title}
          {close && (
            <a className='window-close'>
              <i className='fas fa-times' />
            </a>
          )}
        </div>
      )}
      <div className='window-content'>{children}</div>
    </div>
  </div>
)

Window.propTypes = {
  title: PropTypes.string,
  close: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
}

Window.defaultProps = {
  title: null,
  close: false
}

export default Window

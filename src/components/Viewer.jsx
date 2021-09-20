import React from 'react'
import PropTypes from 'prop-types'
import MultiViewer from './MultiViewer'


const Viewer = ({onlySecureOrigins, iiifUrl, width, height}) => {
  return (
    <MultiViewer
      iiifUrls={[iiifUrl]}
      onlySecureOrigins={onlySecureOrigins}
      width={width}
      height={height}
      showToolbar={false}
    />
  )
}

Viewer.propTypes = {
  iiifUrl: PropTypes.string.isRequired,
  onlySecureOrigins: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string
}

Viewer.defaultProps = {
  onlySecureOrigins: false,
  width: '800px',
  height: '450px'
}
export default Viewer

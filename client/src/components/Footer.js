import React from 'react'

const footerStyling = {
  width: '100%',
  position: 'absolute',
  bottom: '0px',
  marginTop: '40px'
}

const copyRight = {
  textAlign: 'right',
  position: 'relative',
  right: '8%',
  top: '80px',
  marginBottom: '20px'

}

function Footer () {
  return (
    <footer style={footerStyling}>
      <p style={copyRight}>@2019 | Cheers!</p>
    </footer>
  )
}

export default Footer

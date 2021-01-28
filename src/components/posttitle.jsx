import React from 'react'

class PostTitle extends React.Component {
  render() {
    let color
    switch (this.props.category) {
      case 'React':
        color = '#7CB3D9'
        break

      case 'nest.js':
        color = '#00bb16'
        break

      case 'Vue':
        color = '#F18AF2'
        break

      case 'React Native':
        color = '#F29333'
        break

      default:
        color = '#e4ff3c'
        break
    }
    return (
      <div className="title-flame">
        <h1
          className="title"
          style={{
            borderBottom: `solid ${color} 0.3rem`,
          }}
        >
          {this.props.children}
        </h1>
      </div>
    )
  }
}

export default PostTitle

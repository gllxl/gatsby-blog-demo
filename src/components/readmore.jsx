import React from 'react'
import { Link } from 'gatsby'

import './readmore.scss'

const ReadMore = props => {
  let color = ''
  switch (props.category) {
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
      color = '#b0cc05'
      break
  }
  return (
    <Link
      to={props.slug}
      style={{ textDecoration: 'none' }}
      className="readmore-link"
    >
      <div className={`readmore ${props.category}`}>查看更多</div>
    </Link>
  )
}

export default ReadMore

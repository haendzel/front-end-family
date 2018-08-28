import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

const contentId = 'content'
const content = document.createElement('div')

content.id = contentId

document.body.appendChild(content)

ReactDom.render(
  <App />,
  document.getElementById(contentId)
)

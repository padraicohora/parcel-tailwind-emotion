import React from 'react'
import ReactDOM from 'react-dom'
import { css } from 'emotion'
import styled from 'react-emotion'
import tw from 'tailwind.macro'

let Button = styled('button')`
  ${tw`
    appearance-none bg-indigo text-indigo-lightest
    border-0 p-3 rounded-default font-mono cursor-pointer
    text-xs
  `};
`

let hoverStyles = css(tw`hover:bg-indigo-light`)

let App = () => <Button className={hoverStyles}>hello, world</Button>

if (typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('app'))
}

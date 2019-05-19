import React, { useRef } from 'react'
import { render, cleanup } from 'react-testing-library'
import useTabbableList from '../src/index'
import Component from './component'

const CANDIDATES = [
  'A',
  'AREA',
  'INPUT',
  'SELECT',
  'TEXTAREA',
  'BUTTON',
  'P',
  'DIV',
  'AUDIO',
  'VIDEO'
]

afterEach(cleanup)

test('Returns all tabbable elements', () => {
  const { getByTestId } = render(
    <Component>
      <a href="#" />
      <map>
        <area href="" />
      </map>
      <input />
      <select />
      <textarea />
      <button />
      <p contentEditable={true} />
      <div tabIndex={0} />
      <audio controls />
      <video controls />
    </Component>
  )

  CANDIDATES.forEach(item => expect(getByTestId(item).textContent).toBe(item))
})

test('Ignores the elements that are not tabbable', () => {
  const { getByTestId } = render(
    <Component>
      <a />
      <map>
        <area />
      </map>
      <input disabled={true} />
      <select disabled={true} />
      <textarea disabled={true} />
      <button disabled={true} />
      <p />
      <div tabIndex={-1} />
      <audio />
      <video />
    </Component>
  )

  expect(getByTestId('tabbable-list').firstChild).toBe(null)
})

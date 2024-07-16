import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

test('Home', () => {
  const { container } = render(<Home />)
  const divElement = container.querySelector('div')
  expect(divElement).toBeDefined()
})
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '.'

test('renders home page', () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
})
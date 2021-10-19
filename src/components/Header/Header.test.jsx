import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '.'

test('renders header', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
})
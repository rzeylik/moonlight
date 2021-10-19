import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Profile from '.'

test('renders profile page', () => {
    render(
        <BrowserRouter>
            <Profile />
        </BrowserRouter>
    )
})
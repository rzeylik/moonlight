import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignUp from '.'

test('renders film page', () => {
    render(
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>
    )
})
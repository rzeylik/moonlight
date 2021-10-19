import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FilmPage from '.'

test('renders film page', () => {
    render(
        <BrowserRouter>
            <FilmPage />
        </BrowserRouter>
    )
})
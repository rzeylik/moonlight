import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Layout from '.'

test('renders layout', () => {
    render(
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    )
})
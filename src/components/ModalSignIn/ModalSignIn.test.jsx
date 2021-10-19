import { render, screen } from '@testing-library/react'
import ModalSignIn from '.'

test('renders sign in modal', () => {
    render(<ModalSignIn />)
})
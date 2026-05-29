import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import LocalUsersSection from './LocalUsersSection'
import { useAuth } from '../hooks/useAuth'


// Mocks
jest.mock('../hooks/useAuth')
jest.mock(
    './MainForm',
    () => (props: { onSubmit: (name: string, email: string) => void }) => (
        <button onClick={() => props.onSubmit('Alice', 'alice@mail.com')}>
            Mock Add User
        </button>
    )
)



describe('LocalUsersSection', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('affiche un message si l’utilisateur n’est pas connecté', () => {
        ;(useAuth as jest.Mock).mockReturnValue({ user: null })

        render(<LocalUsersSection />)

        expect(
            screen.getByText(
                /vous devez être connecté pour voir les utilisateurs locaux/i
            )
        ).toBeInTheDocument()
    })

    test('affiche le titre et "Aucun utilisateur" si connecté', () => {
        ;(useAuth as jest.Mock).mockReturnValue({
            user: { id: 1, name: 'John' },
        })

        render(<LocalUsersSection />)

        expect(screen.getByText(/utilisateurs locaux/i)).toBeInTheDocument()
        expect(screen.getByText(/aucun utilisateur/i)).toBeInTheDocument()
    })

    test('ajoute un utilisateur lorsque MainForm déclenche onSubmit', () => {
        ;(useAuth as jest.Mock).mockReturnValue({
            user: { id: 1, name: 'John' },
        })

        render(<LocalUsersSection />)

        // Le bouton mocké simule MainForm.onSubmit("Alice", "alice@mail.com")
        fireEvent.click(screen.getByText(/mock add user/i))

        expect(screen.getByText(/alice — alice@mail.com/i)).toBeInTheDocument()
    })
})

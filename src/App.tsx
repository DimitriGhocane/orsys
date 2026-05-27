import type React from 'react'
import './App.css'
import Header from './composents/Header'

interface UserCardProps {
    name: string
    age: number
    city: string
    role?: 'admin' | 'user'
}

const UserCard: React.FC<UserCardProps> = ({ name, age, role = 'user' }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>
                {age} ans · {role}
            </p>
        </div>
    )
}

function App() {
    return (
        <>
            <Header />
            <UserCard name="Alice" age={25} city="Paris" role="admin" />
            <UserCard name="Bob" city="Paris" age={30} />
        </>
    )
}
export default App

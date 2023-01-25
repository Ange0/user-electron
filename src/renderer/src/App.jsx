import NewUser from './components/NewUser'
import ListUsers from './components/ListUsers'
import { useState } from 'react'
function App() {
  const [users, setUsers] = useState([])
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  async function createUser(e) {
    try {
      e.preventDefault()
      if (fullName && email) {
        // eslint-disable-next-line no-undef
        const userCreated = await electronAPI.createUser(fullName, email)
        let usersCopy = [userCreated, ...users]
        setUsers(usersCopy)
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <div className="flex justify-center bg-[#1f2029] h-screen overflow-hidden pt-20">
      <div className="flex flex-col space-y-10 w-10/12 xl:w-4/6">
        <NewUser setFullName={setFullName} setEmail={setEmail} onSubmit={createUser} />
        <ListUsers users={users} />
      </div>
    </div>
  )
}

export default App

import NewUser from './components/NewUser'
import ListUsers from './components/ListUsers'
import { useEffect, useState } from 'react'
import ButtonQuitApp from './components/ButtonQuiApp'
function App() {
  const [users, setUsers] = useState([])
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  async function allUsers() {
    try {
      // eslint-disable-next-line no-undef
      const allUsers = await electronAPI.allUsers()
      setUsers(allUsers)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    allUsers()
  }, [])
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
  async function handleDeleteUser(idUser) {
    try {
      console.log(idUser)
      // eslint-disable-next-line no-undef
      await electronAPI.deleteUser(idUser)
      setUsers(users.filter((user) => user.dataValues.id !== idUser))
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <div className="flex justify-center bg-[#1f2029] h-screen overflow-hidden pt-20">
      <div className="flex flex-col space-y-10 w-10/12 xl:w-4/6">
        <NewUser setFullName={setFullName} setEmail={setEmail} onSubmit={createUser} />
        <ListUsers users={users} handleDeleteUser={handleDeleteUser} />
        <ButtonQuitApp />
      </div>
    </div>
  )
}

export default App

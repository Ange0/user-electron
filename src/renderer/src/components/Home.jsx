import { useEffect, useState } from 'react'
import NewUser from './NewUser'
import ListUsers from './ListUsers'
import ButtonQuitApp from './ButtonQuiApp'
import TYPE_FIELD from '../../utils'
import icon from './../assets/icon.png?asset'
function Home() {
  const [users, setUsers] = useState([])
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  function resertForm() {
    setFullName('')
    setEmail('')
  }
  async function allUsers() {
    try {
      // eslint-disable-next-line no-undef
      const allUsers = await electronAPI.allUsers()
      setUsers(allUsers)
    } catch (error) {
      throw new Error(error)
    }
  }
  useEffect(() => {
    allUsers()
  }, [])
  async function handleCreateUser(e) {
    try {
      e.preventDefault()
      if (fullName) {
        // eslint-disable-next-line no-undef
        const userCreated = await electronAPI.createUser(fullName, email)
        let usersCopy = [userCreated, ...users]
        setUsers(usersCopy)
        resertForm()
      }
    } catch (error) {
      throw new Error(error)
    }
  }
  async function handleUpdateUser(user, datas) {
    try {
      if (datas.fieldType === TYPE_FIELD.FULL_NAME) {
        user.dataValues.fullName = datas.value
      }
      if (datas.fieldType === TYPE_FIELD.EMAIL) {
        user.dataValues.email = datas.value
      }

      // eslint-disable-next-line no-undef
      await electronAPI.updateUser(user)
    } catch (error) {
      throw new Error(error)
    }
  }

  async function handleDeleteUser(idUser) {
    try {
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
        <NewUser
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          onSubmit={handleCreateUser}
        />
        <div className="flex justify-between">
          <ListUsers
            users={users}
            handleDeleteUser={handleDeleteUser}
            handleUpdateUser={handleUpdateUser}
          />
          <div className="w-60 h-60 bg-cyan-400 shadow-md shadow-cyan-500   rounded-full">
            <img src={icon} className="w-full h-full" />
          </div>
        </div>
        <ButtonQuitApp />
      </div>
    </div>
  )
}
export default Home

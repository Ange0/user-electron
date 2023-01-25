import NewUser from './components/NewUser'
import ListUsers from './components/ListUsers'
function App() {
  return (
    <div className="flex justify-center bg-[#1f2029] h-screen overflow-hidden pt-20">
      <div className="flex flex-col space-y-10 w-10/12 xl:w-4/6">
        <NewUser />
        <ListUsers />
      </div>
    </div>
  )
}

export default App

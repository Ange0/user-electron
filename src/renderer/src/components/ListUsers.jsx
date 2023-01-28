/* eslint-disable react/prop-types */
function ListUsers({ users, handleDeleteUser }) {
  function formatDate(date) {
    return date.toLocaleDateString('fr')
  }
  return (
    <>
      <div className="flex flex-col space-y-4 w-1/2 ">
        {users.length > 0 && <div className="font-bold text-4xl text-[#ffeba7]">List users</div>}
        <div className="flex flex-col space-y-6 max-h-96 overflow-auto ">
          {users.length === 0 ? (
            <div className="self-center flex flex-col items-center mt-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-40 h-40  text-gray-600 opacity-60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              <span className="text-gray-600">you have not added a user yet !</span>
            </div>
          ) : (
            users.map((user, index) => (
              <div
                key={index}
                className="flex justify-between items-center flex-none  bg-[#2a2b38] p-4 rounded-md text-gray-400 font-bold shadow-md cursor-pointer hover:opacity-40 transition duration-500"
              >
                <div className="flex items-center space-x-2">
                  <div
                    className={`h-1 w-1 ${user._options.isNewRecord ? 'bg-green-300' : ''}`}
                  ></div>
                  <span className="font-bold">{user.dataValues.fullName}</span>
                  <span className="text-gray-500"> . {user.dataValues.email} </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500 ml-4 ">
                    {formatDate(user.dataValues.createdAt)}{' '}
                  </span>
                  <div
                    onClick={() => handleDeleteUser(user.dataValues.id)}
                    className="rounded-full p-1 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-red-400 hover:text-red-600 transition"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}
export default ListUsers

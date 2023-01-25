/* eslint-disable react/prop-types */
function NewUser({ setFullName, setEmail, onSubmit }) {
  return (
    <>
      <div className="font-bold text-4xl text-[#ffeba7]">New User</div>
      <form onSubmit={onSubmit} className="flex bg-[#2a2b38] p-4 rounded-md space-x-4">
        <div className="flex flex-grow space-x-4">
          <div className="flex items-center space-x-2 bg-[#1f2029] rounded-lg p-2 shadow w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#ffeba7]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <input
              placeholder="Full name"
              className="bg-[#1f2029] p-1 focus:outline-none  text-[#ffeba7] placeholder-gray-500 w-full"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2 bg-[#1f2029] rounded-lg p-2 shadow w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#ffeba7]"
            >
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            <input
              placeholder="Email"
              className="bg-[#1f2029] p-1 focus:outline-none  text-[#ffeba7] placeholder-gray-500 w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#ffeba7] transition shadow-[#ffeba7]/90 font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#102770] hover:text-[#ffeba7]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </form>
    </>
  )
}

export default NewUser

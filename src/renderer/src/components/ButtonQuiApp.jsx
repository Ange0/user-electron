function ButtonQuitApp() {
  return (
    <button
      // eslint-disable-next-line no-undef
      onClick={() => electronAPI.quitApp()}
      type="submit"
      className="bg-red-500 fixed bottom-20 right-20 transition shadow shadow-red-500/50 font-bold w-10 h-10 xl:w-20 xl:h-20 p-2 xl:p-4 flex items-center justify-center rounded-full hover:opacity-20 hover:text-red-900"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
        />
      </svg>
    </button>
  )
}

export default ButtonQuitApp

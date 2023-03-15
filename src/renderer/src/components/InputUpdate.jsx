/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import TYPE_FIELD from '../../utils'

export default function InputUpdate({ user, handleUpdateUser, fieldType }) {
  const [currentValueInput, setCurrentValueInput] = useState(null)
  const currentUser = useRef({ idUser: null, fieldType: null })
  const [modeFieldUpdateActived, setModeFieldUpdateActived] = useState(false)

  function handleToActiveUpdateFieldMode(idUser, field, fieldType) {
    setCurrentValueInput(field)
    currentUser.current.idUser = idUser
    currentUser.current.fieldType = fieldType
    setModeFieldUpdateActived(true)
  }

  function getField(fieldType) {
    if (fieldType === TYPE_FIELD.FULL_NAME) {
      return user.dataValues.fullName
    }
    if (fieldType === TYPE_FIELD.EMAIL) {
      return user.dataValues.email
    }
  }

  return currentValueInput &&
    currentUser.current.idUser === user.dataValues.id &&
    modeFieldUpdateActived ? (
    <input
      value={currentValueInput}
      onChange={(e) => {
        if (e.target.value.length >= 0) {
          setCurrentValueInput(e.target.value.length == 0 ? ' ' : e.target.value)
        }
      }}
      onMouseLeave={() => {
        setModeFieldUpdateActived(false)
        if (currentValueInput !== getField(fieldType)) {
          handleUpdateUser(user, {
            fieldType: fieldType,
            value: currentValueInput
          })
        }
      }}
      className="h-6 max-w-[200px] bg-[#1f2029] p-2 text-sm rounded-md focus:outline-none text-[#ffeba7]"
    />
  ) : (
    <span
      onClick={() =>
        handleToActiveUpdateFieldMode(user.dataValues.id, getField(fieldType), fieldType)
      }
      className="font-bold cursor-pointer hover:opacity-50 transition"
    >
      {currentValueInput !== null && currentUser.current.idUser === user.dataValues.id
        ? currentValueInput
        : getField(fieldType)}
    </span>
  )
}

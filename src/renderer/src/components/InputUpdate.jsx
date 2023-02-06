/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import TYPE_FIELD from '../../utils'

export default function InputUpdate({ user, handleUpdateUser, fieldType }) {
  const [currentField, setCurrentField] = useState(null)
  const currentUser = useRef({ idUser: null, fieldType: null })
  const [modeFieldUpdateActived, setModeFieldUpdateActived] = useState(false)

  function handleToActiveUpdateFieldMode(idUser, field, fieldType) {
    setCurrentField(field)
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

  return currentField &&
    currentUser.current.idUser === user.dataValues.id &&
    modeFieldUpdateActived ? (
    <input
      value={currentField}
      onChange={(e) => {
        if (e.target.value.length >= 0) {
          setCurrentField(e.target.value.length == 0 ? ' ' : e.target.value)
        }
      }}
      onMouseLeave={() => {
        setModeFieldUpdateActived(false)
        if (currentField !== user.dataValues.fullName || currentField !== user.dataValues.email) {
          handleUpdateUser(user, {
            fieldType: fieldType,
            value: currentField
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
      className="font-bold cursor-pointer"
    >
      {currentField !== null && currentUser.current.idUser === user.dataValues.id
        ? currentField
        : getField(fieldType)}
    </span>
  )
}

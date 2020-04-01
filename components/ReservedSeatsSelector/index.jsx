import React, { useContext } from 'react'
import { Select } from 'antd'
import { SEAT_LETTERS } from 'constants/seatLetters'
import { AppDispatch } from 'components/AppLayout'

const ReservedSeatsSelect = () => {
  const dispatch = useContext(AppDispatch)

  const { Option } = Select
  const children = []

  for (let row = 1; row <= 30; row++) {
    for (let letter of SEAT_LETTERS) {
      children.push(
        <Option key={`${row}${letter}`}>{`${row}${letter}`}</Option>,
      )
    }
  }

  function handleChange(reservedSeats) {
    dispatch({ type: 'UPDATE_RESERVED_SEATS', payload: { reservedSeats } })
  }

  return (
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      allowClear
      placeholder="Select seats"
      onChange={handleChange}
      getPopupContainer={() =>
        document.getElementById('Content-ReservedSeatsSelect')
      }
    >
      {children}
    </Select>
  )
}

export default ReservedSeatsSelect

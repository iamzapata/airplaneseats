import React, { useContext } from 'react'
import { Select } from 'antd'
import { SEAT_LETTERS } from 'constants/seatLetters'
import { AppDispatch, AppState } from 'components/AppLayout'
import familiesSeatConfiguration from 'modules/familiesSeatConfiguration'

const ReservedSeatsSelect = () => {
  const dispatch = useContext(AppDispatch)
  const state = useContext(AppState)
  const { reservedSeats } = state

  const { Option } = Select
  const children = []

  for (let row = 1; row <= 30; row += 1) {
    for (const letter of SEAT_LETTERS) {
      children.push(
        <Option key={`${row}${letter}`}>{`${row}${letter}`}</Option>,
      )
    }
  }

  function handleChange(reservedSeats) {
    const families = reservedSeats.length
      ? familiesSeatConfiguration(30, reservedSeats.toString())
      : []

    dispatch({ type: 'UPDATE_RESERVED_SEATS', payload: { reservedSeats } })
    dispatch({ type: 'UPDATE_FAMILIES_SEAT_CONFIG', payload: { families } })
  }

  return (
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      allowClear
      placeholder="Select seats"
      onChange={handleChange}
      value={reservedSeats}
      getPopupContainer={() =>
        document.getElementById('Content-ReservedSeatsSelect')
      }
    >
      {children}
    </Select>
  )
}

export default ReservedSeatsSelect

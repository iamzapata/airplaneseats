import React, { useContext } from 'react'
import CabineSeat from 'components/svg/CabineSeat'
import { AppDispatch, AppState } from 'components/AppLayout'

import { SEAT_LETTERS } from 'constants/seatLetters'

const Seats = ({ setSeatCoordiantes }) => {
  const dispatch = useContext(AppDispatch)
  const state = useContext(AppState)
  const rows = [...Array(30).keys()].map(i => i + 1)
  const cols = [...Array(10).keys()]
  let x = 10
  let y = 170

  const seats = []

  const onClick = (row, seat) => {
    const { reservedSeats } = state
    const reservedSeat = `${row}${seat}`

    dispatch({
      type: 'UPDATE_RESERVED_SEATS',
      payload: {
        reservedSeats: [...new Set([...reservedSeats, reservedSeat])],
      },
    })
  }

  rows.forEach(row => {
    cols.forEach(col => {
      const seatLetter = SEAT_LETTERS[col]

      setSeatCoordiantes(row, seatLetter, x, y)

      seats.push(
        <CabineSeat
          key={`Seat-${row}${seatLetter}`}
          x={x}
          y={y}
          row={row}
          seat={seatLetter}
          onClick={onClick}
        />,
      )

      if ([2, 6].includes(col)) {
        x += 30
      } else {
        x += 16
      }
    })

    x = 10
    y += 20
  })

  return seats
}

export default Seats

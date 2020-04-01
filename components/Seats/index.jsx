import React from 'react'
import CabineSeat from 'components/svg/CabineSeat'
import { SEAT_LETTERS } from 'constants/seatLetters'

const Seats = ({ setSeatCoordiantes }) => {
  const rows = [...Array(30).keys()].map(i => i + 1)
  const cols = [...Array(10).keys()]
  let x = 10
  let y = 170

  const seats = []

  rows.forEach(row => {
    cols.forEach(col => {
      const seatLetter = SEAT_LETTERS[col]

      setSeatCoordiantes(row, seatLetter, x, y)

      seats.push(<CabineSeat key={`Seat-${row}${seatLetter}`} x={x} y={y} />)

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

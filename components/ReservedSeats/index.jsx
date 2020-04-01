import React, { useContext } from 'react'
import { AppState } from 'components/AppLayout'
import XIcon from 'components/svg/XIcon'

const ReservedSeats = ({ getSeatCoordinates }) => {
  const state = useContext(AppState)
  const { reservedSeats } = state

  return reservedSeats.map(reservedSeat => {
    const [, row, seat] = reservedSeat.match(/(\d+)([A-Z])/)
    const { x, y } = getSeatCoordinates(row, seat, { dx: 2.5, dy: 2.5 })

    return <XIcon key={`Reserved-${row}${seat}`} x={x} y={y} />
  })
}

export default ReservedSeats

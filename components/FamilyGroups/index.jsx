import React, { useContext } from 'react'
import FamilySeatOverlay from 'components/svg/FamilySeatOverlay'
import { AppState } from 'components/AppLayout'

const FamilyGroups = ({ seatCoordiantes }) => {
  const state = useContext(AppState)
  const { families } = state
  return families.map(({ row, seatConfiguration }) => {
    return seatConfiguration
      .toString()
      .split('')
      .map(seat => {
        const { x, y } = seatCoordiantes[`${row}${seat}`]
        return <FamilySeatOverlay x={x + 3} y={y + 1.7} />
      })
  })
}

export default FamilyGroups

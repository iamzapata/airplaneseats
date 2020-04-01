import React, { useContext } from 'react'
import FamilySeatOverlay from 'components/svg/FamilySeatOverlay'
import { AppState } from 'components/AppLayout'
import chroma from 'chroma-js'

const FamilyGroups = ({ seatCoordiantes }) => {
  const state = useContext(AppState)
  const { families } = state

  console.warn('FamilyGroups', {families})

  const colors = [
    ...chroma.scale(['#fafa6e', '#2A4858']).mode('lch').colors(10),
    ...chroma.scale(['#f98841', '#c93384']).mode('lch').colors(10),
    ...chroma.scale(['#ae9e52', '#2A4858']).mode('lch').colors(10),
  ]

  return families.map(({ row, seatConfiguration }) => {
    return seatConfiguration
      .toString()
      .split('')
      .map(seat => {
        const { x, y } = seatCoordiantes[`${row}${seat}`]
        return <FamilySeatOverlay key={`FamilyGroup-${row}${seat}$`} x={x + 2} y={y + 1.5} fill={colors[row]} />
      })
  })
}

export default FamilyGroups

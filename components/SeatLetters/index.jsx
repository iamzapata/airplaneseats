import React from 'react'
import RowA from 'components/svg/RowA'
import RowB from 'components/svg/RowB'
import RowC from 'components/svg/RowC'
import RowD from 'components/svg/RowD'
import RowE from 'components/svg/RowE'
import RowF from 'components/svg/RowF'
import RowG from 'components/svg/RowG'
import RowH from 'components/svg/RowH'
import RowJ from 'components/svg/RowJ'
import RowK from 'components/svg/RowK'

const SeatLetters = () => {
  let x = 12
  const y = 150
  const seatLetters = []

  const rowComponents = {
    A: RowA,
    B: RowB,
    C: RowC,
    D: RowD,
    E: RowE,
    F: RowF,
    G: RowG,
    H: RowH,
    J: RowJ,
    K: RowK,
  }

  Object.keys(rowComponents).forEach((seatLetter, index) => {
    const key = `Row-${index}`
    const Row = React.createElement(rowComponents[seatLetter], { x, y, key })

    seatLetters.push(Row)

    if ([2, 6].includes(index)) {
      x += 20
    } else {
      x += 16.5
    }
  })

  return seatLetters
}

export default SeatLetters

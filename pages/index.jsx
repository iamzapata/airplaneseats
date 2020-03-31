import React from 'react'
import Layout from 'components/Layout'
import AirplaneCabine from 'components/svg/AirplaneCabine'
import CabineSeat from 'components/svg/CabineSeat'
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

const renderSeatLetters = () => {
  let x = 12
  let y = 150
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
    // console.warn({ index, seatLetter })
    const Row = React.createElement(rowComponents[seatLetter], { x, y })

    console.warn(Row)

    seatLetters.push(Row)

    if ([2, 6].includes(index)) {
      x += 20
    } else {
      x += 16.5
    }
  })

  return seatLetters
}

const renderSeats = () => {
  const rows = [...Array(30).keys()]
  const cols = [...Array(10).keys()]
  let x = 10
  let y = 170

  const seats = []

  rows.forEach(row => {
    cols.forEach(col => {
      seats.push(<CabineSeat x={x} y={y} />)

      if ([2, 6].includes(col)) {
        x += 20
      } else {
        x += 16
      }
    })

    x = 10
    y += 20
  })

  return seats
}

const Index = () => (
  <Layout>
    <AirplaneCabine>
      {renderSeatLetters()}
      {renderSeats()}
    </AirplaneCabine>
  </Layout>
)

export default Index

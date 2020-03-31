import React from 'react'
import Layout from 'components/Layout'
import AirplaneCabine from 'components/svg/AirplaneCabine'
import CabineSeat from 'components/svg/CabineSeat'

const renderSeats = () => {
  const rows = [...Array(30).keys()]
  const cols = [...Array(10).keys()]
  let x = 10
  let y = 150

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
    <AirplaneCabine>{renderSeats()}</AirplaneCabine>
  </Layout>
)

export default Index

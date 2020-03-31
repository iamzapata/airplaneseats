import React, { useState } from 'react'
import AppLayout from 'components/AppLayout'
import { Row, Col, Card, Layout, Form, Button, Typography } from 'antd'
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
import XIcon from 'components/svg/XIcon'
import ReservedSeatsSelector from 'components/ReservedSeatsSelector'

const { Title } = Typography

let seatCoordiantes = {}

const seatLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K']

const getSeatCoordinates = (row, letter) => {
  const { x, y } = seatCoordiantes[`${row}${letter}`]

  return {
    x: x + 4.5,
    y: y + 2.5,
  }
}

const renderSeatLetters = () => {
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

const renderSeats = () => {
  const rows = [...Array(30).keys()]
  const cols = [...Array(10).keys()]
  let x = 10
  let y = 170

  const seats = []

  rows.forEach(row => {
    cols.forEach(col => {
      const seatLetter = seatLetters[col]
      seatCoordiantes[`${row}${seatLetter}`] = { x, y }

      seats.push(<CabineSeat key={`Seat-${row}${seatLetter}`} x={x} y={y} />)

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

const renderMarkReservedSeats = () => {
  const reservedSeats = ['1A', '3H']

  return reservedSeats.map(reservedSeat => {
    const [, row, seat] = reservedSeat.match(/(\d+)([A-Z])/)
    const { x, y } = getSeatCoordinates(row, seat)

    return <XIcon key={`Reserved-${row}${seat}`} x={x} y={y} />
  })
}

const Index = () => {
  const { Content } = Layout
  return (
    <AppLayout>
      <Row>
        <Col span={24}>
          <Title level={2} className="p-3 text-center">
            Don't Know
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Content id="Content-ReservedSeatsSelect" style={{ height: '100%' }}>
            <Card style={{ height: '100%' }} className="pl-5">
              <Form name="basic">
                <Form.Item label="Reserved Seats" name="reserved_seats">
                  <ReservedSeatsSelector />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Content>
        </Col>
        <Col span={12}>
          <Content className="flex justify-center">
            <AirplaneCabine>
              {renderSeatLetters()}
              {renderSeats()}
              {renderMarkReservedSeats()}
            </AirplaneCabine>
          </Content>
        </Col>
      </Row>
    </AppLayout>
  )
}

export default Index

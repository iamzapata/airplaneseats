import React, { useContext } from 'react'
import AppLayout from 'components/AppLayout'
import { Row, Col, Card, Layout, Form, Button, Typography } from 'antd'
import AirplaneCabine from 'components/svg/AirplaneCabine'
import SeatLetters from 'components/SeatLetters'
import Seats from 'components/Seats'
import ReservedSeatsSelector from 'components/ReservedSeatsSelector'
import ReservedSeats from 'components/ReservedSeats'
const { Title } = Typography

let seatCoordiantes = {}

const getSeatCoordinates = (row, letter) => {
  const { x, y } = seatCoordiantes[`${row}${letter}`]

  return {
    x: x + 4.5,
    y: y + 2.5,
  }
}

const Grid = ({ state }) => {
  const { Content } = Layout
  const { reservedSeats } = state
  const shouldDisableArrangeButton = reservedSeats.length === 0
  console.warn({seatCoordiantes})

  return (
    <>
      <Row>
        <Col span={24}>
          <Title level={2} className="p-3 text-center">
            Family Seat Arrangement
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Content id="Content-ReservedSeatsSelect" style={{ height: '100%' }}>
            <Card style={{ height: '100%' }} className="ml-5">
              <Form name="basic">
                <Form.Item label="Reserved Seats" name="reserved_seats">
                  <ReservedSeatsSelector />
                </Form.Item>

                <Form.Item className="mt-64">
                  <Button
                    disabled={shouldDisableArrangeButton}
                    type="primary"
                    htmlType="submit"
                    className="float-right"
                  >
                    Arrange
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Content>
        </Col>
        <Col span={12}>
          <Content className="flex justify-center">
            <AirplaneCabine>
              <SeatLetters />
              <Seats seatCoordiantes={seatCoordiantes} />
              <ReservedSeats getSeatCoordinates={getSeatCoordinates} />
            </AirplaneCabine>
          </Content>
        </Col>
      </Row>
    </>
  )
}

const Index = () => {
  return (
    <AppLayout>
      <Grid />
    </AppLayout>
  )
}

export default Index

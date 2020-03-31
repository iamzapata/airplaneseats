import React, { useReducer } from 'react'
import { Layout } from 'antd'
import { format } from 'date-fns'

const { Footer } = Layout

const AppDispatch = React.createContext(null)

const AppSatate = React.createContext(null)

const initialState = { seatCoords: {}, reservedSeats: [], families: {} }

function reducer(state, action) {
  console.warn({state, action })
  const { type, payload } = action
  switch (type) {
    case 'UPDATE_SEAT_COORDS': {
      const { row, seat, x, y } = payload
      return {
        seatCoords: {
          [`${row}${seat}`]: { x, y },
        },
      }
    }
    case 'UPDATE_RESERVED_SETS': {
      const { reservedSeats } = payload
      return { reservedSeats: [...state.reservedSeats, reservedSeats] }
    }
    default:
      throw new Error()
  }
}

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const currentYear = format(new Date(), 'yyyy')

  return (
    <AppDispatch.Provider value={dispatch}>
      <AppSatate.Provider value={state}>
        <Layout className="App_AppLayout">
          {children}
          <Footer style={{ textAlign: 'center' }}>
            Andres Zapata ©{currentYear}
          </Footer>
        </Layout>
      </AppSatate.Provider>
    </AppDispatch.Provider>
  )
}

export { AppDispatch, AppSatate }

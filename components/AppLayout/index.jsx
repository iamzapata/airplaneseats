import React, { useReducer } from 'react'
import { Layout } from 'antd'
import { format } from 'date-fns'

const { Footer } = Layout

const AppDispatch = React.createContext(null)

const AppState = React.createContext(null)

const initialState = { seatCoords: {}, reservedSeats: [], families: [] }

function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case 'UPDATE_RESERVED_SEATS': {
      const { reservedSeats } = payload
      return {
        ...state,
        reservedSeats,
      }
    }
    case 'UPDATE_FAMILIES_SEAT_CONFIG': {
      let { families } = payload
      console.warn('UPDATE_FAMILIES_SEAT_CONFIG', families)
      return {
        ...state,
        families,
      }
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
      <AppState.Provider value={state}>
        <Layout className="App_AppLayout">
          {React.Children.map(children, child =>
            React.cloneElement(child, { state, dispatch }),
          )}
          <Footer style={{ textAlign: 'center' }}>
            Andres Zapata ©{currentYear}
          </Footer>
        </Layout>
      </AppState.Provider>
    </AppDispatch.Provider>
  )
}

export { AppDispatch, AppState }

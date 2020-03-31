import React from 'react'
import { Layout } from 'antd'
import { format } from 'date-fns'

const { Footer } = Layout

export default ({ children }) => {
  const currentYear = format(new Date(), 'yyyy')

  return (
    <Layout className="App_AppLayout">
      {children}
      <Footer style={{ textAlign: 'center' }}>
        Andres Zapata ©{currentYear}
      </Footer>
    </Layout>
  )
}

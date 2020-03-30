import React from 'react'
import { Layout } from 'antd'
import { format } from 'date-fns'

const { Content, Footer } = Layout

export default ({ children }) => {
  const currentYear = format(new Date(), 'yyyy')

  return (
    <Layout className="App_Layout">
      <Content className="App_Content flex justify-center my-20">
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Andres Zapata ©{currentYear}
      </Footer>
    </Layout>
  )
}

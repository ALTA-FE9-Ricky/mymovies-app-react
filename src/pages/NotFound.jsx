import React from 'react'
import Layout from 'components/Layout'
import { useTitle } from "utils/useTitle"

function NotFound() {

  useTitle("404 Not Found")
  
  return (
    <Layout>
        <p>Not found dude</p>
      </Layout>
    )
  }


export default NotFound
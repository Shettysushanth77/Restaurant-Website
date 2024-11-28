import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Link } from 'react-router-dom'
import banner from "../../src/images/banner.jpeg"
import "../../src/styles/HomeStyle.css"
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${banner})`}}>
        <div className="headerContainer">
            <h1>Food Website</h1>
            <p>Best Food In India</p>
            <Link to="/menu">
              <button>Order Now</button>
            </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
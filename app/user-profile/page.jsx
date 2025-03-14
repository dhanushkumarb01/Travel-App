import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import MyTrips from '@/components/User Profile/MyTrips'
import React from 'react'

const UserProfile = () => {
  return (
    <div>
        <Navbar/>
        <MyTrips/>
        <Footer/>
    </div>
  )
}

export default UserProfile
import React from 'react'
import Header from '../../Components/header/Header';
import Listing from '../../Components/listing/Listing';
import Sidebar from '../../Components/sidebar/Sidebar';
import "./Home.css";
function Home() {
  return (
    <div>
    <Header />
    <div className="home-page">
        <Listing />
        <Sidebar />
    </div>
</div>
  )
}

export default Home

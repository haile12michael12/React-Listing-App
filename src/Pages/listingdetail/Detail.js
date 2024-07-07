import React from 'react'
import ListingDetail from '../../Components/listing-detail/ListingDetail';
import Sidebar from '../../Components/sidebar/Sidebar';
import './Detail.css';
function Detail () {
  return (
    <div className="detail-page">
            <ListingDetail />
            <Sidebar />
        </div>
  )
}

export default Detail;
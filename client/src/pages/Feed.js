import React, { useEffect, useState } from 'react'
import { GetAllAlbumReviews } from '../services/ReviewsServices'
import './Feed.css'
import { Link } from 'react-router-dom'

export default function Feed() {
  const [reviews, setReviews] = useState([])

  const handleReviews = async () => {
    const data = await GetAllAlbumReviews()
    setReviews(data.reverse())
  }
  useEffect(() => {
    handleReviews()
  }, [])

  return (
    <div>
      {reviews &&
        reviews.map((review) => (
          <div>
            <div className="card" key={review.id}>
              <div className="grid-layout">
                <div className="title-info-container">
                  <h3 id="album-title" className="left">
                    {review.album.title}
                  </h3>
                  <h3 id="artist-name" className="left">
                    {review.album.artist}
                  </h3>
                </div>
                <div className="album-image-container">
                  <Link to={`/albumreviews/${review.album.id}`}>
                    <img
                      src={review.album.image}
                      id="feed-album-image"
                      className="left"
                      alt="review"
                    />
                  </Link>
                </div>
                <div className="review-header-container">
                  <div className="rating-user-bar">
                    <p className="score">
                      {parseFloat(review.rating).toFixed(1)}/10
                    </p>
                    <Link to={`/userprofile/${review.user.id}`}>
                      <h3>by {review.user.username}</h3>
                    </Link>
                  </div>
                </div>
                <div className="review-text-container">
                  <p>{review.content.substring(0, 80)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { DEEZER_BASE_URL } from '../globals'
import { AddUserReview } from '../services/ReviewsServices'
import { AddAlbum } from '../services/AlbumServices'
import MediaCard from '../components/MediaCard'
import { GetAlbumDetails } from '../services/DeezerServices'

export default function AddReview(props) {
  const [reviewContent, setReviewContent] = useState('')
  const [albumDetails, setAlbumDetails] = useState({})

  useEffect(async () => {
    const res = await GetAlbumDetails(props.match.params.album_id)
    setAlbumDetails(res.data)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newReviewContent = {
      content: reviewContent
    }
    axios.post(``)
  }

  return (
    <div>
      <h3>Add Review Page</h3>
      {props.match.params.album_id}

      {/* <MediaCard /> */}

      <div></div>
    </div>
  )
}

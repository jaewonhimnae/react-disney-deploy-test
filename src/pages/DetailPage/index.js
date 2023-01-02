import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../api/axios';

const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `movie/${movieId}`
        );
        console.log(response);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
        navigate(-1);
      }
    }
    fetchData();
  }, [movieId, navigate])

  return (
    <section>
      <img 
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  )
}

export default DetailPage
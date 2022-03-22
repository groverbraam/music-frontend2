import React, { useState, useEffect } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {


  const handleChange = (event) => {
    setSong({ ...song, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreateSong(song)
  }


  let emptySong = { name: '', artist: '', genre: '', image: '', audio: '' }
  const [song, setSong] = useState(emptySong)

  return (
    <div className='addContainer'>

      <div className='addFormDiv'>
        <h3 className='addSong'>Add Song</h3>


        <form className='addForm' onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label><br />
          <input className='loginInput' type="text" name="name" value={song.name} onChange={handleChange} placeholder='Enter song name...' />
          <br />
          <label htmlFor="artist">Artist: </label><br />
          <input className='loginInput' type="text" name="artist" value={song.artist} onChange={handleChange} placeholder='Enter the artist...' />
          <br />        <label htmlFor="image">Image URL: </label><br />
          <input className='loginInput' type="text" name="image" value={song.image} onChange={handleChange} placeholder='Enter the image URL...' />
          <br />

          <label htmlFor="price">Price: </label><br />
          <input className='loginInput' type="text" name="price" value={song.price} onChange={handleChange} placeholder='Enter the price...' />
          <br />
          <label htmlFor='genre'>Genre: </label><br />
          <select className='genreMenu' name='genre' id='genre' value={song.genre} onChange={handleChange} required>
            <option value='pop' id='pop'>Pop</option>
            <option value='rock' id='rock'>Rock</option>
            <option value='techno' id='techno'>Techno</option>
            <option value='hiphop' id='hiphop'>Hip-hop</option>
          </select>
          <br />
          <br />

          <label htmlFor="audio">Audio file: </label><br />
          <input className='fileButton' type="text" id="audio"></input>


          <br />
          <br />

          <input className='submitButton' type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Add

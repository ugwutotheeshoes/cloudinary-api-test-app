import './index.css';
import Axios from 'axios';
import { useState } from 'react';
function App() {

  const [imageSelected, setImageSelected] = useState("")

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('file', imageSelected)
    formData.append('upload_preset', 'cultetti')

    Axios.post('https://api.cloudinary.com/v1_1//ugwutotheeshoes/image/upload', formData).then((response) => {
      console.log(response)
    })
  }
  return (
    <div className="App">
      <h1>Uploads for Cloudinary API</h1>
      <div className="container">
      <input type="file" onChange={(e) => {
        setImageSelected(e.target.files[0])
      }} />
    <button onClick={uploadImage}>
      Upload Image
      </button>
      </div>
    </div>
  );
}

export default App;

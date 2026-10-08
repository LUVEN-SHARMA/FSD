import React, { useEffect, useState } from 'react'

const ImageSlider = () => {

    const [index, setindex] = useState(0);

    const Image = [
        "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
        "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_1280.jpg"
    ]
    useEffect(() =>{
        const interval = setInterval(()=>{
            setindex((prevIndex) =>(prevIndex+1)%Image.length)
        },1000);
        return ()=> clearInterval(interval);
    },[])

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Image Slider</h1>
      <img
      src={Image[index]}
      alt="img-here"
      style={{ height: "200px", width: "300px" }}
    />
    </div>
  )
}

export default ImageSlider
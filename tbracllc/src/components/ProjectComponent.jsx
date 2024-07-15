const DynamicThreeImageDisplay = ({img1_src, img1_text, img2_src, img2_text, img3_src, img3_text}) =>{
    return(
        <div className='home_images_container'>
            <img id='img1' src={img1_src} alt={img1_text}/>
            <img id='img2' src={img2_src} alt={img2_text}/>
            <img id='img3' src={img3_src} alt={img3_text}/>
        </div>
    )
}

export default DynamicThreeImageDisplay;



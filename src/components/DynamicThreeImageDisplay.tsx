import Image from 'next/image';
import '../components/styles/DynamicThreeImageDisplay.css';

interface DynamicThreeImageDisplayProps {
    img1_src: string;
    img1_text: string;
    img2_src: string;
    img2_text: string;
    img3_src: string;
    img3_text: string;
}

const DynamicThreeImageDisplay: React.FC<DynamicThreeImageDisplayProps> = ({img1_src, img1_text, img2_src, img2_text, img3_src, img3_text}) =>{
    return(
        <div className='home_images_container'>
            <Image id='img1' src={img1_src} alt={img1_text} width={500} height={500}/>
            <Image id='img2' src={img2_src} alt={img2_text} width={500} height={500}/>
            <Image id='img3' src={img3_src} alt={img3_text} width={500} height={500}/>
        </div>
    )
}

export default DynamicThreeImageDisplay;



// Import Style Page
import './Album.css';

// Import React Icons
import { BsBalloonHeartFill } from "react-icons/bs";

// Import React Libs
import { useEffect, useRef } from 'react';

// Import React Intersection Observer
import { InView } from 'react-intersection-observer';

const Album = () => {
    const imageCount = 48;
    const images = Array.from({ length: imageCount }, (_, i) => `Foto${String(imageCount - i).padStart(2, '0')}.jpg`);

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener("webkitbeginfullscreen", (e) => {
                e.preventDefault();
            })
        }
    }, []);

    return (
        <>
            <div className="Album">
                <h1>Álbum de Fotos</h1>
                <p className="heart"><BsBalloonHeartFill /></p>

                <p className="subText">Os momentos ao seu lado sempre são especiais. Eles me trazem felicidade, tranquilidade e proteção. Sem eles eu não seria o que sou hoje, porque eles me transformaram. Por isso, aqui estão apenas alguns dos todos os belíssimos momentos que compartilhamos juntos.</p>

                <div className="albumContent">
                    <div className="albumVideo">
                        <video ref={videoRef} autoPlay loop muted playsInline>
                            <source src="/six-years/static/video.mp4" />
                        </video>
                    </div>

                    <div className="albumImages">
                        {images.map((src, index) => (
                            <InView key={index} triggerOnce={true} trackVisibility={true} delay={250}>
                                {({ inView, ref }) => (
                                    <img className={`fade-in-image ${inView ? "visible" : "hidden"}`} src={`/six-years/static/${src}`} alt={`Foto ${imageCount - index}`} ref={ref}/>
                                )}
                            </InView>

                            /* {/* <img key={index} src={src} alt={`Foto ${imageCount - index}`} /> */
                        ))}
                    </div>
                </div>

                <div className="final">
                    <p className="loveu">Eu te amo! <span>&#10084;</span></p>

                    <p className="author">Do seu desenvolvedor favorito: <span>Gustavo</span> ;)</p>
                </div>
            </div>
        </>
    );
};

export default Album;
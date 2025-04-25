// Import Style Page
import './Home.css';

// Import Animate.css
import 'animate.css';

// Import React Icons
import { BsBalloonHeartFill, BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

// Import Components
import Clock from '../components/Clock';

const Home = ({ embedController }) => {
    const playSpotify = () => {
        if (embedController) {
            embedController.play();
        }
    };

    return (
        <>
            <div className="Home">
                <h1>Homenagem <span>06</span> Anos de Namoro!</h1>
                <p className="heart"><BsBalloonHeartFill /></p>

                <Clock />

                <button onClick={playSpotify}>
                    <div className="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-spotify" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
                        </svg>
                    </div>
                </button>
            </div>
        </>
    );
};

export default Home;
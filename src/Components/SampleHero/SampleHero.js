
import './SampleHero.css';

export default function SampleHero(props) {

    return(
        <div
            className='SampleHeroModal'
        >
            <div
                className='SampleHeroModalContent'
            >
                <div
                    className='SampleHeroCard'
                >
                    PLACEHOLDER
                </div>
                <p
                    className='SampleHeroText'
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam 
                    id diam maecenas ultricies. Integer vitae justo eget magna fermentum iaculis. 
                    Sagittis vitae et leo duis. Lorem ipsum dolor sit amet consectetur. Diam maecenas 
                    sed enim ut sem. Duis at consectetur lorem donec massa. Enim neque volutpat ac tincidunt. 
                    In eu mi bibendum neque egestas congue. Enim ut sem viverra aliquet eget. Laoreet 
                    id donec ultrices tincidunt arcu non sodales neque. Eget mi proin sed libero. 
                    Elementum pulvinar etiam non quam. Sed id semper risus in hendrerit.
                </p>
                <button
                    className='ExitSampleHero'
                    onClick={() => props.setModal(null)}
                >
                    &times;
                </button>
            </div>
        </div>
    );
};
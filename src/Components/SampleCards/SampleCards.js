import MockCards from '../../Utils/store';
import './SampleCards.css';

export default function SampleCards(props) {

    function renderCards(cards) {
        let result = [];
        cards.forEach(element => {
            const card = <div
                    className='SampleCard'
                    key={element.cardId}
                >
                    <div
                        className='SampleCardArt'
                    >
                        PLACEHOLDER
                    </div>
                    <p
                        className='SampleCardText'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam 
                        id diam maecenas ultricies. Integer vitae justo eget magna fermentum iaculis.
                    </p>
                </div>
            result.push(card);
        });
        return result;
    };

    return(
        <div
            className='SampleCardsModal'
        >
            <div
                className='SampleCardsModalContent'
            >
                {renderCards(MockCards.exampleCards)}
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
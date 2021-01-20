
import './Rulebook.css';

export default function Rulebook(props) {


    function renderRulebook() {
        if(props.full === true) {
            return(
                <div
                    className='Rulebook'
                >

                </div>
            );
        } else {
            return(
                <div
                    className='RulesModal'
                >
                    <div
                        className='RulesModalContent'
                    >
                        <p
                            className='QuickRules'
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
                            className='ExitQuickRules'
                            onClick={() => props.setModal(null)}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            );
        };
    };

    return(
        renderRulebook()
    );
};
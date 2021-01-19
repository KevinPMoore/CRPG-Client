import React, { useState } from 'react';
import LandingContent from '../Components/LandingContent/LandingContent';

export default function Landing(props) {

    const [ modal, setModal ] = useState(null);

    function renderLandingModal() {
        let modalContent;
        switch(modal) {
            case 'Rules':
                modalContent = <div
                    className='LandingModal'
                >
                    
                </div>
                break;
            case 'Hero':
                modalContent = <div
                    className='LandingModal'
                >

                </div>
                break;
            case 'Cards':
                modalContent = <div
                    className='LandingModal'
                >

                </div>
                break;
            default:
                return null;
        };
        return modalContent;
    };

    return(
        <main>
            { modal ? renderLandingModal() : null}
            <LandingContent setModal={setModal}/>
        </main>
    );
};
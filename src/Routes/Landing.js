import React, { useState } from 'react';
import Rulebook from '../Components/Rulebook/Rulebook';
import SampleHero from '../Components/SampleHero/SampleHero';
import SampleCards from '../Components/SampleCards/SampleCards';
import LandingContent from '../Components/LandingContent/LandingContent';

export default function Landing() {

    const [ modal, setModal ] = useState('');

    function renderLandingModal() {
        let modalContent;
        switch(modal) {
            case 'Rules':
                    modalContent = <Rulebook full={false} setModal={setModal}/>
                break;
            case 'Hero':
                    modalContent = <SampleHero setModal={setModal}/>
                break;
            case 'Cards':
                    modalContent = <SampleCards setModal={setModal}/>
                break;
            default:
                return null;
        };
        return modalContent;
    };

    return(
        <main>
            {renderLandingModal()}
            <LandingContent setModal={setModal}/>
        </main>
    );
};
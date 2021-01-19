import './LandingContent.css';

export default function LandingContent(props) {

    function handleInfoClick(ev) {
        props.setModal(ev.target.value)
    };

    return(
        <div
            className='LandingContent'
        >
            <section
                className='LandingSection'
            >
                <div
                    className='LandingPreview'
                >
                    <h3
                        className='LandingHeader'
                    >
                        Jump Right In
                    </h3>
                    <div
                        className='LandingImage'
                    >
                        PLACEHOLDER
                    </div>
                    <button
                        className='LandingButton'
                        value='Rules'
                        onClick={handleInfoClick}
                    >
                        RULES INFO
                    </button>
                </div>
                <p
                    className='LandingText'
                >
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. 
                    Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor 
                    venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus 
                    dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, 
                    mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”
                </p>
            </section>
            <section
                className='LandingSection'
            >
                <div
                    className='LandingPreview'
                >
                    <h3
                        className='LandingHeader'
                    >
                        Build Your Hero
                    </h3>
                    <div
                        className='LandingImage'
                    >
                        PLACEHOLDER
                    </div>
                    <button
                        className='LandingButton'
                        value='Hero'
                        onClick={handleInfoClick}
                    >
                        HERO INFO
                    </button>
                </div>
                <p
                    className='LandingText'
                >
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. 
                    Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor 
                    venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus 
                    dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, 
                    mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”
                </p>
            </section>
            <section
                className='LandingSection'
            >
                <div
                    className='LandingPreview'
                >
                    <h3
                        className='LandingHeader'
                    >
                        Tons of Customization
                    </h3>
                    <div
                        className='LandingImage'
                    >
                        PLACEHOLDER
                    </div>
                    <button
                        className='LandingButton'
                        value='Cards'
                        onClick={handleInfoClick}
                    >
                        CARDS INFO
                    </button>
                </div>
                <p
                    className='LandingText'
                >
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. 
                    Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor 
                    venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus 
                    dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, 
                    mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”
                </p>
            </section>
            <footer
                className='LandingFooter'
            >
                <h3
                    className='LandingHeader'
                >
                    Jump Right In
                </h3>
                <button
                    className='LandingSignUp'
                >
                    Sign Up
                </button>
            </footer>
        </div>
    );
};
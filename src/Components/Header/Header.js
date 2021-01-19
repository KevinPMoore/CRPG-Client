
import './Header.css';

export default function Header(props) {
    function renderHeader() {
        if(props.loggedIn === true) {
            return(
                <header>
                    <div
                        className='Headings'
                    >
                        <h1>
                            Epic Encounters
                        </h1>
                        <h2>
                            TAGLINE
                        </h2>
                    </div>
                    <div
                        className='HeaderButtons'
                    >

                    </div>
                </header>
            );
        } else {
            return(
                <header>
                    <div
                        className='Headings'
                    >
                        <h1>
                            Epic Encounters
                        </h1>
                        <h2>
                            TAGLINE
                        </h2>
                    </div>
                    <div
                        className='HeaderButtons'
                    >
                        <button>
                            Login
                        </button>
                        <button>
                            Register
                        </button>
                    </div>
                </header>
            );
        };
    };

    return(
        renderHeader()
    );
};
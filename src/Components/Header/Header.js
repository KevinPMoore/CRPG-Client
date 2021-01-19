
import './Header.css';

export default function Header(props) {
    function renderHeader() {
        if(props.loggedIn === true) {
            return(
                <header>
                    <div
                        className='headings'
                    >
                        <h1>
                            Epic Encounters
                        </h1>
                        <h2>
                            TAGLINE
                        </h2>
                    </div>
                    <div
                        className='headerbuttons'
                    >

                    </div>
                </header>
            );
        } else {
            return(
                <header>
                    <div
                        className='headings'
                    >
                        <h1>
                            Epic Encounters
                        </h1>
                        <h2>
                            TAGLINE
                        </h2>
                    </div>
                    <div
                        className='headerbuttons'
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
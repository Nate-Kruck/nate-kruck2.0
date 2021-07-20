import React from 'react';
import Zoom from 'react-reveal/Zoom';


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header header-name">
                    <Zoom top cascade>
                        <h1>Nathan Town</h1>
                    </Zoom>
                </div>
            </div>
        )
    }
}
export default Header;

import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class BoardItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { pin } = this.props;

        return (
            <Link to={`/pin/${pin.id}`}>
                <img className="pin-item" src={pin.photo} />
                {/* <p id='pin-title-board'>{pin.title} </p> */}
                
            </Link>
        );
    }
}

export default withRouter(BoardItem);
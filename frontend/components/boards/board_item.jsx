import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class BoardItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { pin } = this.props;

        return (
            <Link to={`/pins/${pin.id}`}>
                <img className="pin-item" src={pin.photoUrl} />
                <p id='pin-title-board'>{pin.title}</p>
            </Link>
        );
    }
}

export default withRouter(BoardItem);
import React from 'react';
import { Link } from 'react-router-dom';

const ProfileDetails = ({user}) => {

    function googleCity(url) {
        (window.open("//" + "google.com/search?q=" + user.location, '_blank'))
    };
            
    const userLocation = (user.location) ? (
            <button
                className="eaxta-button"
                onClick={googleCity}
            >
                <div >
                    <i>{user.location}</i>
                </div>
            </button>
        ) : (<i style={{ "color": "#8e8e8e" }}>Add your location</i>); 

        const userDescription = (user.description) ? (
            <i >
                {user.description}
            </i>
        ) : (<i style={{ "color": "#8e8e8e" }}>Describe your account</i>);

        return (
            <h4> <i className="fas fa-map-marker-alt"></i> {userLocation} | {userDescription}</h4>
        )
}

export default ProfileDetails;
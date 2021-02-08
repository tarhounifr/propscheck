import React from 'react'
import PropTypes from "prop-types"
import "./Profile.css"
const Profile = ({ fullName, bio, profession, photop, handleData }) => {

    return (

        <div className="back">
            <h1>{fullName}</h1>

            <img src={photop} alt="George Timothy Clooney" />

            <h2>{profession}</h2>

            <h4>{bio}</h4>


            <button className="button"
                onClick={() =>
                    handleData(fullName)
                }
            >
                Details
      </button>

        </div >
    )
}
Profile.defaultProps = {
    fullName: "inconnue",
    bio: "nothing",
    profession: "notput"
}
Profile.protoType = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}

export default Profile

import React from 'react'
import PropTypes from 'prop-types'


const Profile = ({name,bio,profession,photo,handleName,children}) => {
    const x = {name}
    console.log({photo})
    return (
        <div className="content_profile" style={{width: 400,backgroundColor:'white',borderRadius:'10px',padding:'3%'}}>
            <h1>My profile </h1>
            <h2>My name  : {name}</h2>
            <h2>My bio  : {bio}</h2>
            <h2>My profession  : {profession}</h2>
           
            {children}
            
            <br/>
            <button  
            onClick={()=>handleName(x)}
              >click here </button>
        </div>
    )
}

export default Profile;

/*** Default props */
Profile.defaultProps = {
    name: "No name"
}

/*** Prop types */
Profile.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    
}

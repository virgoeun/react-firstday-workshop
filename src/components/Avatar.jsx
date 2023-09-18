import React from "react";


  const Avatar = ({ image, firstName, lastName }) => {
    // const firstName = props.firstName;
     // const lastName = props.lastName;
    // const image = props.image;
    // const {firstName, lastName, image } = props;
  
    return (
      <div className="container">
        <img src={image} alt="simpsonPicture" />
        <h3> {firstName} {lastName}</h3>
      </div>
    );
  };

  export default Avatar;
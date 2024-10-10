import React from "react";
import './Card.css'; 

const Card = ({ cardId, title, label, image, type }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span>{cardId}</span>
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <div className={`label`}>{label}</div>
        {/* <img className="profile-image" src={image} alt="profile" /> */}
        <img className="profile-image" src="https://media.gettyimages.com/id/99884083/photo/london-united-kingdom-hrithik-roshan-attends-the-european-premiere-of-kites-at-odeon-west-end.jpg?s=612x612&w=0&k=20&c=RaDMZKoX3XB7crCvBA8ueUbK6Ct8FaR0jFbfSPCNpsw=" alt="profile" />
      </div>
    </div>
  );
};

export default Card;

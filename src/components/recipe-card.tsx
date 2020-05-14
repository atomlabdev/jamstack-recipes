import React from "react";
import { Link } from "gatsby";
import { FiArrowRightCircle } from "react-icons/fi";

interface RecipeCardProps {
  title: string;
  path: string;
  description: string;
  image: string;
}

const RecipeCard = ({ title, path, description, image }: RecipeCardProps) => {
  return (
    <Link to={path}>
      <div className="card has-border-radius">
        <div
          style={{
            padding: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p className="title is-6" style={{ marginBottom: 5 }}>
              {title}
            </p>
            <p className="subtitle is-6 is-marginless">{description}</p>
          </div>
          <FiArrowRightCircle size={24} />
        </div>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt={title} />
          </figure>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;

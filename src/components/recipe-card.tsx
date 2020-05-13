import React from "react";
import { Link } from "gatsby";

const RecipeCard = () => {
  return (
    <Link to="/">
      <div className="card">
        <div style={{ padding: 20 }}>
          <p className="title is-4" style={{ marginBottom: 5 }}>
            Tick
          </p>
          <p className="subtitle is-6 is-marginless">A todo list app</p>
        </div>
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://cdn.dribbble.com/users/2179951/screenshots/9736536/media/f8d2a4f7f1baf975fa7515642ac55ead.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;

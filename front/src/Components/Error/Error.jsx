import error from "../../assets/images/404-error.jpg";
import "./error.scss";

const Error = () => (
  <div className="error">
    <img src={error} alt="Erreur 404" />
  </div>
);

export default Error;

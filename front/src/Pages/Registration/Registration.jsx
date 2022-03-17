// import react
import React from "react";
//component
import RegistrationUser from "../../Components/Registration/User/RegistrationUser";
// import style
import "../Registration/registration.scss";
import "./registration.scss";


const Registration = () => {
  return (
    <>
      <div className="registration">
        <RegistrationUser />
      </div>
    </>
  );
};

export default React.memo(Registration);

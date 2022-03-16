import React, { useState } from "react";
import "../ProfilUpdate/profilUpdate.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfilUpdate = ({ pseudo, userId }) => {
  const [presentation, setPresentation] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  console.log(userId);

  const navigate = useNavigate();

  const send = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:3000/profil/${userId}`,
        { presentation }
      );

      console.log(response.data);

      // console.log(response.accessToken);

      console.log(JSON.stringify(response.data));

      // clear
      setPresentation("");
      // setPassword('')
      // setConfirmPassword('')
      navigate(`/profil/${userId}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h2>Modifier votre profil</h2>
      <form className="profilUpdate-form" onSubmit={send}>
        <label htmlFor="presentation">Présentation</label>
        <input
          id="presentation"
          type="text"
          placeholder={presentation}
          value={presentation}
          onChange={(e) => setPresentation(e.target.value)}
        />

        {/* <label htmlFor="password">Mot de passe</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <label htmlFor="confirmPassword">Confirmez votre mot de passe</label>
                <input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> */}

        <button className="form__btn-submit">Valider votre profil</button>
      </form>
    </div>
  );
};

export default React.memo(ProfilUpdate);

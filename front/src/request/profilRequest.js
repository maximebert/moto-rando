import axios from "axios";

export async function requestLogin(
  alias,
  email,
  password,
  confirmPassword,
  presentation
) {
  try {
    const response = await axios.patch("http://localhost:3000/profil/3", {
      password,
      confirmPassword,
      presentation,
    });
    return response;
  } catch (err) {
    return err.response;
  }
}

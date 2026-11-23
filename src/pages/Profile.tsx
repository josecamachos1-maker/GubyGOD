import { getUser } from "../utils/auth";

export default function Profile() {
  const user = getUser();

  return (
    <div>
      <h1>Perfil</h1>
      <p>Usuario: {user?.usuario}</p>
      <p>Rol: {user?.rol}</p>
      <p>Fecha de nacimiento: {user?.fecha_nacimiento || "No registrada"}</p>
    </div>
  );
}

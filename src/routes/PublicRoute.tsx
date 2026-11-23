import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
//FUNCION QUE VERIFICA AUTENTICACION
import { isAuthenticated } from "../utils/auth";

interface Props {
  children: ReactNode;
}

// SI EL USUARIO NO ESTA AUTENTICADO: MUESTRA EL COMPONENTE
// SI EL USUARIO YA ESTA AUTENTICADO: REDIRECCIONA AL DASHBOARD
export default function PublicRoute({ children }: Props) {
  return !isAuthenticated() ? children : <Navigate to="/dashboard" />;
}

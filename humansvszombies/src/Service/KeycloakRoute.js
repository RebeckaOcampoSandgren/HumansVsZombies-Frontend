import { Navigate } from "react-router-dom";
import keycloak from "../keycloak";

/**
 * Protect routes based on a given role and authenticated status of a Keycloak Session.
 * @description Default redirect is to the base path: "/"
 * @param {{ children: ReactNode, role: string, redirectTo: string }} props
 * @returns {JSX.Element}
 */

function KeycloakRoute({ children, role, redirectTo = "/" }) {
  if (!keycloak.auth()) {
    return <Navigate replace to={redirectTo} />;
  }
  if (keycloak.hasRole(role)) {
    return <>{children}</>;
  }
  return <Navigate replace to={redirectTo} />;
}

export default KeycloakRoute;

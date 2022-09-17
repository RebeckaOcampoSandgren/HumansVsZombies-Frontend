import PropTypes from 'prop-types'
import { Route } from "react-router-dom";
import LandingPage from '../Component/LandingPage';
import keycloak from '../keycloak';

const RolesRoute = ({ roles, children, ...rest }) => (
  <Route {...rest}>
    {keycloak.hasRole(roles) ? children : <LandingPage/>}
  </Route>
)

RolesRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RolesRoute
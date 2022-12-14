import PropTypes from 'prop-types'
import keycloak from '../keycloak';

//Handle roles for each user from keycloak
const RenderOnRole = ({ roles, children }) => (keycloak.hasRole(roles)) ? children : null;

RenderOnRole.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RenderOnRole
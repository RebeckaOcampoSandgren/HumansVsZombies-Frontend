import Keycloak from "keycloak-js";

// NB! Leave the / or the relative path will use the Router path
const _kc = new Keycloak("/keycloak.json");

/**
 * Initialize Keycloak and silently checking for an existing login.
 * @description Should be called before render() of app.
 * @returns { Promise<void> } Promise
 */
export const initialize = () => {
  const config = {
    checkLoginIframe: false,
    onLoad: "check-sso",
    silentCheckSsoRedirectUri:
      window.location.origin + "/silent-check-sso.html",
  };
  return _kc.init(config);
};
 const userName = () => _kc.tokenParsed?.given_name;
 const doLogin = _kc.login;
 const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));
 const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;
const auth = () => _kc.authenticated;

const keycloak = {
  userName,
  doLogin,
  hasRole,
  doLogout,
  getToken,
  isLoggedIn,
  auth
 };

/** @type { Keycloak } keycloak */
export default keycloak;



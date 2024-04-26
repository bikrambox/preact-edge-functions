import createAuth0Client from "@auth0/auth0-spa-js";
import { auth_config } from "./auth_config";

export default class AuthService {
  auth0Client = null;
  popupConfigureOptions = {
    domain: auth_config.domain,
    client_id: auth_config.clientId,
    redirect_uri: window.location.origin,
  };

  async init() {
    this.auth0Client = await createAuth0Client(this.popupConfigureOptions);
  }

  isAuthenticated = async () => {
    const authData = await this.auth0Client.isAuthenticated();
    return authData.isAuthenticated;
  };

  login = async () => {
    await this.auth0Client.loginWithPopup();
  };

  logout = async () => {
    await this.auth0Client.logout({
      returnTo: window.location.origin,
    });
  };

  getUser = async () => {
    const user = await this.auth0Client.getUser();
    return user;
  };
}

const authService = new AuthService();
authService.init();
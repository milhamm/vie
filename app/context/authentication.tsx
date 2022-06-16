import api, { internalAPI } from "../client/api";
import { useRouter } from "next/router";
import * as React from "react";

export type CheckAuthResponse = {
  message: string;
  authorized: boolean;
  token: string;
};

const AuthenticationContext = React.createContext(null);

export const AuthenticationProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState<null | unknown>(null);
  const [isForgotSent, setIsForgotSent] = React.useState(false);
  const [isJustVerified, setIsJustVerified] = React.useState(false);

  const router = useRouter();

  const validate = async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await internalAPI.post<unknown, CheckAuthResponse>(
        "/checkAuth"
      );
      setIsAuthenticated(response.authorized);
    } catch (error) {
      setError(error);
      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (payload: any) => {
    try {
      setError(null);
      setLoading(true);
      await internalAPI.post<unknown, { status: string }>("/login", payload);
      setIsAuthenticated(true);
      router.push("/");
    } catch (error) {
      if (error === "Unauthorized") {
        return Promise.reject(
          "Email atau password yang dimasukkan salah, coba ubah lagi ya"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const register = async (payload: any) => {
    try {
      setError(null);
      setLoading(true);
      const response = await api.post<unknown, any>("/register", payload);
      setUser(response.user);
    } catch (error) {
      setError(error);
      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    delete api.defaults.headers.common["Authorization"];
    await internalAPI.delete("/logout");
    setUser(null);
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <AuthenticationContext.Provider
      value={{
        loading,
        isAuthenticated,
        error,
        user,
        isJustVerified,
        login,
        logout,
        register,
        validate,
        isForgotSent,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthenticationContext);

import { createContext, useState, type ReactNode } from "react";

export type User = {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  gender: "MALE" | "FEMALE";
  createdAt: string;
  updatedAt: string;
};

export type AuthState = {
  user: User | null;
};

type AuthContextType = {
  authState: AuthState;
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({ user: null });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

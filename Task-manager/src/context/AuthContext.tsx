import { createContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

interface User {
    email: string;
    password: string;
}

interface AuthContextType {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
}

interface AuthStoreProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthStore = ({ children }: AuthStoreProps) => {

  const [user, setUser] = useState<User | null>(null);
    
  return (
    <AuthContext.Provider value={{ user, setUser }}>
        {children}
    </AuthContext.Provider>
  );
}

export default AuthStore;

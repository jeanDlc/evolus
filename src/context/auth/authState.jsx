import { createContext ,useState } from "react";
const AuthState = (props) => {
    const INITIAL_STATE={
        user:null,
        authenticated:false,
        token:null,
    }
    const [state,setState]=useState(INITIAL_STATE);
    const AuthContext=createContext();
    return ( 
        <AuthContext.Provider value={{
            user:state.user,
            authenticated:state.authenticated,
            token:state.token
        }} >
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthState;
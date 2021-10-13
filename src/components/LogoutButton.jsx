import {useAuth0} from "@auth0/auth0-react";

const LogoutButton = () => {
    const {logout} = useAuth0();
    return <button className="sign-out" onClick={()=>logout()}>Sign out</button>;
}

export default LogoutButton;

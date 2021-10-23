import {useAuth0} from '@auth0/auth0-react';

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();
    return <button className="sign-in" onClick={()=>loginWithRedirect()}>Sign in</button>;
}

export default LoginButton;

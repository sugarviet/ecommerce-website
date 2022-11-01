import { GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom';

initializeAuthentication();


function Login() {
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    // const [user, setUser] = useState({})
    const handleGoogleSignIn = () => {

        const auth = getAuth();
        signInWithPopup(auth, provider).then(result => {
            const userGoogle = result.user;
            // setUser(userGoogle)
            // console.log(userGoogle.email)
            if(userGoogle.email){
                localStorage.setItem('accessToken', true);
                navigate('/all')
            }
        }).catch(err => {
            console.log(err)
        })
        
    }

    return ( 
        <div className="login-section">
            <div className="login-form">
                <h1>Login with Google</h1>
                <Button className="login-btn" onClick={handleGoogleSignIn} variant='contained'>google login <span><i class="ri-google-line"></i></span></Button>
            </div>
        </div>
     );
}

export default Login;
import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth ,auth} = useAuth();

    console.log("the auth",auth)

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        console.log("the auth before before prev",auth)
        setAuth(prev => {
            console.log("the prev",JSON.stringify(prev));
            console.log(response.data.accessToken);
            return { 
                ...prev,   
                roles: response.data.roles,
                accessToken: response.data.accessToken,
                userEmail:response.data.userEmail
            }
        });
        console.log("the auth",auth)
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;
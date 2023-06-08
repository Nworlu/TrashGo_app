import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import LoadingOverlay from '../components/LoadingOverlay';
import { AuthContext } from '../context/AuthContext';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

function AppNav(){
    const authCtx = useContext(AuthContext)
    return <NavigationContainer>
        {authCtx.authenicated? <AppStack/>: <AuthStack/>}
    </NavigationContainer>
}

export default AppNav

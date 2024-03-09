import React, { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import { UserContex } from '../../App';

function PrivateRoutes({children}) {
    const [loggInUser] = useContext(UserContex);
          return ( loggInUser ? children: <Navigate to = '/login' />)
        
}
export default PrivateRoutes;

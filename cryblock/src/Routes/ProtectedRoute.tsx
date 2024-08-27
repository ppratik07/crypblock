import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
    element: React.ReactElement;
    path: string;
}

const ProtectedRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const location = useLocation();
    const isPasswordSet = localStorage.getItem('passwordSet') === 'true';

    return isPasswordSet ? (
        element
    ) : (
        <Navigate to="/" state={{ from: location }} replace />
    );
};

export default ProtectedRoute;

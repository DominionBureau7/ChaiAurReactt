//The reason your file is UserContext.js and not UserContext.jsx is because it does not contain any JSX code. You only created a Context object, not a component that returns UI.
import React from 'react';

const UserContext = React.createContext()
export default UserContext;

//_____Context is a provider as it provides with carried data.

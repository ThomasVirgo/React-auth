const loginAction = (user, token) => (
    {
        type: 'LOGIN',
        user,
        token
    }
);

export default loginAction;

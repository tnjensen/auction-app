export const LoginStart = () => ({
    type: "LOGIN_START",
});

export const LoginSucess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
    payload: error,
});

export const follow = (userId) => ({
    type: "FOLLOW",
    payload: userId,
});

export const unfollow = (userId) => ({
    type: "UNFOLLOW",
    payload: userId,
});
export const updateUser = (user, id) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/user/${id}`,
        data: user,
        contentType: false,
        processData: false
    })
);

export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
);

//extra
export const fetchAllUsers = () => (
    $.ajax({
        method: "GET",
        url: `/api/users`,
        // data: user
    })
);
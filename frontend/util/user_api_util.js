export const updateUser = (user, id) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${id}`,
        data: user,
        contentType: false,
        processData: false
    })
);

export const fetchUser = id => ( //userId
    $.ajax({
        method: 'GET',
        url: `/api/users/${id}` //userId
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
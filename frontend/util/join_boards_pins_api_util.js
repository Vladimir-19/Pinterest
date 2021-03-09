
// change the name to createBoardPin
// export const pinToBoard = (boardPin) => {
//     return $.ajax({
//         method: "POST",
//         url: "/api/joinboardspins",
//         // url: `/api/boards_pins`,
//         // data: { boardPin: {pin_id: boardPin.pinId, board_id: boardPin.boardId} } //was this
//         data: { boardPin }
//     })
// };

export const pinToBoard = boardPin => (
    $.ajax({
        method: "POST",
        url: `/api/joinboardspins`,
        data: { boardPin }
    })
);

export const deletePinOnBoard = (boardPin) => {
    return $.ajax({
        method: "DELETE",
        // user id: 3
        // url: '/api/joinboardspins/3',
        url: `/api/joinboardspins/${boardPinId}`,
        data: { boardPin }
    })
};

// extra
export const fetchAllBoardsPins = () => (
    $.ajax({
        method: "GET",
        url: `/api/joinboardspins`
        // url: `/api/boards_pins`
    })
)
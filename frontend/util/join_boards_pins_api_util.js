
// change the name to createBoardPin
export const pinToBoard = (boardPin) => {
    return $.ajax({
        method: "POST",
        url: "/api/joinboardspins",
        // data: { boardPin: {pin_id: boardPin.pinId, board_id: boardPin.boardId} }
        // try this 
        data: { boardPin }
    })
};

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
    })
)
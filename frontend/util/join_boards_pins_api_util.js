
// change the name
export const pinToBoard = (boardPin) => {
    return $.ajax({
        method: "POST",
        url: "/api/joinboardspins",
        data: { boardPin: {pin_id: boardPin.pinId, board_id: boardPin.boardId} }
    })
};

export const deletePinOnBoard = (boardPin) => {
    return $.ajax({
        method: "DELETE",
        url: 'apijoinboardsoins/4',
        data: { boardPin }
    })
};
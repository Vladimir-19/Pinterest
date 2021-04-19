
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
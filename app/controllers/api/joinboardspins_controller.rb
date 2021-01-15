class Api::JoinboardspinsController < ApplicationController
           
    #   before_action :require_login

    def create 
        @boardPin = JoinBoardsPin.new(boardPin_params)
        if @boardPin.save 
            # @board = Board.find(@boardPin.board_id)
            render "api/boards/show"
        else
            #render json: @board.errors.full_messages, status: 422
             render json: @boardPin.errors.full_messages, status: 422
        end
    end

    # ??? 
    def index 
        @boardsPins = JoinBoardsPin.all
        render 'api/boards/index'
    end

    def destroy
        # @boardPin = JoinBoardsPin.find_by_credentials(params[:pin_id], params[:board_id])
        @boardPin = current_user.boards_pins.find(params[:id])

        if @boardPin
            @boardPin.destroy
            render "api/boards/show"
        else
            # render json: @board.errors.full_messages, status: 422
            render json: @boardPin.errors.full_messages, status: 401
        end
    end


    private

    def boardPin_params
        params.require(:boardPin).permit(:board_id, :pin_id)
    end
end
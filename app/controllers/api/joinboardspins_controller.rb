class Api::JoinboardspinsController < ApplicationController
           
    def create 
        @boardPin = JoinBoardsPin.new(boardPin_params)
        if @boardPin.save 
            render "api/boards/show"
        else
            render json: @boardPin.errors.full_messages, status: 422
        end
    end

    # ??? 
    def index 
        @boardsPins = JoinBoardsPin.all
        render 'api/boards/index'
    end

    def destroy
        @boardPin = current_user.boards_pins.find(params[:id])

        if @boardPin
            @boardPin.destroy
            render "api/boards/show"
        else
            render json: @boardPin.errors.full_messages, status: 401
        end
    end


    private

    def boardPin_params
        params.require(:boardPin).permit(:board_id, :pin_id)
    end
end
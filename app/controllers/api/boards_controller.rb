class Api::BoardsController < ApplicationController 
      
    def create
        @board = Board.new(board_params)
        @board.user_id = current_user.id

        if @board.save
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def show 
        @board = Board.find_by(params[:id])
        render "api/boards/show"
    end

    def index
        @boards = Board.all
        render "api/boards/index"
    end

    def update
        @board = Board.find(params[:id])

        if @board.update(board_params)
            render :show
        else
            render json: ["Can't edit this board!"], status: 401
        end
    end

    def destroy
        @board = current_user.boards.find_by(id: params[:id])

        if @board && @board.destroy
            @board.destroy
            render "api/boards/show"
        else
            render json: ["Can't delete this board!"], status: 401
        end
    end

    private 

    def board_params
        params.require(:board).permit(:title, :description, :user_id) #:secret
    end
end
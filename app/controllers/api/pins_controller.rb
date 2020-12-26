class Api::PinsController < ApplicationController

    def create
        @pin = Pin.new(pin_params)
        @pin.user_id = current_user.id 
        if @pin.save 
            render "api/pins/show"
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def show 
        @pin = Pin.find(params[:id])
        render "api/pins/show"
    end

    def index 
        @pin = Pin.all 
        render "api/pins/index"
    end

    def update 
        @pin = Pin.find_by(params[:id])
        if @pin.update(pin_params)
            render "api/pins/show"
        else 
            render json: ["Can't edit this pin!"], status: 401
        end
    end

    def destroy
        @pin = current_user.pins.find_by(id: params[:id])
        if @pin 
            @pin.destroy
            render "api/pins/show"
        else
            render json: ["You can only delete your own pins"], status: 422
        end
    end

    private

    def pin_params
        params.require(:pin).permit(:title, :description, :url, :photo)
    end
end
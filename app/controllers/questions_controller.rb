class QuestionsController < ApplicationController

	def show
		@question = Question.random_question
		@response = Response.new
	end

	def create
		number1 = params[:number1].to_f
		number2 = params[:number2].to_f
		number3 = params[:number3].to_f
		operation = params[:operation]
		question = Question.new(number1, number2, number3, operation)

		if question.score == params[:correct]
			flash[:notice] = "That is correct!"
		else
			flash[:notice] = "That is incorrect. Try again."
		end
  	redirect_to questions_path

  end



end

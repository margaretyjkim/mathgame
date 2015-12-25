class Question
	attr_accessor :number1, :number2, :operation, :number3
	def initialize(number1, number2, number3, operation)
		@number1 = number1
		@number2 = number2
		@number3 = number3
		@operation = operation

	end

	def self.random_question
		number1 = rand(1..10)
		number2 = rand(1..10)
		number3 = random_answer
		operation = random_operation
		Question.new(number1, number2, number3, operation)
	end

	def score
		if solve == number3
			return 'yes'
		else
			return 'no'
		end
	end

	def self.random_answer
		return rand(1..100)
	end

	def self.random_operation
		['+', '-', '*', '/'].sample
	end

	def solve
		if self.operation == '+'
			@number1 + @number2
		elsif self.operation == '-'
			@number1 - @number2
		elsif self.operation == '*'
			@number1 * @number2
		else
			@number1 / @number2
		end
	end

end

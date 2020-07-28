# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

# defines a method that takes in an array
def odd_sort array
    # create a variable that selects the odd numbers from the aray
    only_odd_numbers = array.select do |value|
        value.is_a?(Numeric) && value.odd?
    end
    #sort this variable from least to greatest
    only_odd_numbers.sort
end

# p odd_sort fullArr1
# p odd_sort fullArr2



# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.

class Bike
    def initialize (model, wheels = 2, frame)
        @model = model
        @wheels = wheels
        @frame = frame
        @speedometer = 0
    end

    def get_info
        "My #@model bike has #@wheels wheels and a super cool #@frame frame."
    end

    def ring_bell
        @bell = 'ring ring ring!'
    end
    
    def speed
        @speedometer
    end
    def pedal_faster num
        @speedometer += num
    end
    def brake num
        value = @speedometer -= num
        if value >= 0
            value
        else 
            value = 0
        end
    end
end

my_bike = Bike.new '6KU', 'carbon-fiber'
p my_bike.get_info 

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.

p my_bike.ring_bell

# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.

p my_bike.speed

# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

p my_bike.pedal_faster 10
p my_bike.brake 15


# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

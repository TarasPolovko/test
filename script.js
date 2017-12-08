document.addEventListener('DOMContentLoaded', function() {
    // Coordinates of departure and destination places and the shortest way
    var departure = [2, 0.4];
    var destination = [0, 0.4];
    var shortestWay;

    // Find the length of the shortest route 
    function perfectCity(departure, destination) {
        if (!conditionsChecking()) {
            return;
        }

        if (isOnTheSameSector(departure, destination) && !isOnTheSameStreet(departure, destination)) {
            if (Math.ceil(departure[0]) == Math.ceil(destination[0])) {
                return shorterWay(departure[0], destination[0]) + Math.abs(departure[1] - destination[1]);
            }

            return Math.abs(departure[0] - destination[0]) + shorterWay(departure[1], destination[1]);
        }

        return Math.abs(departure[0] - destination[0]) + Math.abs(departure[1] - destination[1]);
    }

    function conditionsChecking() {
        // check if the range is correct
        if (departure.some(element => element < 0 || element > 10) || destination.some(element => element < 0 || element > 10)) {
            alert("Wrong coordinates! It should be between 0 and 10.");
            return false;
        }
        // check if there's at least one integer in array
        if (!departure.some(element => Number.isInteger(element)) || !destination.some(element => Number.isInteger(element))) {
            alert("Wrong departure or destination coordinates. There's no integer!");
            return false;
        }
        return true;
    }

    // Check if the departure point is on the same street with the destination point
    function isOnTheSameStreet(departure, destination) {
        for (var i = 0; i < 2; i++) {
            if (Number.isInteger(departure[i]) && Number.isInteger(destination[i])) {
                if (departure[i] == destination[i]) {
                    console.log('here');
                    return true;
                }
                return false;
            }
        }
        return false;
    }

    // Check if the departure point is in the same sector with destination point
    function isOnTheSameSector(departure, destination) {
        for (var i = 0; i < 2; i++) {
            if (!Number.isInteger(departure[i]) && !Number.isInteger(destination[i])) {
                if (Math.ceil(departure[i]) == Math.ceil(destination[i])) {
                    return true;
                }
            }
        }
        return false;
    }

    // Find the shortest way for same sector coordinates
    function shorterWay(coordinateOne, coordinateTwo) {
        var oneWay = (Math.ceil(coordinateOne) - coordinateOne) + (Math.ceil(coordinateTwo) - coordinateTwo);
        var anotherWay = coordinateOne + coordinateTwo;

        return Math.min(oneWay, anotherWay);
    }

    shortestWay = perfectCity(departure, destination);
    console.log(shortestWay ? +shortestWay.toFixed(2) : "Wrong conditions");
});
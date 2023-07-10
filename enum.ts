//Numeric Enum

enum CardinalDirections{
    North,
    East,
    South,
    West
}

let currentDirection = CardinalDirections.North;
console.log(currentDirection);

// currentDirection = 'North'//Type '"North"' is not assignable to type 'CardinalDirections'.ts(2322)

// Numeric Enum - initialized

enum CardinalDirectionsInitialized{
    North=1,
    East,
    South,
    West
}

// currentDirection = CardinalDirectionsInitialized.North;//Type 'CardinalDirectionsInitialized.North' is not assignable to type 'CardinalDirections'.ts(2322)


console.log(CardinalDirectionsInitialized.North)


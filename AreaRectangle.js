function calculateArea(length, width){
    if(length <= 0){
        throw new RangeError("Length should be positive number!");
    }

    if(width <= 0){
        throw new RangeError("Width should be positive number!");
    }
    const area = length * width;
    console.log("Area of rectangle",area);
}

calculateArea(2,4);
// calculateArea(0,2);
calculateArea(2,0);
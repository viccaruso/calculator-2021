// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract, multiply, divide, remainder } from '../mathactions.js';
const test = QUnit.test;

test('add(1, 1)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(1, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract(199, 4)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 195;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(199, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiply(5, 5)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 25;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divide(100, 10)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(100, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('remainder(5, 2)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = remainder(5, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
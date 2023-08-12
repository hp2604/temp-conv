
# Temperature Converter App

The Temperature Converter App is a simple web application that allows users to convert temperatures between Celsius and Fahrenheit. This app is built using HTML, CSS, and JavaScript.

## Getting Started

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser.

## Usage

1. Enter the temperature value in the input field labeled "Temperature."
2. Choose the desired unit for conversion from the dropdown labeled "Unit."
3. Click the "Convert" button to see the converted temperature in the opposite unit.
4. The result will be displayed in the element with the ID "result."

## Code Explanation

- The `tempInput` variable is used to store the reference to the input field where the user enters the temperature.
- The `unitSelect` variable is used to store the reference to the dropdown menu where the user selects the unit for conversion.
- The `convertButton` variable is used to store the reference to the button that triggers the conversion process.
- The `result` variable is used to store the reference to the element where the converted result will be displayed.
- An event listener is added to the "Convert" button using the `addEventListener` method. When the button is clicked, the conversion logic is executed.
- The temperature value and selected unit are retrieved from the input fields.
- If the selected unit is Celsius, the temperature is converted to Fahrenheit using the formula `(Celsius * 9/5) + 32` and displayed in the result element.
- If the selected unit is Fahrenheit, the temperature is converted to Celsius using the formula `(Fahrenheit - 32) * 5/9` and displayed in the result element.

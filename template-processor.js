// Create a TemplateProcessor class
function TemplateProcessor(template) {
  this.template = template;
}

// Define the fillIn method on the TemplateProcessor prototype
TemplateProcessor.prototype.fillIn = function (dictionary) {
  // Use a regular expression to find and replace template placeholders
  return this.template.replace(/{{(.*?)}}/g, function (match, key) {
    // Use the key to look up the corresponding value in the dictionary
    return dictionary.hasOwnProperty(key) ? dictionary[key] : '';
  });
};

// Example usage:
var template = "My favorite month is {{month}} but not the day {{day}} or the year {{year}}.";
var dataTemplate = new TemplateProcessor(template);

var dictionary={month:'july',day:'1',year:'2016'};
var str = dataTemplate.fillIn(dictionary);

 
//assert(str === 'My favorite month is July but not the day 1 or the year 2016');
//var filledTemplate = processor.fillIn(data);
console.log(str); // Output: "Hello, John! You are 30 years old."
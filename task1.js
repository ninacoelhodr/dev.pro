
const fs = require('fs');

function logMessage(filename, message, level) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${level}] ${message}\n`;
  fs.appendFile(filename, logEntry, (err) => {
    if (err) {
      console.error(`Error writing to ${filename}: ${err}`);
    } else {
      console.log(`Log entry written to ${filename}`);
    }
  });
}

// Example usage:
log_message("application.log", "User logged in", "INFO");
log_message("application.log", "Failed login attempt", "WARNING");




// Test Scenarios for Logger function
// 1. Test if the log file is created and the message is written with the correct format.
// 2. Test if the timestamp in the log is in the expected format.
// 3. Test if the log level (INFO, WARNING, etc.) is correctly included in the log entry.
// 4. Test if the function can handle various types of log messages (e.g., empty message, special characters).
// 5. Test if the function can handle different log levels (INFO, WARNING, ERROR, etc.).



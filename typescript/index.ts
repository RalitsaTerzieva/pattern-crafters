class Logger {
  private static instance: Logger;
  
  // Private constructor prevents external instantiation
  private constructor() {}

  // Global access point to the instance
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    console.log(`[LOG]: ${message}`);
  }
}

// Usage:
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("This is a singleton logger!");

// Verify both variables reference the same instance
console.log(logger1 === logger2); // true

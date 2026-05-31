import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

class DataUtil {
  /**
   * Reusable helper to read any CSV file and convert it into a JavaScript object array
   * @param {string} relativeFilePath - The path to the CSV file relative to the project root
   */
  static getTestData(relativeFilePath) {
    try {
      // Resolve the absolute path from the project root directory
      const absolutePath = path.resolve(process.cwd(), relativeFilePath);
      
      // Read the raw text contents of the file
      const fileContent = fs.readFileSync(absolutePath, 'utf-8');
      
      // Parse it cleanly into an array of objects
      return parse(fileContent, {
        columns: true,
        skip_empty_lines: true
      });
    } catch (error) {
      throw new Error(`❌ DataUtil Error: Failed to read CSV at ${relativeFilePath}. Original error: ${error.message}`);
    }
  }
}

export default DataUtil;
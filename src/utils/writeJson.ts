import fs from "fs";
import path from "path";

/**
 * Writes data to a JSON file with a dynamic path.
 * @param database - The name of the database (used as the JSON file name).
 * @param data - The data to be written to the file.
 * @returns A promise that resolves when the file is successfully written.
 */
export async function writeToJSON(
  database: string,
  data: unknown,
): Promise<string> {
  try {
    // Construct the JSON file path dynamically
    const jsonPath = path.join(
      process.cwd(),
      "data/database",
      `${database}.json`
    );
    await fs.promises.writeFile(jsonPath, JSON.stringify(data), "utf-8");

    console.log(`File successfully written to ${jsonPath}`);
    return `File successfully written to ${jsonPath}`
  } catch (error) {
    console.error("Error writing to JSON file:", error);
    throw new Error("Failed to write to JSON file");
  }
}

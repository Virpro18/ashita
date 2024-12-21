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
): Promise<void> {
  try {
    // Construct the JSON file path dynamically
    const jsonPath = path.join(
      process.cwd(),
      "data/database",
      `${database}.json`
    );
    const jsonContent = fs.readFileSync(jsonPath, "utf-8");
    const datas = JSON.parse(jsonContent);
    console.log(datas)
    // const index: number = datas.data.findIndex(
    //   (item: ProjectData_SubData) => item.id === id
    // );
    // datas.data[index] = { ...datas.data[index], ...datas.projectData };
    datas.datas = data;

    // Convert data to formatted JSON string
    const jsonData = JSON.stringify(datas, null, 2);

    // Write the JSON data to the file
    await fs.promises.writeFile(jsonPath, jsonData, "utf-8");

    console.log(`File successfully written to ${jsonPath}`);
  } catch (error) {
    console.error("Error writing to JSON file:", error);
    throw new Error("Failed to write to JSON file");
  }
}

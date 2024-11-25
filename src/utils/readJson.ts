import path from "path"
import fs from "fs"
import { database } from '../types/database';

const readJson = (database: string): database => {
    const jsonPath = path.join(process.cwd(), "data/database", `${database}.json`)
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
    const jsonData: database = JSON.parse(jsonContent)
    return jsonData
}

export default readJson

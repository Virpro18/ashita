import path from "path"
import fs from "fs"
import { ProjectData } from '../types/database';

const readJson = (database: string): ProjectData => {
    const jsonPath = path.join(process.cwd(), "data/database", `${database}.json`)
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
    const jsonData: ProjectData = JSON.parse(jsonContent)
    return jsonData
}

export default readJson

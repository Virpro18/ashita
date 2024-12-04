import path from "path"
import fs from "fs"

const readJson = (database: string) => {
    const jsonPath = path.join(process.cwd(), "data/database", `${database}.json`)
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
    const jsonData = JSON.parse(jsonContent)
    return jsonData
}

export default readJson

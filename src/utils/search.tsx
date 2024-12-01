import readJson from "./readJson"
import { ProjectData_SubData } from "@/types/database"

const search = (database:string) => {
    const {data} = readJson(database)
    const id = (query:string) => data.filter((item:ProjectData_SubData) => item.id.includes(query))
    const title = (query:string) =>  data.filter((item:ProjectData_SubData) => item.title.toLowerCase().includes(query))
    const all = () => data
    return {id,title,all}
}       

export default search
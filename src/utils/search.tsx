import readJson from "./readJson"
import { data } from "@/types/database"

const search = (database:string) => {
    const {data} = readJson(database)
    const id = (query:string) => data.filter((item:data) => item.id.includes(query))
    const name = (query:string) =>  data.filter((item:data) => item.name.includes(query))
    const all = () => data
    return {id,name,all}
}       

export default search
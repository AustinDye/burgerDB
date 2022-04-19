import { BorgerDB } from "../db/BorgerDB"

class BorgersServices{

    async getBorgers(){
        return BorgerDB.borgers
    }
}
export const borgersServices = new BorgersServices()
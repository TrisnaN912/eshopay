import Sequelize from "sequelize";
import config from "./config";

const sequelize = new Sequelize(
    config.db_name,
    config.db_username,
    config.db_password,
    {
        dialect:'postgres'
    }
)

sequelize
    .authenticate()
    .then(()=> console.log('Connection has been estabilished successfully'))
    .cath(err=>console.log(err))

export {sequelize}
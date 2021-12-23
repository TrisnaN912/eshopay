const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3001,
    jwtScret : process.env.JWT_SCRET || "Your_secret_key",
    db_name:"carts",
    db_username:"postgres",
    db_password:"Lalapo123",
    URL_DOMAIN:""
}

export default config
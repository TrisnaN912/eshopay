const create = async(req,res)=>{
    try {
        const result = await req.context.models.carts.create({
            cart_createdon : new Date(),
            cart_status : req.body.cart_status,
            cart_user_id : req.body.cart_user_id
        })
        res.send(result)
    } catch (error) {
        return res.status(404).send("no data input")
    }
}

const findAll = async(req,res)=>{
    try {
        const result = await req.context.models.carts.findAll()
        return res.send(result)
    } catch (error) {
        return res.status(404).send("no data found")
    }
}

export default{
    create,
    findAll,
}
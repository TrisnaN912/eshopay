const create = async(req,res)=>{
    try {
        const result = await req.context.models.line_items.create({
            lite_prod_id : req.body.lite_prod_id,
            lite_cart_id : req.body.lite_cart_id,
            lite_qty : req.body.lite_qty,
            lite_price : req.body.lite_price,
            lite_total_price : lite_price * lite_qty,
            lite_status : req.body.lite_status,
            lite_order_name : req.body.lite_order_name
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
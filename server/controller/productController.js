const create = async (req,res)=>{

    try {
        const result = await req.context.models.products.create({
            prod_name : req.body.prod_name,
            prod_price : req.body.prod_price,
            prod_desc : req.body.prod_desc,
            prod_url_image : req.body.prod_url_image,
            prod_rating : req.body.prod_rating,
            prod_view_count : req.body.prod_view_count,
            prod_user_id : req.body.prod_user_id,
            prod_cate_id : req.body.prod_cate_id

        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send("no data input")
    }
}

const findAll = async(req,res)=>{
    try {
        const result = await req.context.models.products.findAll()
        return res.send(result)
    } catch (error) {
        return res.status(404).send("no data found")
    }
}

export default {
    create,
    findAll
}
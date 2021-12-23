const create = async(req,res)=>{
    try {
        const result = await req.context.models.category.create({
            cate_name : req.body.cate_name
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send("no data input")
    }
}

const findAll = async(req,res)=>{
    try {
        const result = await req.context.models.category.findAll()
        return res.send(result)
    } catch (error) {
        return res.status(404).send("no data found")
    }
}

export default{
    create,
    findAll,
}
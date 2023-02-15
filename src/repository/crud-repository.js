class CrudRepository{
    constructor(model){
        this.model = model
    }

    async create(data){
        try {
            const create = await this.model.create(data)
            return create
        } catch (error) {
          console.log(error)
          console.log("Something Went Wrong")
          throw error  
        }
    }

    async get(id){
        try {
            const res = await this.model.findById(id)
            return res
        } catch (error) {
            console.log(error)
            console.log("Something Went Wrong")
            throw error  
        }
    }

    async destroy(id){
        try {
            const res =  await this.model.findByIdAndDelete(id)
            return res
        } catch (error) {
            console.log(error)
            console.log("Something Went Wrong")
            throw error  
        }
    }

    async getAll(){
        try {
            const res = await this.model.find({})
            return res
        } catch (error) {
            console.log(error)
            console.log("Something Went Wrong")
            throw error
              
        }
    }

    async update(id,data){
        try {
            const res = await this.model.findByIdAndUpdate(id,data,{new:true})
            return res
        } catch (error) {
            console.log(error)
            console.log("Something Went Wrong in crud repo") 
            throw error 
        }
    }
}

export default CrudRepository
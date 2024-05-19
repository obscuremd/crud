import mongoose from 'mongoose'

const mongoUrl = "mongodb+srv://mderhenede:Rukki_1357@cluster0.qsd2cin.mongodb.net/NextJsCRUD"

export const connectMongoDb =async()=>{
    try {
        await mongoose.connect(mongoUrl)
        console.log('connected')
    } catch (error) {
        console.log(error)
    }
}


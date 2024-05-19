import mongoose, { models, Schema } from "mongoose";

const TopicSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true}
},{timestamps:true})

export const Topics = models.Topic || mongoose.model('Topic', TopicSchema)

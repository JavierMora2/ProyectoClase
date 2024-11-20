import {Schema, model} from "mongoose"

interface IQuestion{
    title: String;
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory: boolean,
    questionnaireId: Schema.Types.ObjectId | String;
}

const QuestionSchema = new Schema<IQuestion>({
    title:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:["radio","checkbox","select","text"],
        required:true
    },
    isMandatory:{
        type:Boolean,
        required:true
    },
    questionnaireId:{
        type:String,
        ref: "questionnaires",
        required:true
    },
});
export const QuestionModel = model("questions", QuestionSchema);


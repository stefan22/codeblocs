import { Schema, model, models } from 'mongoose';

const CodeblocSchema = new Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    codebloc: {
        type: String,
        required: [true, 'Some code is required.'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.'],
    }
});

const Codebloc = models.Codebloc || model('Codebloc', CodeblocSchema);

export default Codebloc;

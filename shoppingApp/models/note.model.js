module.exports = (mongoose) => {
const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

return mongoose.model('note', NoteSchema);
};
module.exports = (operations) =>{
var create = (req,res) => {
    if(!req.body.content){
        return res.status(400).send(
            {message:'content cannot be empty'}
        );
    }
     operations.create(req, res);
    };

var findAll = (req,res) => {operations.getAll(req,res)};

var findOne = (req,res) => {operations.getById(req,res)};

var remove = (req, res) =>{operations.remove(req,res)};

var update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
operations.update(req,res)
};

return {create: create, findAll: findAll, findOne:findOne, remove:remove, update:update}
}
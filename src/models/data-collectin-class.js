'use strict';
class DataManeger {
    constructor(model) {
        this.model = model;
    }
    read(_id)//the id save in mongodb like this _id so we don't need to search the _id:id
    {
        if (_id) {
            return this.model.find({ _id });
        } else {
            return this.model.find({});
        }
    }
    creat(obj) {
        const doc = new this.model(obj);
        return doc.save();
    }
    update(_id, obj) {
        return this.model.findByIdAndUpdate(_id, obj, { new: true });
    }
    delete(_id) {
        return this.model.findByIdAndDelete(_id);
    }
}


module.exports = DataManeger;
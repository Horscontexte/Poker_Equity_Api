const Result = require('../model/result.model.js');

//Create new Result
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Result content can not be empty"
        });
    }
    let evResult = "test"
    // Create a Result
    const result = new Result({
        heroHand: req.body.heroHand || "No result heroHand!",
        ev: evResult,
        callingRange: {
          vilainRange1: req.body.callingRange.vilainRange1,
          vilainRange2: req.body.callingRange.vilainRange2,
        },
        gameConfiguration: {
          ante: req.body.gameConfiguration.ante,
          players: req.body.gameConfiguration.players,
          stack: req.body.gameConfiguration.stack,
        }
    });

    // Save Result in the database
    result.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the result."
        });
    });
};

// Retrieve all Results from the database.
exports.findAll = (req, res) => {
    Result.find()
    .then(results => {
        res.send(results);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving results."
        });
    });
};

// Find a single result with a equityID
exports.findOne = (req, res) => {
    Result.findById(req.params.equityId)
    .then(result => {
        if(!result) {
            return res.status(404).send({
                message: "Result not found with id " + req.params.equityId
            });
        }
        res.send(result);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Result not found with id " + req.params.equityId
            });
        }
        return res.status(500).send({
            message: "Something wrong retrieving result with id " + req.params.equityId
        });
    });
};
// Update a result
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Result content can not be empty"
        });
    }

    // Find and update result with the request body
    Result.findByIdAndUpdate(req.params.equityId, {
      title: req.body.title || "No result title",
      heroHand: req.body.herohand,
      vilainHand: req.body.vilainHand,
      heroEquity: req.body.heroEquity,
      vilainEquity: req.body.vilainEquity,
      splitEquity: req.body.splitEquity,
    }, {new: true})
    .then(result => {
        if(!result) {
            return res.status(404).send({
                message: "Result not found with id " + req.params.equityId
            });
        }
        res.send(result);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Result not found with id " + req.params.equityId
            });
        }
        return res.status(500).send({
            message: "Something wrong updating result with id " + req.params.equityId
        });
    });
};

// Delete a note with the specified equityId in the request
exports.delete = (req, res) => {
    Result.findByIdAndRemove(req.params.equityId)
    .then(result => {
        if(!result) {
            return res.status(404).send({
                message: "Result not found with id " + req.params.equityId
            });
        }
        res.send({message: "Result deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Result not found with id " + req.params.equityId
            });
        }
        return res.status(500).send({
            message: "Could not delete result with id " + req.params.equityId
        });
    });
};

const Equity = require('./equity.model.js');

//Create new Equity
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Equity content can not be empty"
        });
    }

    // Create a Equity
    const equity = new Equity({
        title: req.body.title || "No equity title",
        heroHand: req.body.heroHand,
        vilainHand: req.body.vilainHand,
        heroEquity: req.body.heroEquity,
        vilainEquity: req.body.vilainEquity,
        splitEquity: req.body.splitEquity,
    });

    // Save Equity in the database
    equity.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the equity."
        });
    });
};

// Retrieve all Equitys from the database.
exports.findAll = (req, res) => {
    Equity.find()
    .then(equitys => {
        res.send(equitys);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving equitys."
        });
    });
};

// Find a single equity with a equityID
exports.findOne = (req, res) => {
    Equity.findById(req.params.equityId)
    .then(equity => {
        if(!equity) {
            return res.status(404).send({
                message: "Equity not found with id " + req.params.equityId
            });
        }
        res.send(equity);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Equity not found with id " + req.params.equityId
            });
        }
        return res.status(500).send({
            message: "Something wrong retrieving equity with id " + req.params.equityId
        });
    });
};

exports.findByTitle = (req, res) => {
    Equity.find({title: req.params.title})
    .then(equity => {
        if(!equity) {
            return res.status(404).send({
                message: "Equity not found with id " + req.params.title
            });
        }
        res.send(equity);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Equity not found with id " + req.params.title
            });
        }
        return res.status(500).send({
            message: "Something wrong retrieving equity with id " + req.params.title
        });
    });
};
// Update a equity
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Equity content can not be empty"
        });
    }

    // Find and update equity with the request body
    Equity.findByIdAndUpdate(req.params.equityId, {
      title: req.body.title || "No equity title",
      heroHand: req.body.herohand,
      vilainHand: req.body.vilainHand,
      heroEquity: req.body.heroEquity,
      vilainEquity: req.body.vilainEquity,
      splitEquity: req.body.splitEquity,
    }, {new: true})
    .then(equity => {
        if(!equity) {
            return res.status(404).send({
                message: "Equity not found with id " + req.params.equityId
            });
        }
        res.send(equity);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Equity not found with id " + req.params.equityId
            });
        }
        return res.status(500).send({
            message: "Something wrong updating equity with id " + req.params.equityId
        });
    });
};

// Delete a note with the specified equityId in the request
exports.delete = (req, res) => {
    Equity.findByIdAndRemove(req.params.equityId)
    .then(equity => {
        if(!equity) {
            return res.status(404).send({
                message: "Equity not found with id " + req.params.equityId
            });
        }
        res.send({message: "Equity deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Equity not found with id " + req.params.equityId
            });
        }
        return res.status(500).send({
            message: "Could not delete equity with id " + req.params.equityId
        });
    });
};

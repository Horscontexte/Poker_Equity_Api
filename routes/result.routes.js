module.exports = (app) => {
    const results = require('../controller/result.controller.js');
    const Result = require('../model/result.model.js');
    // Create a new result
    app.post('/results', results.create);

    // Retrieve all results
    app.get('/results', results.findAll);

    // Retrieve a single result with equityId
    app.get('/results/:equityId', results.findOne);

    // Update a Note with equityId
    app.put('/results/:equityId', results.update);

    // Delete a Note with equityId
    app.delete('/results/:equityId', results.delete);
}

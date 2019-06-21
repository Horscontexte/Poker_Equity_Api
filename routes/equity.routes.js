module.exports = (app) => {
    const equitys = require('../controller/equity.controller.js');
    const Equity = require('../model/equity.model.js');
    // Create a new equity
    app.post('/equitys', equitys.create);

    // Retrieve all equitys
    app.get('/equitys', equitys.findAll);
    app.get('/equitys/:title', equitys.findByTitle);

    // Retrieve a single equity with equityId
    app.get('/equitys/:equityId', equitys.findOne);

    // Update a Note with equityId
    app.put('/equitys/:equityId', equitys.update);

    // Delete a Note with equityId
    app.delete('/equitys/:equityId', equitys.delete);
}

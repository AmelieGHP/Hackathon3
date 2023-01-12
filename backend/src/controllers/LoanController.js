const LoanModel = require("../models/LoanModel");


const getLoanByVehicleId = (req, res) => {
    const id = parseInt(req.params.id, 10);

    LoanModel.findLoanByVehicleId(id)
        .then(([loan]) => {
            if (loan[0] != null) {
                res.status(200).send(loan);
            } else {
                res.sendStatus(404);
            }
        })
        .catch((err) => {
            console.error(err);
            return res.status(500).send("Error retrieving data from database");
        });
};

const postLoan = (req, res) => {

    LoanModel.postLoan(req)
        .then((result) => {
            console.log(result)
            res.send({ loan: req.body, }).status(201);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error saving the reservation");
        });
};

module.exports = {
    getLoanByVehicleId,
    postLoan
};
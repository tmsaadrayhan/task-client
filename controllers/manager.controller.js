const { manager } = require('../models');
const db = require('../models');
const Manager = db.manager;
const Employee = db.employee;


// handler for creating manager

exports.create = (req ,res) =>{
     
  //get the req body
  const managerapi = {
       first_name : req.body.first_name,
       last_name : req.body.last_name,
        salary : req.body.salary
  }

  //store the managerapi in db

  Manager.create(managerapi).then(manager =>{
       console.log(`manager name : [${managerapi.name}] got inserted in db`);
       res.status(201).send(manager);
  }).catch(err => {
        console.log(`issue in creating the manager: [${managerapi.name}].Error message : ${err.message}`);
        res.status(500).send({
            message : "some internal error happenend"
        })
  })

}


// handler for getting all managers

exports.findAll = (req, res) =>{
  Manager.findAll().then(managers =>{
      res.status(200).send(managers);
  }).catch(err=>{
    res.status(500).send({
      message : `failed to fetch managers`
  })
})
}


//handler for getting manager by id
exports.findOne = (req, res) => {
  const managerId = req.params.id;   // get the parameter (after body i.e. in rest endpoint and not in json format body)

  Manager.findByPk(managerId).then(manager => {
      res.status(200).send(manager);
  }).catch(err => {
      res.status(500).send({
          message: "Some Internal error while fetching the manager based on the id"
      })
  })
}



/**
 * Update an existing product
 */
exports.update = (req, res) => {

  /**
   * Validation of the request body
   */

  if (!req.body.first_name || !req.body.last_name) {
      res.status(400).send({
          message: "Name of the manager can't be empty !"
      })
      return;
  }

  /**
   * Creation of the Manager object to be stored in the DB
   */
  const manager = {
      first_name: req.body.first_name,
      last_name : req.body.last_name,
      salary: req.body.salary
  };
  const managerId = req.params.id;

  Manager.update(manager, {
      returning: true,
      where: { id: managerId }
  }).then(updatedManager => {

      Manager.findByPk(managerId).then(manager=> {
          res.status(200).send(manager);
      }).catch(err => {
          res.status(500).send({
              message: "Some Internal error while fetching the manager based on the id"
          })
      })
  }).catch(err => {
      res.status(500).send({
          message: "Some Internal error while fetching the manager based on the id"
      })
  })
}



/**
 * Delete an existing product based on the product name
 */
exports.delete = (req, res) => {
  const managerId = req.params.id;

  Manager.destroy({
      where: { 
          id: managerId 
      }
  }).then(result => {
      res.status(200).send(
          {
          message: "Successfully deleted the manager"
      }
      );
  }).catch(err => {
      res.status(500).send({
          message: "Some Internal error while deleting the manager based on the id"
      })
  })
}



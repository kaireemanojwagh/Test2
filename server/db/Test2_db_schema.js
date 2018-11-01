/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/Test2_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_Test2_db_schema = [];
const db_Test2_db = [];

/**
 * SCHEMA DB Test2_db
 */



 /**
  * Project
  */
db_Test2_db_schema.Project = new mongoose.Schema({
	JsaNo: {
		type: 'String'
	},
	ProjectCode: {
		type: 'String'
	},
	ProjectName: {
		type: 'String'
	},
	StatusId: {
		type: 'Boolean'
	},
	VendorId: {
		type: 'Number'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * ProjectApproval
  */
db_Test2_db_schema.ProjectApproval = new mongoose.Schema({
	CreatedById: {
		type: 'Number'
	},
	CreatedOn: {
		type: 'Date'
	},
	IsActive: {
		type: 'Boolean'
	},
	Level: {
		type: 'Number'
	},
	ModifiedById: {
		type: 'Number'
	},
	ModifiedOn: {
		type: 'Date'
	},
	ProjectId: {
		type: 'Number'
	},
	UserId: {
		type: 'Number'
	},
	UserTypeId: {
		type: 'Number'
	},
	VendorId: {
		type: 'Number'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * User
  */
db_Test2_db_schema.User = new mongoose.Schema({
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	roles: [{
		type: 'String'
	}],
	surname: {
		type: 'String'
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



// Import schema customization
require('./Test2_db_customSchema.js');
var Test2_db_model = require('./Test2_db_crud.js');

// Declare mongoose model

db_Test2_db.Project = Test2_db_model.connection.model('Project', db_Test2_db_schema.Project );
db_Test2_db.ProjectApproval = Test2_db_model.connection.model('ProjectApproval', db_Test2_db_schema.ProjectApproval );
db_Test2_db.User = Test2_db_model.connection.model('User', db_Test2_db_schema.User );

module.exports = db_Test2_db;

// Create ADMIN user if does not exist
createUser.createUser();

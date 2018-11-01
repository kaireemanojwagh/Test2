
const app = require('../../../app.js');
const db_Test2_db = require('../../../db/Test2_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB ProjectApproval
 * 
	{
		CreatedById: {
			type: 'Integer'
		},
		CreatedOn: {
			type: 'Date'
		},
		IsActive: {
			type: 'Boolean'
		},
		Level: {
			type: 'Integer'
		},
		ModifiedById: {
			type: 'Integer'
		},
		ModifiedOn: {
			type: 'Date'
		},
		ProjectId: {
			type: 'Integer'
		},
		UserId: {
			type: 'Integer'
		},
		UserTypeId: {
			type: 'Integer'
		},
		VendorId: {
			type: 'Integer'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		
	}
 * 
 * 
 * 
 * Custom APIs
 *
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS



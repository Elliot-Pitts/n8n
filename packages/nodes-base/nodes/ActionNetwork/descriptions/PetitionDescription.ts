import {
	INodeProperties,
} from 'n8n-workflow';

import {
	petitionAdditionalFieldsOptions,
} from './SharedFields';

export const petitionOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'petition',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
			},
			{
				name: 'Get',
				value: 'get',
			},
			{
				name: 'Get All',
				value: 'getAll',
			},
			{
				name: 'Update',
				value: 'update',
			},
		],
		default: 'create',
		description: 'Operation to perform',
	},
] as INodeProperties[];

export const petitionFields = [
	// ----------------------------------------
	//             petition: create
	// ----------------------------------------
	{
		displayName: 'Origin System',
		name: 'originSystem',
		description: 'Source where the petition originated.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'petition',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		description: 'Title of the petition to create.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'petition',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'petition',
				],
				operation: [
					'create',
				],
			},
		},
		options: petitionAdditionalFieldsOptions,
	},

	// ----------------------------------------
	//              petition: get
	// ----------------------------------------
	{
		displayName: 'Petition ID',
		name: 'petitionId',
		description: 'ID of the petition to retrieve.',
		typeOptions: {
			loadOptionsMethod: 'getPetitions',
		},
		type: 'options',
		default: [],
		required: true,
		displayOptions: {
			show: {
				resource: [
					'petition',
				],
				operation: [
					'get',
				],
			},
		},
	},

	// ----------------------------------------
	//             petition: getAll
	// ----------------------------------------
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Return all results.',
		displayOptions: {
			show: {
				resource: [
					'petition',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		description: 'The number of results to return.',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				resource: [
					'petition',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
	},

	// ----------------------------------------
	//             petition: update
	// ----------------------------------------
	{
		displayName: 'Petition ID',
		name: 'petitionId',
		description: 'ID of the petition to update.',
		typeOptions: {
			loadOptionsMethod: 'getPetitions',
		},
		type: 'options',
		default: [],
		required: true,
		displayOptions: {
			show: {
				resource: [
					'petition',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'petition',
				],
				operation: [
					'update',
				],
			},
		},
		options: petitionAdditionalFieldsOptions,
	},
] as INodeProperties[];
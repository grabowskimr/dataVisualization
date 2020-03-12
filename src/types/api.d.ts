interface ResponseData<T> {
	data: T;
	status: number;
}

interface Groups {
	help: string;
	success: string;
	result: string[];
}

interface Packages {
	help: string;
	success: boolean;
	result: PackagesData;
}

interface PackagesData {
	count: number;
	sort: string;
	facets: object;
	results: Package[];
}

interface Package {
	license_title: string;
	maintainer: null | string;
	relationships_as_object: Array;
	private: boolean;
	maintainer_email: null | string;
	num_tags: number;
	id: string;
	metadata_created: string;
	metadata_modified: string;
	author: null | string;
	author_email: null | string;
	state: string;
	version: null | string;
	creator_user_id: string;
	type: string;
	resources: PackageResource[];
	title: string;
}

interface PackageResource {
	cache_last_updated: null | string;
	package_id: string;
	webstore_last_updated: null | string;
	id: string;
	size: null | number;
	state: string;
	resource_locator_function: string;
	hash: string;
	description: string;
	format: string;
	tracking_summary: {
		total: number;
		recent: number;
	};
	mimetype_inner: null;
	url_type: null;
	resource_locator_protocol: string;
	mimetype: null;
	cache_url: null;
	name: string;
	created: string;
	url: string;
	webstore_url: null | string;
	last_modified: null | string;
	position: number;
	revision_id: string;
	resource_type: null | string;
}

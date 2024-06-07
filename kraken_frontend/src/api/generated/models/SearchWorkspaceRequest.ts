/* tslint:disable */
/* eslint-disable */
/**
 * kraken
 * The core component of kraken-project
 *
 * The version of the OpenAPI document: 0.3.5
 * Contact: git@omikron.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Request to search the workspace
 * @export
 * @interface SearchWorkspaceRequest
 */
export interface SearchWorkspaceRequest {
    /**
     * the term to search for
     * @type {string}
     * @memberof SearchWorkspaceRequest
     */
    searchTerm: string;
}

/**
 * Check if a given object implements the SearchWorkspaceRequest interface.
 */
export function instanceOfSearchWorkspaceRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "searchTerm" in value;

    return isInstance;
}

export function SearchWorkspaceRequestFromJSON(json: any): SearchWorkspaceRequest {
    return SearchWorkspaceRequestFromJSONTyped(json, false);
}

export function SearchWorkspaceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchWorkspaceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'searchTerm': json['search_term'],
    };
}

export function SearchWorkspaceRequestToJSON(value?: SearchWorkspaceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'search_term': value.searchTerm,
    };
}


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
 * The request to create a new bearer token
 * @export
 * @interface CreateBearerTokenRequest
 */
export interface CreateBearerTokenRequest {
    /**
     * A descriptive name of the token
     * @type {string}
     * @memberof CreateBearerTokenRequest
     */
    name: string;
}

/**
 * Check if a given object implements the CreateBearerTokenRequest interface.
 */
export function instanceOfCreateBearerTokenRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function CreateBearerTokenRequestFromJSON(json: any): CreateBearerTokenRequest {
    return CreateBearerTokenRequestFromJSONTyped(json, false);
}

export function CreateBearerTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBearerTokenRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function CreateBearerTokenRequestToJSON(value?: CreateBearerTokenRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}


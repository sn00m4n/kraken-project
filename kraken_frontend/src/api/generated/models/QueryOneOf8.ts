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
import type { SearchType } from './SearchType';
import {
    SearchTypeFromJSON,
    SearchTypeFromJSONTyped,
    SearchTypeToJSON,
} from './SearchType';

/**
 * 
 * @export
 * @interface QueryOneOf8
 */
export interface QueryOneOf8 {
    /**
     * 
     * @type {SearchType}
     * @memberof QueryOneOf8
     */
    phone: SearchType;
}

/**
 * Check if a given object implements the QueryOneOf8 interface.
 */
export function instanceOfQueryOneOf8(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "phone" in value;

    return isInstance;
}

export function QueryOneOf8FromJSON(json: any): QueryOneOf8 {
    return QueryOneOf8FromJSONTyped(json, false);
}

export function QueryOneOf8FromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryOneOf8 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'phone': SearchTypeFromJSON(json['Phone']),
    };
}

export function QueryOneOf8ToJSON(value?: QueryOneOf8 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Phone': SearchTypeToJSON(value.phone),
    };
}


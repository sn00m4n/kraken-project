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
import type { SimpleDnsResolutionResult } from './SimpleDnsResolutionResult';
import {
    SimpleDnsResolutionResultFromJSON,
    SimpleDnsResolutionResultFromJSONTyped,
    SimpleDnsResolutionResultToJSON,
} from './SimpleDnsResolutionResult';

/**
 * 
 * @export
 * @interface SearchResultEntryOneOf4
 */
export interface SearchResultEntryOneOf4 {
    /**
     * 
     * @type {SimpleDnsResolutionResult}
     * @memberof SearchResultEntryOneOf4
     */
    dnsRecordResultEntry: SimpleDnsResolutionResult;
}

/**
 * Check if a given object implements the SearchResultEntryOneOf4 interface.
 */
export function instanceOfSearchResultEntryOneOf4(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "dnsRecordResultEntry" in value;

    return isInstance;
}

export function SearchResultEntryOneOf4FromJSON(json: any): SearchResultEntryOneOf4 {
    return SearchResultEntryOneOf4FromJSONTyped(json, false);
}

export function SearchResultEntryOneOf4FromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchResultEntryOneOf4 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dnsRecordResultEntry': SimpleDnsResolutionResultFromJSON(json['DnsRecordResultEntry']),
    };
}

export function SearchResultEntryOneOf4ToJSON(value?: SearchResultEntryOneOf4 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DnsRecordResultEntry': SimpleDnsResolutionResultToJSON(value.dnsRecordResultEntry),
    };
}


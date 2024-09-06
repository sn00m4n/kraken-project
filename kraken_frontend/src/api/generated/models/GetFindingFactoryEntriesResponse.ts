/* tslint:disable */
/* eslint-disable */
/**
 * kraken
 * The core component of kraken-project
 *
 * The version of the OpenAPI document: 0.4.2
 * Contact: git@omikron.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FullFindingFactoryEntry } from './FullFindingFactoryEntry';
import {
    FullFindingFactoryEntryFromJSON,
    FullFindingFactoryEntryFromJSONTyped,
    FullFindingFactoryEntryToJSON,
} from './FullFindingFactoryEntry';

/**
 * The list of all finding factory entries
 * @export
 * @interface GetFindingFactoryEntriesResponse
 */
export interface GetFindingFactoryEntriesResponse {
    /**
     * Map of all active finding factory identifiers and their finding definitions
     * @type {{ [key: string]: FullFindingFactoryEntry; }}
     * @memberof GetFindingFactoryEntriesResponse
     */
    entries: { [key: string]: FullFindingFactoryEntry; };
}

/**
 * Check if a given object implements the GetFindingFactoryEntriesResponse interface.
 */
export function instanceOfGetFindingFactoryEntriesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "entries" in value;

    return isInstance;
}

export function GetFindingFactoryEntriesResponseFromJSON(json: any): GetFindingFactoryEntriesResponse {
    return GetFindingFactoryEntriesResponseFromJSONTyped(json, false);
}

export function GetFindingFactoryEntriesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFindingFactoryEntriesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entries': (mapValues(json['entries'], FullFindingFactoryEntryFromJSON)),
    };
}

export function GetFindingFactoryEntriesResponseToJSON(value?: GetFindingFactoryEntriesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entries': (mapValues(value.entries, FullFindingFactoryEntryToJSON)),
    };
}

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
import type { SimpleService } from './SimpleService';
import {
    SimpleServiceFromJSON,
    SimpleServiceFromJSONTyped,
    SimpleServiceToJSON,
} from './SimpleService';

/**
 * 
 * @export
 * @interface FindingAffectedObjectOneOf3
 */
export interface FindingAffectedObjectOneOf3 {
    /**
     * 
     * @type {SimpleService}
     * @memberof FindingAffectedObjectOneOf3
     */
    service: SimpleService;
}

/**
 * Check if a given object implements the FindingAffectedObjectOneOf3 interface.
 */
export function instanceOfFindingAffectedObjectOneOf3(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "service" in value;

    return isInstance;
}

export function FindingAffectedObjectOneOf3FromJSON(json: any): FindingAffectedObjectOneOf3 {
    return FindingAffectedObjectOneOf3FromJSONTyped(json, false);
}

export function FindingAffectedObjectOneOf3FromJSONTyped(json: any, ignoreDiscriminator: boolean): FindingAffectedObjectOneOf3 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'service': SimpleServiceFromJSON(json['Service']),
    };
}

export function FindingAffectedObjectOneOf3ToJSON(value?: FindingAffectedObjectOneOf3 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Service': SimpleServiceToJSON(value.service),
    };
}


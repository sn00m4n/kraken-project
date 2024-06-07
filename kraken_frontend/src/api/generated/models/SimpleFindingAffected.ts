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
import type { AggregationType } from './AggregationType';
import {
    AggregationTypeFromJSON,
    AggregationTypeFromJSONTyped,
    AggregationTypeToJSON,
} from './AggregationType';

/**
 * The uuid's for objects affected by findings
 * @export
 * @interface SimpleFindingAffected
 */
export interface SimpleFindingAffected {
    /**
     * The finding this affected belongs to
     * @type {string}
     * @memberof SimpleFindingAffected
     */
    finding: string;
    /**
     * 
     * @type {AggregationType}
     * @memberof SimpleFindingAffected
     */
    affectedType: AggregationType;
    /**
     * The affected object's uuid
     * @type {string}
     * @memberof SimpleFindingAffected
     */
    affectedUuid: string;
}

/**
 * Check if a given object implements the SimpleFindingAffected interface.
 */
export function instanceOfSimpleFindingAffected(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "finding" in value;
    isInstance = isInstance && "affectedType" in value;
    isInstance = isInstance && "affectedUuid" in value;

    return isInstance;
}

export function SimpleFindingAffectedFromJSON(json: any): SimpleFindingAffected {
    return SimpleFindingAffectedFromJSONTyped(json, false);
}

export function SimpleFindingAffectedFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimpleFindingAffected {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'finding': json['finding'],
        'affectedType': AggregationTypeFromJSON(json['affected_type']),
        'affectedUuid': json['affected_uuid'],
    };
}

export function SimpleFindingAffectedToJSON(value?: SimpleFindingAffected | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'finding': value.finding,
        'affected_type': AggregationTypeToJSON(value.affectedType),
        'affected_uuid': value.affectedUuid,
    };
}


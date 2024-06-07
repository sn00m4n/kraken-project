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
import type { ServiceProtocolsOneOf3Sctp } from './ServiceProtocolsOneOf3Sctp';
import {
    ServiceProtocolsOneOf3SctpFromJSON,
    ServiceProtocolsOneOf3SctpFromJSONTyped,
    ServiceProtocolsOneOf3SctpToJSON,
} from './ServiceProtocolsOneOf3Sctp';

/**
 * 
 * @export
 * @interface ServiceProtocolsOneOf3
 */
export interface ServiceProtocolsOneOf3 {
    /**
     * 
     * @type {ServiceProtocolsOneOf3Sctp}
     * @memberof ServiceProtocolsOneOf3
     */
    sctp: ServiceProtocolsOneOf3Sctp;
}

/**
 * Check if a given object implements the ServiceProtocolsOneOf3 interface.
 */
export function instanceOfServiceProtocolsOneOf3(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sctp" in value;

    return isInstance;
}

export function ServiceProtocolsOneOf3FromJSON(json: any): ServiceProtocolsOneOf3 {
    return ServiceProtocolsOneOf3FromJSONTyped(json, false);
}

export function ServiceProtocolsOneOf3FromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceProtocolsOneOf3 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sctp': ServiceProtocolsOneOf3SctpFromJSON(json['Sctp']),
    };
}

export function ServiceProtocolsOneOf3ToJSON(value?: ServiceProtocolsOneOf3 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Sctp': ServiceProtocolsOneOf3SctpToJSON(value.sctp),
    };
}


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
import type { ManualPortCertainty } from './ManualPortCertainty';
import {
    ManualPortCertaintyFromJSON,
    ManualPortCertaintyFromJSONTyped,
    ManualPortCertaintyToJSON,
} from './ManualPortCertainty';
import type { PortProtocol } from './PortProtocol';
import {
    PortProtocolFromJSON,
    PortProtocolFromJSONTyped,
    PortProtocolToJSON,
} from './PortProtocol';

/**
 * The request to manually add a port
 * @export
 * @interface CreatePortRequest
 */
export interface CreatePortRequest {
    /**
     * The ip address the port is open on
     * @type {string}
     * @memberof CreatePortRequest
     */
    ipAddr: string;
    /**
     * The port to add
     * @type {number}
     * @memberof CreatePortRequest
     */
    port: number;
    /**
     * 
     * @type {ManualPortCertainty}
     * @memberof CreatePortRequest
     */
    certainty: ManualPortCertainty;
    /**
     * 
     * @type {PortProtocol}
     * @memberof CreatePortRequest
     */
    protocol: PortProtocol;
}

/**
 * Check if a given object implements the CreatePortRequest interface.
 */
export function instanceOfCreatePortRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ipAddr" in value;
    isInstance = isInstance && "port" in value;
    isInstance = isInstance && "certainty" in value;
    isInstance = isInstance && "protocol" in value;

    return isInstance;
}

export function CreatePortRequestFromJSON(json: any): CreatePortRequest {
    return CreatePortRequestFromJSONTyped(json, false);
}

export function CreatePortRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePortRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ipAddr': json['ip_addr'],
        'port': json['port'],
        'certainty': ManualPortCertaintyFromJSON(json['certainty']),
        'protocol': PortProtocolFromJSON(json['protocol']),
    };
}

export function CreatePortRequestToJSON(value?: CreatePortRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ip_addr': value.ipAddr,
        'port': value.port,
        'certainty': ManualPortCertaintyToJSON(value.certainty),
        'protocol': PortProtocolToJSON(value.protocol),
    };
}


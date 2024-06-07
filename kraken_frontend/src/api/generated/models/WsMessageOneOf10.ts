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
 * A result to service detection request
 * @export
 * @interface WsMessageOneOf10
 */
export interface WsMessageOneOf10 {
    /**
     * The corresponding id of the attack
     * @type {string}
     * @memberof WsMessageOneOf10
     */
    attackUuid: string;
    /**
     * The address of the result
     * @type {string}
     * @memberof WsMessageOneOf10
     */
    address: string;
    /**
     * The port of the result
     * @type {number}
     * @memberof WsMessageOneOf10
     */
    port: number;
    /**
     * Name of the service(s)
     * @type {Array<string>}
     * @memberof WsMessageOneOf10
     */
    services: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof WsMessageOneOf10
     */
    type: WsMessageOneOf10TypeEnum;
}


/**
 * @export
 */
export const WsMessageOneOf10TypeEnum = {
    ServiceDetectionResult: 'ServiceDetectionResult'
} as const;
export type WsMessageOneOf10TypeEnum = typeof WsMessageOneOf10TypeEnum[keyof typeof WsMessageOneOf10TypeEnum];


/**
 * Check if a given object implements the WsMessageOneOf10 interface.
 */
export function instanceOfWsMessageOneOf10(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attackUuid" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "port" in value;
    isInstance = isInstance && "services" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function WsMessageOneOf10FromJSON(json: any): WsMessageOneOf10 {
    return WsMessageOneOf10FromJSONTyped(json, false);
}

export function WsMessageOneOf10FromJSONTyped(json: any, ignoreDiscriminator: boolean): WsMessageOneOf10 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attackUuid': json['attack_uuid'],
        'address': json['address'],
        'port': json['port'],
        'services': json['services'],
        'type': json['type'],
    };
}

export function WsMessageOneOf10ToJSON(value?: WsMessageOneOf10 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attack_uuid': value.attackUuid,
        'address': value.address,
        'port': value.port,
        'services': value.services,
        'type': value.type,
    };
}


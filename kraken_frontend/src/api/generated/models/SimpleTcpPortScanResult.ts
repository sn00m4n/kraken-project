/* tslint:disable */
/* eslint-disable */
/**
 * kraken
 * The core component of kraken-project
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: git@omikron.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SimpleTcpPortScanResult
 */
export interface SimpleTcpPortScanResult {
    /**
     * 
     * @type {string}
     * @memberof SimpleTcpPortScanResult
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof SimpleTcpPortScanResult
     */
    attack: string;
    /**
     * 
     * @type {Date}
     * @memberof SimpleTcpPortScanResult
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof SimpleTcpPortScanResult
     */
    address: string;
    /**
     * 
     * @type {number}
     * @memberof SimpleTcpPortScanResult
     */
    port: number;
}

/**
 * Check if a given object implements the SimpleTcpPortScanResult interface.
 */
export function instanceOfSimpleTcpPortScanResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uuid" in value;
    isInstance = isInstance && "attack" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "port" in value;

    return isInstance;
}

export function SimpleTcpPortScanResultFromJSON(json: any): SimpleTcpPortScanResult {
    return SimpleTcpPortScanResultFromJSONTyped(json, false);
}

export function SimpleTcpPortScanResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimpleTcpPortScanResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'attack': json['attack'],
        'createdAt': (new Date(json['created_at'])),
        'address': json['address'],
        'port': json['port'],
    };
}

export function SimpleTcpPortScanResultToJSON(value?: SimpleTcpPortScanResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'attack': value.attack,
        'created_at': (value.createdAt.toISOString()),
        'address': value.address,
        'port': value.port,
    };
}


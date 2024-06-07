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
 * A simple representation of a service detection result
 * @export
 * @interface FullUdpServiceDetectionResult
 */
export interface FullUdpServiceDetectionResult {
    /**
     * The primary key
     * @type {string}
     * @memberof FullUdpServiceDetectionResult
     */
    uuid: string;
    /**
     * The attack which produced this result
     * @type {string}
     * @memberof FullUdpServiceDetectionResult
     */
    attack: string;
    /**
     * The point in time, this result was produced
     * @type {Date}
     * @memberof FullUdpServiceDetectionResult
     */
    createdAt: Date;
    /**
     * The certainty a service is detected
     * @type {string}
     * @memberof FullUdpServiceDetectionResult
     */
    certainty: FullUdpServiceDetectionResultCertaintyEnum;
    /**
     * The found names of the service
     * @type {Array<string>}
     * @memberof FullUdpServiceDetectionResult
     */
    serviceNames: Array<string>;
    /**
     * The ip address a port was found on
     * @type {string}
     * @memberof FullUdpServiceDetectionResult
     */
    host: string;
    /**
     * Port number
     * @type {number}
     * @memberof FullUdpServiceDetectionResult
     */
    port: number;
}


/**
 * @export
 */
export const FullUdpServiceDetectionResultCertaintyEnum = {
    Historical: 'Historical',
    SupposedTo: 'SupposedTo',
    MaybeVerified: 'MaybeVerified',
    DefinitelyVerified: 'DefinitelyVerified',
    UnknownService: 'UnknownService'
} as const;
export type FullUdpServiceDetectionResultCertaintyEnum = typeof FullUdpServiceDetectionResultCertaintyEnum[keyof typeof FullUdpServiceDetectionResultCertaintyEnum];


/**
 * Check if a given object implements the FullUdpServiceDetectionResult interface.
 */
export function instanceOfFullUdpServiceDetectionResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uuid" in value;
    isInstance = isInstance && "attack" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "certainty" in value;
    isInstance = isInstance && "serviceNames" in value;
    isInstance = isInstance && "host" in value;
    isInstance = isInstance && "port" in value;

    return isInstance;
}

export function FullUdpServiceDetectionResultFromJSON(json: any): FullUdpServiceDetectionResult {
    return FullUdpServiceDetectionResultFromJSONTyped(json, false);
}

export function FullUdpServiceDetectionResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): FullUdpServiceDetectionResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'attack': json['attack'],
        'createdAt': (new Date(json['created_at'])),
        'certainty': json['certainty'],
        'serviceNames': json['service_names'],
        'host': json['host'],
        'port': json['port'],
    };
}

export function FullUdpServiceDetectionResultToJSON(value?: FullUdpServiceDetectionResult | null): any {
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
        'certainty': value.certainty,
        'service_names': value.serviceNames,
        'host': value.host,
        'port': value.port,
    };
}


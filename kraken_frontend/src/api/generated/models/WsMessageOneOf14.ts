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
import type { OsType } from './OsType';
import {
    OsTypeFromJSON,
    OsTypeFromJSONTyped,
    OsTypeToJSON,
} from './OsType';

/**
 * Result for an OS detection request
 * @export
 * @interface WsMessageOneOf14
 */
export interface WsMessageOneOf14 {
    /**
     * 
     * @type {OsType}
     * @memberof WsMessageOneOf14
     */
    os: OsType;
    /**
     * A host which could be reached
     * @type {string}
     * @memberof WsMessageOneOf14
     */
    host: string;
    /**
     * Human-readable extra hints for the OS, new-line (\n) separated
     * @type {string}
     * @memberof WsMessageOneOf14
     */
    hints: string;
    /**
     * Optional additional version information, separated by OR (`" OR "`)
     * @type {string}
     * @memberof WsMessageOneOf14
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof WsMessageOneOf14
     */
    type: WsMessageOneOf14TypeEnum;
}


/**
 * @export
 */
export const WsMessageOneOf14TypeEnum = {
    OsDetectionResult: 'OsDetectionResult'
} as const;
export type WsMessageOneOf14TypeEnum = typeof WsMessageOneOf14TypeEnum[keyof typeof WsMessageOneOf14TypeEnum];


/**
 * Check if a given object implements the WsMessageOneOf14 interface.
 */
export function instanceOfWsMessageOneOf14(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "os" in value;
    isInstance = isInstance && "host" in value;
    isInstance = isInstance && "hints" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function WsMessageOneOf14FromJSON(json: any): WsMessageOneOf14 {
    return WsMessageOneOf14FromJSONTyped(json, false);
}

export function WsMessageOneOf14FromJSONTyped(json: any, ignoreDiscriminator: boolean): WsMessageOneOf14 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'os': OsTypeFromJSON(json['os']),
        'host': json['host'],
        'hints': json['hints'],
        'version': json['version'],
        'type': json['type'],
    };
}

export function WsMessageOneOf14ToJSON(value?: WsMessageOneOf14 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'os': OsTypeToJSON(value.os),
        'host': value.host,
        'hints': value.hints,
        'version': value.version,
        'type': value.type,
    };
}


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
import type { SimpleHost } from './SimpleHost';
import {
    SimpleHostFromJSON,
    SimpleHostFromJSONTyped,
    SimpleHostToJSON,
} from './SimpleHost';

/**
 * A new host was found
 * @export
 * @interface WsMessageOneOf16
 */
export interface WsMessageOneOf16 {
    /**
     * The workspace this host is related to
     * @type {string}
     * @memberof WsMessageOneOf16
     */
    workspace: string;
    /**
     * 
     * @type {SimpleHost}
     * @memberof WsMessageOneOf16
     */
    host: SimpleHost;
    /**
     * 
     * @type {string}
     * @memberof WsMessageOneOf16
     */
    type: WsMessageOneOf16TypeEnum;
}


/**
 * @export
 */
export const WsMessageOneOf16TypeEnum = {
    NewHost: 'NewHost'
} as const;
export type WsMessageOneOf16TypeEnum = typeof WsMessageOneOf16TypeEnum[keyof typeof WsMessageOneOf16TypeEnum];


/**
 * Check if a given object implements the WsMessageOneOf16 interface.
 */
export function instanceOfWsMessageOneOf16(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "workspace" in value;
    isInstance = isInstance && "host" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function WsMessageOneOf16FromJSON(json: any): WsMessageOneOf16 {
    return WsMessageOneOf16FromJSONTyped(json, false);
}

export function WsMessageOneOf16FromJSONTyped(json: any, ignoreDiscriminator: boolean): WsMessageOneOf16 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'workspace': json['workspace'],
        'host': SimpleHostFromJSON(json['host']),
        'type': json['type'],
    };
}

export function WsMessageOneOf16ToJSON(value?: WsMessageOneOf16 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'workspace': value.workspace,
        'host': SimpleHostToJSON(value.host),
        'type': value.type,
    };
}


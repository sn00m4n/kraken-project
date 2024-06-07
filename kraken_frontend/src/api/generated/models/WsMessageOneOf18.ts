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
 * A new service was found
 * @export
 * @interface WsMessageOneOf18
 */
export interface WsMessageOneOf18 {
    /**
     * The workspace this service is related to
     * @type {string}
     * @memberof WsMessageOneOf18
     */
    workspace: string;
    /**
     * 
     * @type {SimpleService}
     * @memberof WsMessageOneOf18
     */
    service: SimpleService;
    /**
     * 
     * @type {string}
     * @memberof WsMessageOneOf18
     */
    type: WsMessageOneOf18TypeEnum;
}


/**
 * @export
 */
export const WsMessageOneOf18TypeEnum = {
    NewService: 'NewService'
} as const;
export type WsMessageOneOf18TypeEnum = typeof WsMessageOneOf18TypeEnum[keyof typeof WsMessageOneOf18TypeEnum];


/**
 * Check if a given object implements the WsMessageOneOf18 interface.
 */
export function instanceOfWsMessageOneOf18(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "workspace" in value;
    isInstance = isInstance && "service" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function WsMessageOneOf18FromJSON(json: any): WsMessageOneOf18 {
    return WsMessageOneOf18FromJSONTyped(json, false);
}

export function WsMessageOneOf18FromJSONTyped(json: any, ignoreDiscriminator: boolean): WsMessageOneOf18 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'workspace': json['workspace'],
        'service': SimpleServiceFromJSON(json['service']),
        'type': json['type'],
    };
}

export function WsMessageOneOf18ToJSON(value?: WsMessageOneOf18 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'workspace': value.workspace,
        'service': SimpleServiceToJSON(value.service),
        'type': value.type,
    };
}


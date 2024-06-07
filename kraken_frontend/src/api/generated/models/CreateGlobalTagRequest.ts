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
import type { Color } from './Color';
import {
    ColorFromJSON,
    ColorFromJSONTyped,
    ColorToJSON,
} from './Color';

/**
 * The request to create a global tag
 * @export
 * @interface CreateGlobalTagRequest
 */
export interface CreateGlobalTagRequest {
    /**
     * Name of the tag
     * @type {string}
     * @memberof CreateGlobalTagRequest
     */
    name: string;
    /**
     * 
     * @type {Color}
     * @memberof CreateGlobalTagRequest
     */
    color: Color;
}

/**
 * Check if a given object implements the CreateGlobalTagRequest interface.
 */
export function instanceOfCreateGlobalTagRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "color" in value;

    return isInstance;
}

export function CreateGlobalTagRequestFromJSON(json: any): CreateGlobalTagRequest {
    return CreateGlobalTagRequestFromJSONTyped(json, false);
}

export function CreateGlobalTagRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateGlobalTagRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'color': ColorFromJSON(json['color']),
    };
}

export function CreateGlobalTagRequestToJSON(value?: CreateGlobalTagRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'color': ColorToJSON(value.color),
    };
}


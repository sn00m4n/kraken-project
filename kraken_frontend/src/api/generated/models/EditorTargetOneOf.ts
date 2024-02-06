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
import type { EditorTargetOneOfFindingDefinition } from './EditorTargetOneOfFindingDefinition';
import {
    EditorTargetOneOfFindingDefinitionFromJSON,
    EditorTargetOneOfFindingDefinitionFromJSONTyped,
    EditorTargetOneOfFindingDefinitionToJSON,
} from './EditorTargetOneOfFindingDefinition';

/**
 * 
 * @export
 * @interface EditorTargetOneOf
 */
export interface EditorTargetOneOf {
    /**
     * 
     * @type {EditorTargetOneOfFindingDefinition}
     * @memberof EditorTargetOneOf
     */
    findingDefinition: EditorTargetOneOfFindingDefinition;
}

/**
 * Check if a given object implements the EditorTargetOneOf interface.
 */
export function instanceOfEditorTargetOneOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "findingDefinition" in value;

    return isInstance;
}

export function EditorTargetOneOfFromJSON(json: any): EditorTargetOneOf {
    return EditorTargetOneOfFromJSONTyped(json, false);
}

export function EditorTargetOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditorTargetOneOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'findingDefinition': EditorTargetOneOfFindingDefinitionFromJSON(json['FindingDefinition']),
    };
}

export function EditorTargetOneOfToJSON(value?: EditorTargetOneOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'FindingDefinition': EditorTargetOneOfFindingDefinitionToJSON(value.findingDefinition),
    };
}


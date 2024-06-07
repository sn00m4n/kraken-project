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


/**
 * The certainty of a manually added port
 * @export
 */
export const ManualPortCertainty = {
    Historical: 'Historical',
    SupposedTo: 'SupposedTo'
} as const;
export type ManualPortCertainty = typeof ManualPortCertainty[keyof typeof ManualPortCertainty];


export function ManualPortCertaintyFromJSON(json: any): ManualPortCertainty {
    return ManualPortCertaintyFromJSONTyped(json, false);
}

export function ManualPortCertaintyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManualPortCertainty {
    return json as ManualPortCertainty;
}

export function ManualPortCertaintyToJSON(value?: ManualPortCertainty | null): any {
    return value as any;
}


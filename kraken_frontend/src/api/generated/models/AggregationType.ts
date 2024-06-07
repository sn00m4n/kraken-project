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
 * The different types of aggregations
 * @export
 */
export const AggregationType = {
    Domain: 'Domain',
    Host: 'Host',
    Service: 'Service',
    Port: 'Port',
    HttpService: 'HttpService'
} as const;
export type AggregationType = typeof AggregationType[keyof typeof AggregationType];


export function AggregationTypeFromJSON(json: any): AggregationType {
    return AggregationTypeFromJSONTyped(json, false);
}

export function AggregationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregationType {
    return json as AggregationType;
}

export function AggregationTypeToJSON(value?: AggregationType | null): any {
    return value as any;
}


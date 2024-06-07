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
 * The type of DNS TXT scan result for SPF rules
 * @export
 */
export const DnsTxtScanSpfType = {
    All: 'All',
    Include: 'Include',
    A: 'A',
    Mx: 'Mx',
    Ptr: 'Ptr',
    Ip: 'Ip',
    Exists: 'Exists',
    Redirect: 'Redirect',
    Explanation: 'Explanation',
    Modifier: 'Modifier'
} as const;
export type DnsTxtScanSpfType = typeof DnsTxtScanSpfType[keyof typeof DnsTxtScanSpfType];


export function DnsTxtScanSpfTypeFromJSON(json: any): DnsTxtScanSpfType {
    return DnsTxtScanSpfTypeFromJSONTyped(json, false);
}

export function DnsTxtScanSpfTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DnsTxtScanSpfType {
    return json as DnsTxtScanSpfType;
}

export function DnsTxtScanSpfTypeToJSON(value?: DnsTxtScanSpfType | null): any {
    return value as any;
}


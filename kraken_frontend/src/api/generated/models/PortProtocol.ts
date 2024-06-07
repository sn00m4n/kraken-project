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
 * A protocol of a port
 * @export
 */
export const PortProtocol = {
    Unknown: 'Unknown',
    Tcp: 'Tcp',
    Udp: 'Udp',
    Sctp: 'Sctp'
} as const;
export type PortProtocol = typeof PortProtocol[keyof typeof PortProtocol];


export function PortProtocolFromJSON(json: any): PortProtocol {
    return PortProtocolFromJSONTyped(json, false);
}

export function PortProtocolFromJSONTyped(json: any, ignoreDiscriminator: boolean): PortProtocol {
    return json as PortProtocol;
}

export function PortProtocolToJSON(value?: PortProtocol | null): any {
    return value as any;
}


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
import type { OsType } from './OsType';
import {
    OsTypeFromJSON,
    OsTypeFromJSONTyped,
    OsTypeToJSON,
} from './OsType';
import type { SimpleTag } from './SimpleTag';
import {
    SimpleTagFromJSON,
    SimpleTagFromJSONTyped,
    SimpleTagToJSON,
} from './SimpleTag';

/**
 * The full representation of a host
 * @export
 * @interface FullHost
 */
export interface FullHost {
    /**
     * The primary key of the host
     * @type {string}
     * @memberof FullHost
     */
    uuid: string;
    /**
     * The ip address of the host
     * @type {string}
     * @memberof FullHost
     */
    ipAddr: string;
    /**
     * 
     * @type {OsType}
     * @memberof FullHost
     */
    osType: OsType;
    /**
     * A comment
     * @type {string}
     * @memberof FullHost
     */
    comment: string;
    /**
     * The workspace this host is in
     * @type {string}
     * @memberof FullHost
     */
    workspace: string;
    /**
     * The list of tags this host has attached to
     * @type {Array<SimpleTag>}
     * @memberof FullHost
     */
    tags: Array<SimpleTag>;
    /**
     * The point in time, the record was created
     * @type {Date}
     * @memberof FullHost
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the FullHost interface.
 */
export function instanceOfFullHost(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uuid" in value;
    isInstance = isInstance && "ipAddr" in value;
    isInstance = isInstance && "osType" in value;
    isInstance = isInstance && "comment" in value;
    isInstance = isInstance && "workspace" in value;
    isInstance = isInstance && "tags" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function FullHostFromJSON(json: any): FullHost {
    return FullHostFromJSONTyped(json, false);
}

export function FullHostFromJSONTyped(json: any, ignoreDiscriminator: boolean): FullHost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'ipAddr': json['ip_addr'],
        'osType': OsTypeFromJSON(json['os_type']),
        'comment': json['comment'],
        'workspace': json['workspace'],
        'tags': ((json['tags'] as Array<any>).map(SimpleTagFromJSON)),
        'createdAt': (new Date(json['created_at'])),
    };
}

export function FullHostToJSON(value?: FullHost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'ip_addr': value.ipAddr,
        'os_type': OsTypeToJSON(value.osType),
        'comment': value.comment,
        'workspace': value.workspace,
        'tags': ((value.tags as Array<any>).map(SimpleTagToJSON)),
        'created_at': (value.createdAt.toISOString()),
    };
}


/* tslint:disable */
/* eslint-disable */
/**
 * kraken
 * The core component of kraken-project
 *
 * The version of the OpenAPI document: 0.4.2
 * Contact: git@omikron.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FindingSeverity } from './FindingSeverity';
import {
    FindingSeverityFromJSON,
    FindingSeverityFromJSONTyped,
    FindingSeverityToJSON,
} from './FindingSeverity';
import type { SimpleWorkspace } from './SimpleWorkspace';
import {
    SimpleWorkspaceFromJSON,
    SimpleWorkspaceFromJSONTyped,
    SimpleWorkspaceToJSON,
} from './SimpleWorkspace';

/**
 * A finding using a specific finding definition
 * @export
 * @interface FindingDefinitionUsage
 */
export interface FindingDefinitionUsage {
    /**
     * The uuid of the finding
     * @type {string}
     * @memberof FindingDefinitionUsage
     */
    uuid: string;
    /**
     * 
     * @type {FindingSeverity}
     * @memberof FindingDefinitionUsage
     */
    severity: FindingSeverity;
    /**
     * The point in time the finding was created
     * @type {Date}
     * @memberof FindingDefinitionUsage
     */
    createdAt: Date;
    /**
     * 
     * @type {SimpleWorkspace}
     * @memberof FindingDefinitionUsage
     */
    workspace: SimpleWorkspace;
    /**
     * The number of affected domains
     * @type {number}
     * @memberof FindingDefinitionUsage
     */
    affectedDomains: number;
    /**
     * The number of affected hosts
     * @type {number}
     * @memberof FindingDefinitionUsage
     */
    affectedHosts: number;
    /**
     * The number of affected ports
     * @type {number}
     * @memberof FindingDefinitionUsage
     */
    affectedPorts: number;
    /**
     * The number of affected services
     * @type {number}
     * @memberof FindingDefinitionUsage
     */
    affectedServices: number;
}

/**
 * Check if a given object implements the FindingDefinitionUsage interface.
 */
export function instanceOfFindingDefinitionUsage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uuid" in value;
    isInstance = isInstance && "severity" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "workspace" in value;
    isInstance = isInstance && "affectedDomains" in value;
    isInstance = isInstance && "affectedHosts" in value;
    isInstance = isInstance && "affectedPorts" in value;
    isInstance = isInstance && "affectedServices" in value;

    return isInstance;
}

export function FindingDefinitionUsageFromJSON(json: any): FindingDefinitionUsage {
    return FindingDefinitionUsageFromJSONTyped(json, false);
}

export function FindingDefinitionUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): FindingDefinitionUsage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'severity': FindingSeverityFromJSON(json['severity']),
        'createdAt': (new Date(json['created_at'])),
        'workspace': SimpleWorkspaceFromJSON(json['workspace']),
        'affectedDomains': json['affected_domains'],
        'affectedHosts': json['affected_hosts'],
        'affectedPorts': json['affected_ports'],
        'affectedServices': json['affected_services'],
    };
}

export function FindingDefinitionUsageToJSON(value?: FindingDefinitionUsage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'severity': FindingSeverityToJSON(value.severity),
        'created_at': (value.createdAt.toISOString()),
        'workspace': SimpleWorkspaceToJSON(value.workspace),
        'affected_domains': value.affectedDomains,
        'affected_hosts': value.affectedHosts,
        'affected_ports': value.affectedPorts,
        'affected_services': value.affectedServices,
    };
}

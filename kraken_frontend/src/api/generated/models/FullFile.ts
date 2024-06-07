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
import type { SimpleUser } from './SimpleUser';
import {
    SimpleUserFromJSON,
    SimpleUserFromJSONTyped,
    SimpleUserToJSON,
} from './SimpleUser';
import type { SimpleWorkspace } from './SimpleWorkspace';
import {
    SimpleWorkspaceFromJSON,
    SimpleWorkspaceFromJSONTyped,
    SimpleWorkspaceToJSON,
} from './SimpleWorkspace';

/**
 * Metadata stored about a file uploaded to kraken
 * @export
 * @interface FullFile
 */
export interface FullFile {
    /**
     * The file's uuid
     * @type {string}
     * @memberof FullFile
     */
    uuid: string;
    /**
     * The file's name
     * @type {string}
     * @memberof FullFile
     */
    name: string;
    /**
     * The file's sha256
     * @type {string}
     * @memberof FullFile
     */
    sha256: string;
    /**
     * Is this file an image?
     * 
     * This flag indicates whether there exists a thumbnail file
     * and if it can be used where an image is required.
     * @type {boolean}
     * @memberof FullFile
     */
    isImage: boolean;
    /**
     * 
     * @type {SimpleUser}
     * @memberof FullFile
     */
    user: SimpleUser;
    /**
     * 
     * @type {SimpleWorkspace}
     * @memberof FullFile
     */
    workspace: SimpleWorkspace;
    /**
     * Time of first upload
     * @type {Date}
     * @memberof FullFile
     */
    uploadedAt: Date;
}

/**
 * Check if a given object implements the FullFile interface.
 */
export function instanceOfFullFile(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uuid" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "sha256" in value;
    isInstance = isInstance && "isImage" in value;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "workspace" in value;
    isInstance = isInstance && "uploadedAt" in value;

    return isInstance;
}

export function FullFileFromJSON(json: any): FullFile {
    return FullFileFromJSONTyped(json, false);
}

export function FullFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): FullFile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'name': json['name'],
        'sha256': json['sha256'],
        'isImage': json['is_image'],
        'user': SimpleUserFromJSON(json['user']),
        'workspace': SimpleWorkspaceFromJSON(json['workspace']),
        'uploadedAt': (new Date(json['uploaded_at'])),
    };
}

export function FullFileToJSON(value?: FullFile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'sha256': value.sha256,
        'is_image': value.isImage,
        'user': SimpleUserToJSON(value.user),
        'workspace': SimpleWorkspaceToJSON(value.workspace),
        'uploaded_at': (value.uploadedAt.toISOString()),
    };
}


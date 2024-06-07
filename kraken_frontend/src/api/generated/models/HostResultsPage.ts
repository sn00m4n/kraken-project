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
import type { FullHost } from './FullHost';
import {
    FullHostFromJSON,
    FullHostFromJSONTyped,
    FullHostToJSON,
} from './FullHost';

/**
 * Response containing paginated data
 * @export
 * @interface HostResultsPage
 */
export interface HostResultsPage {
    /**
     * The page's items
     * @type {Array<FullHost>}
     * @memberof HostResultsPage
     */
    items: Array<FullHost>;
    /**
     * The limit this page was retrieved with
     * @type {number}
     * @memberof HostResultsPage
     */
    limit: number;
    /**
     * The offset this page was retrieved with
     * @type {number}
     * @memberof HostResultsPage
     */
    offset: number;
    /**
     * The total number of items this page is a subset of
     * @type {number}
     * @memberof HostResultsPage
     */
    total: number;
}

/**
 * Check if a given object implements the HostResultsPage interface.
 */
export function instanceOfHostResultsPage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "limit" in value;
    isInstance = isInstance && "offset" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function HostResultsPageFromJSON(json: any): HostResultsPage {
    return HostResultsPageFromJSONTyped(json, false);
}

export function HostResultsPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): HostResultsPage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(FullHostFromJSON)),
        'limit': json['limit'],
        'offset': json['offset'],
        'total': json['total'],
    };
}

export function HostResultsPageToJSON(value?: HostResultsPage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': ((value.items as Array<any>).map(FullHostToJSON)),
        'limit': value.limit,
        'offset': value.offset,
        'total': value.total,
    };
}


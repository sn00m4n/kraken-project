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


import * as runtime from '../runtime';
import type {
  ApiErrorResponse,
  CreateHttpServiceRequest,
  FullAggregationSource,
  FullHttpService,
  GetAllHttpServicesQuery,
  HttpServiceRelations,
  HttpServiceResultsPage,
  ListFindings,
  UpdateHttpServiceRequest,
  UuidResponse,
} from '../models';
import {
    ApiErrorResponseFromJSON,
    ApiErrorResponseToJSON,
    CreateHttpServiceRequestFromJSON,
    CreateHttpServiceRequestToJSON,
    FullAggregationSourceFromJSON,
    FullAggregationSourceToJSON,
    FullHttpServiceFromJSON,
    FullHttpServiceToJSON,
    GetAllHttpServicesQueryFromJSON,
    GetAllHttpServicesQueryToJSON,
    HttpServiceRelationsFromJSON,
    HttpServiceRelationsToJSON,
    HttpServiceResultsPageFromJSON,
    HttpServiceResultsPageToJSON,
    ListFindingsFromJSON,
    ListFindingsToJSON,
    UpdateHttpServiceRequestFromJSON,
    UpdateHttpServiceRequestToJSON,
    UuidResponseFromJSON,
    UuidResponseToJSON,
} from '../models';

export interface CreateHttpServiceOperationRequest {
    uuid: string;
    createHttpServiceRequest: CreateHttpServiceRequest;
}

export interface DeleteHttpServiceRequest {
    wUuid: string;
    hsUuid: string;
}

export interface GetAllHttpServicesRequest {
    uuid: string;
    getAllHttpServicesQuery: GetAllHttpServicesQuery;
}

export interface GetHttpServiceRequest {
    wUuid: string;
    hsUuid: string;
}

export interface GetHttpServiceFindingsRequest {
    wUuid: string;
    hsUuid: string;
}

export interface GetHttpServiceRelationsRequest {
    wUuid: string;
    hsUuid: string;
}

export interface GetHttpServiceSourcesRequest {
    wUuid: string;
    hsUuid: string;
}

export interface UpdateHttpServiceOperationRequest {
    wUuid: string;
    hsUuid: string;
    updateHttpServiceRequest: UpdateHttpServiceRequest;
}

/**
 * 
 */
export class HttpServicesApi extends runtime.BaseAPI {

    /**
     * Manually add a http service
     */
    async createHttpServiceRaw(requestParameters: CreateHttpServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UuidResponse>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling createHttpService.');
        }

        if (requestParameters.createHttpServiceRequest === null || requestParameters.createHttpServiceRequest === undefined) {
            throw new runtime.RequiredError('createHttpServiceRequest','Required parameter requestParameters.createHttpServiceRequest was null or undefined when calling createHttpService.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/workspaces/{uuid}/httpServices`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateHttpServiceRequestToJSON(requestParameters.createHttpServiceRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UuidResponseFromJSON(jsonValue));
    }

    /**
     * Manually add a http service
     */
    async createHttpService(requestParameters: CreateHttpServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UuidResponse> {
        const response = await this.createHttpServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This only deletes the aggregation. The raw results are still in place
     * Delete the http service
     */
    async deleteHttpServiceRaw(requestParameters: DeleteHttpServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.wUuid === null || requestParameters.wUuid === undefined) {
            throw new runtime.RequiredError('wUuid','Required parameter requestParameters.wUuid was null or undefined when calling deleteHttpService.');
        }

        if (requestParameters.hsUuid === null || requestParameters.hsUuid === undefined) {
            throw new runtime.RequiredError('hsUuid','Required parameter requestParameters.hsUuid was null or undefined when calling deleteHttpService.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/workspaces/{w_uuid}/httpServices/{hs_uuid}`.replace(`{${"w_uuid"}}`, encodeURIComponent(String(requestParameters.wUuid))).replace(`{${"hs_uuid"}}`, encodeURIComponent(String(requestParameters.hsUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This only deletes the aggregation. The raw results are still in place
     * Delete the http service
     */
    async deleteHttpService(requestParameters: DeleteHttpServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteHttpServiceRaw(requestParameters, initOverrides);
    }

    /**
     * List the http services of a workspace
     */
    async getAllHttpServicesRaw(requestParameters: GetAllHttpServicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HttpServiceResultsPage>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getAllHttpServices.');
        }

        if (requestParameters.getAllHttpServicesQuery === null || requestParameters.getAllHttpServicesQuery === undefined) {
            throw new runtime.RequiredError('getAllHttpServicesQuery','Required parameter requestParameters.getAllHttpServicesQuery was null or undefined when calling getAllHttpServices.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/workspaces/{uuid}/httpServices/all`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GetAllHttpServicesQueryToJSON(requestParameters.getAllHttpServicesQuery),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HttpServiceResultsPageFromJSON(jsonValue));
    }

    /**
     * List the http services of a workspace
     */
    async getAllHttpServices(requestParameters: GetAllHttpServicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HttpServiceResultsPage> {
        const response = await this.getAllHttpServicesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve all information about a single service
     */
    async getHttpServiceRaw(requestParameters: GetHttpServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FullHttpService>> {
        if (requestParameters.wUuid === null || requestParameters.wUuid === undefined) {
            throw new runtime.RequiredError('wUuid','Required parameter requestParameters.wUuid was null or undefined when calling getHttpService.');
        }

        if (requestParameters.hsUuid === null || requestParameters.hsUuid === undefined) {
            throw new runtime.RequiredError('hsUuid','Required parameter requestParameters.hsUuid was null or undefined when calling getHttpService.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/workspaces/{w_uuid}/httpServices/{hs_uuid}`.replace(`{${"w_uuid"}}`, encodeURIComponent(String(requestParameters.wUuid))).replace(`{${"hs_uuid"}}`, encodeURIComponent(String(requestParameters.hsUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FullHttpServiceFromJSON(jsonValue));
    }

    /**
     * Retrieve all information about a single service
     */
    async getHttpService(requestParameters: GetHttpServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FullHttpService> {
        const response = await this.getHttpServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a http service\'s findings
     */
    async getHttpServiceFindingsRaw(requestParameters: GetHttpServiceFindingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListFindings>> {
        if (requestParameters.wUuid === null || requestParameters.wUuid === undefined) {
            throw new runtime.RequiredError('wUuid','Required parameter requestParameters.wUuid was null or undefined when calling getHttpServiceFindings.');
        }

        if (requestParameters.hsUuid === null || requestParameters.hsUuid === undefined) {
            throw new runtime.RequiredError('hsUuid','Required parameter requestParameters.hsUuid was null or undefined when calling getHttpServiceFindings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/workspaces/{w_uuid}/httpServices/{hs_uuid}/findings`.replace(`{${"w_uuid"}}`, encodeURIComponent(String(requestParameters.wUuid))).replace(`{${"hs_uuid"}}`, encodeURIComponent(String(requestParameters.hsUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListFindingsFromJSON(jsonValue));
    }

    /**
     * Get a http service\'s findings
     */
    async getHttpServiceFindings(requestParameters: GetHttpServiceFindingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListFindings> {
        const response = await this.getHttpServiceFindingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a http service\'s direct relations
     */
    async getHttpServiceRelationsRaw(requestParameters: GetHttpServiceRelationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HttpServiceRelations>> {
        if (requestParameters.wUuid === null || requestParameters.wUuid === undefined) {
            throw new runtime.RequiredError('wUuid','Required parameter requestParameters.wUuid was null or undefined when calling getHttpServiceRelations.');
        }

        if (requestParameters.hsUuid === null || requestParameters.hsUuid === undefined) {
            throw new runtime.RequiredError('hsUuid','Required parameter requestParameters.hsUuid was null or undefined when calling getHttpServiceRelations.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/workspaces/{w_uuid}/httpServices/{hs_uuid}/relations`.replace(`{${"w_uuid"}}`, encodeURIComponent(String(requestParameters.wUuid))).replace(`{${"hs_uuid"}}`, encodeURIComponent(String(requestParameters.hsUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HttpServiceRelationsFromJSON(jsonValue));
    }

    /**
     * Get a http service\'s direct relations
     */
    async getHttpServiceRelations(requestParameters: GetHttpServiceRelationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HttpServiceRelations> {
        const response = await this.getHttpServiceRelationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all data sources which referenced this http service
     */
    async getHttpServiceSourcesRaw(requestParameters: GetHttpServiceSourcesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FullAggregationSource>> {
        if (requestParameters.wUuid === null || requestParameters.wUuid === undefined) {
            throw new runtime.RequiredError('wUuid','Required parameter requestParameters.wUuid was null or undefined when calling getHttpServiceSources.');
        }

        if (requestParameters.hsUuid === null || requestParameters.hsUuid === undefined) {
            throw new runtime.RequiredError('hsUuid','Required parameter requestParameters.hsUuid was null or undefined when calling getHttpServiceSources.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/workspaces/{w_uuid}/httpServices/{hs_uuid}/sources`.replace(`{${"w_uuid"}}`, encodeURIComponent(String(requestParameters.wUuid))).replace(`{${"hs_uuid"}}`, encodeURIComponent(String(requestParameters.hsUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FullAggregationSourceFromJSON(jsonValue));
    }

    /**
     * Get all data sources which referenced this http service
     */
    async getHttpServiceSources(requestParameters: GetHttpServiceSourcesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FullAggregationSource> {
        const response = await this.getHttpServiceSourcesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * You must include at least on parameter
     * Update a http service
     */
    async updateHttpServiceRaw(requestParameters: UpdateHttpServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.wUuid === null || requestParameters.wUuid === undefined) {
            throw new runtime.RequiredError('wUuid','Required parameter requestParameters.wUuid was null or undefined when calling updateHttpService.');
        }

        if (requestParameters.hsUuid === null || requestParameters.hsUuid === undefined) {
            throw new runtime.RequiredError('hsUuid','Required parameter requestParameters.hsUuid was null or undefined when calling updateHttpService.');
        }

        if (requestParameters.updateHttpServiceRequest === null || requestParameters.updateHttpServiceRequest === undefined) {
            throw new runtime.RequiredError('updateHttpServiceRequest','Required parameter requestParameters.updateHttpServiceRequest was null or undefined when calling updateHttpService.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/workspaces/{w_uuid}/httpServices/{hs_uuid}`.replace(`{${"w_uuid"}}`, encodeURIComponent(String(requestParameters.wUuid))).replace(`{${"hs_uuid"}}`, encodeURIComponent(String(requestParameters.hsUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateHttpServiceRequestToJSON(requestParameters.updateHttpServiceRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * You must include at least on parameter
     * Update a http service
     */
    async updateHttpService(requestParameters: UpdateHttpServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateHttpServiceRaw(requestParameters, initOverrides);
    }

}

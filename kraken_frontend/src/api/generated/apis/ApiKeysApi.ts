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


import * as runtime from '../runtime';
import type {
  ApiErrorResponse,
  CreateApiKeyRequest,
  GetLeechResponse,
  UpdateApiKeyRequest,
  UuidResponse,
} from '../models';
import {
    ApiErrorResponseFromJSON,
    ApiErrorResponseToJSON,
    CreateApiKeyRequestFromJSON,
    CreateApiKeyRequestToJSON,
    GetLeechResponseFromJSON,
    GetLeechResponseToJSON,
    UpdateApiKeyRequestFromJSON,
    UpdateApiKeyRequestToJSON,
    UuidResponseFromJSON,
    UuidResponseToJSON,
} from '../models';

export interface CreateApiKeyOperationRequest {
    createApiKeyRequest: CreateApiKeyRequest;
}

export interface DeleteApiKeyRequest {
    uuid: string;
}

export interface UpdateApiKeyOperationRequest {
    uuid: string;
    updateApiKeyRequest: UpdateApiKeyRequest;
}

/**
 * 
 */
export class ApiKeysApi extends runtime.BaseAPI {

    /**
     * Create new api key
     * Create new api key
     */
    async createApiKeyRaw(requestParameters: CreateApiKeyOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UuidResponse>> {
        if (requestParameters.createApiKeyRequest === null || requestParameters.createApiKeyRequest === undefined) {
            throw new runtime.RequiredError('createApiKeyRequest','Required parameter requestParameters.createApiKeyRequest was null or undefined when calling createApiKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/apiKeys`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateApiKeyRequestToJSON(requestParameters.createApiKeyRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UuidResponseFromJSON(jsonValue));
    }

    /**
     * Create new api key
     * Create new api key
     */
    async createApiKey(requestParameters: CreateApiKeyOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UuidResponse> {
        const response = await this.createApiKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an existing api key
     * Delete an existing api key
     */
    async deleteApiKeyRaw(requestParameters: DeleteApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteApiKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/apiKeys/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an existing api key
     * Delete an existing api key
     */
    async deleteApiKey(requestParameters: DeleteApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteApiKeyRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve all leeches
     * Retrieve all leeches
     */
    async getApiKeysRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetLeechResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/apiKeys`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetLeechResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve all leeches
     * Retrieve all leeches
     */
    async getApiKeys(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetLeechResponse> {
        const response = await this.getApiKeysRaw(initOverrides);
        return await response.value();
    }

    /**
     * Update an api key by its id  All parameter are optional, but at least one of them must be specified.
     * Update an api key by its id
     */
    async updateApiKeyRaw(requestParameters: UpdateApiKeyOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling updateApiKey.');
        }

        if (requestParameters.updateApiKeyRequest === null || requestParameters.updateApiKeyRequest === undefined) {
            throw new runtime.RequiredError('updateApiKeyRequest','Required parameter requestParameters.updateApiKeyRequest was null or undefined when calling updateApiKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/apiKeys/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateApiKeyRequestToJSON(requestParameters.updateApiKeyRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update an api key by its id  All parameter are optional, but at least one of them must be specified.
     * Update an api key by its id
     */
    async updateApiKey(requestParameters: UpdateApiKeyOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateApiKeyRaw(requestParameters, initOverrides);
    }

}

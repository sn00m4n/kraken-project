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
  CreateWorkspaceRequest,
  FullWorkspace,
  InviteToWorkspaceRequest,
  ListWorkspaces,
  SearchResultPage,
  SearchWorkspaceRequest,
  SearchesResultPage,
  TransferWorkspaceRequest,
  UpdateWorkspaceRequest,
  UuidResponse,
  WorkspaceInvitationList,
} from '../models';
import {
    ApiErrorResponseFromJSON,
    ApiErrorResponseToJSON,
    CreateWorkspaceRequestFromJSON,
    CreateWorkspaceRequestToJSON,
    FullWorkspaceFromJSON,
    FullWorkspaceToJSON,
    InviteToWorkspaceRequestFromJSON,
    InviteToWorkspaceRequestToJSON,
    ListWorkspacesFromJSON,
    ListWorkspacesToJSON,
    SearchResultPageFromJSON,
    SearchResultPageToJSON,
    SearchWorkspaceRequestFromJSON,
    SearchWorkspaceRequestToJSON,
    SearchesResultPageFromJSON,
    SearchesResultPageToJSON,
    TransferWorkspaceRequestFromJSON,
    TransferWorkspaceRequestToJSON,
    UpdateWorkspaceRequestFromJSON,
    UpdateWorkspaceRequestToJSON,
    UuidResponseFromJSON,
    UuidResponseToJSON,
    WorkspaceInvitationListFromJSON,
    WorkspaceInvitationListToJSON,
} from '../models';

export interface ArchiveWorkspaceRequest {
    uuid: string;
}

export interface CreateInvitationRequest {
    uuid: string;
    inviteToWorkspaceRequest: InviteToWorkspaceRequest;
}

export interface CreateWorkspaceOperationRequest {
    createWorkspaceRequest: CreateWorkspaceRequest;
}

export interface DeleteWorkspaceRequest {
    uuid: string;
}

export interface GetAllWorkspaceInvitationsRequest {
    uuid: string;
}

export interface GetSearchResultsRequest {
    wUuid: string;
    sUuid: string;
    limit: number;
    offset: number;
}

export interface GetSearchesRequest {
    uuid: string;
    limit: number;
    offset: number;
}

export interface GetWorkspaceRequest {
    uuid: string;
}

export interface RetractInvitationRequest {
    wUuid: string;
    iUuid: string;
}

export interface SearchRequest {
    uuid: string;
    searchWorkspaceRequest: SearchWorkspaceRequest;
}

export interface TransferOwnershipRequest {
    uuid: string;
    transferWorkspaceRequest: TransferWorkspaceRequest;
}

export interface UnarchiveWorkspaceRequest {
    uuid: string;
}

export interface UpdateWorkspaceOperationRequest {
    uuid: string;
    updateWorkspaceRequest: UpdateWorkspaceRequest;
}

/**
 * 
 */
export class WorkspacesApi extends runtime.BaseAPI {

    /**
     * Mark the workspace as archived
     */
    async archiveWorkspaceRaw(requestParameters: ArchiveWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling archiveWorkspace.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/workspaces/{uuid}/archive`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Mark the workspace as archived
     */
    async archiveWorkspace(requestParameters: ArchiveWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.archiveWorkspaceRaw(requestParameters, initOverrides);
    }

    /**
     * This action can only be invoked by the owner of a workspace
     * Invite a user to the workspace
     */
    async createInvitationRaw(requestParameters: CreateInvitationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling createInvitation.');
        }

        if (requestParameters.inviteToWorkspaceRequest === null || requestParameters.inviteToWorkspaceRequest === undefined) {
            throw new runtime.RequiredError('inviteToWorkspaceRequest','Required parameter requestParameters.inviteToWorkspaceRequest was null or undefined when calling createInvitation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/workspaces/{uuid}/invitations`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InviteToWorkspaceRequestToJSON(requestParameters.inviteToWorkspaceRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This action can only be invoked by the owner of a workspace
     * Invite a user to the workspace
     */
    async createInvitation(requestParameters: CreateInvitationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createInvitationRaw(requestParameters, initOverrides);
    }

    /**
     * Create a new workspace
     */
    async createWorkspaceRaw(requestParameters: CreateWorkspaceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UuidResponse>> {
        if (requestParameters.createWorkspaceRequest === null || requestParameters.createWorkspaceRequest === undefined) {
            throw new runtime.RequiredError('createWorkspaceRequest','Required parameter requestParameters.createWorkspaceRequest was null or undefined when calling createWorkspace.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/workspaces`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateWorkspaceRequestToJSON(requestParameters.createWorkspaceRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UuidResponseFromJSON(jsonValue));
    }

    /**
     * Create a new workspace
     */
    async createWorkspace(requestParameters: CreateWorkspaceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UuidResponse> {
        const response = await this.createWorkspaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a workspace by its id
     */
    async deleteWorkspaceRaw(requestParameters: DeleteWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteWorkspace.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/workspaces/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a workspace by its id
     */
    async deleteWorkspace(requestParameters: DeleteWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteWorkspaceRaw(requestParameters, initOverrides);
    }

    /**
     * Query all open invitations to a workspace
     */
    async getAllWorkspaceInvitationsRaw(requestParameters: GetAllWorkspaceInvitationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkspaceInvitationList>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getAllWorkspaceInvitations.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/workspaces/{uuid}/invitations`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkspaceInvitationListFromJSON(jsonValue));
    }

    /**
     * Query all open invitations to a workspace
     */
    async getAllWorkspaceInvitations(requestParameters: GetAllWorkspaceInvitationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkspaceInvitationList> {
        const response = await this.getAllWorkspaceInvitationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * For administration access, look at the `/admin/workspaces` endpoint.
     * Retrieve all workspaces that the executing user has access to
     */
    async getAllWorkspacesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListWorkspaces>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/workspaces`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListWorkspacesFromJSON(jsonValue));
    }

    /**
     * For administration access, look at the `/admin/workspaces` endpoint.
     * Retrieve all workspaces that the executing user has access to
     */
    async getAllWorkspaces(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListWorkspaces> {
        const response = await this.getAllWorkspacesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieve results for a search by its uuid
     */
    async getSearchResultsRaw(requestParameters: GetSearchResultsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchResultPage>> {
        if (requestParameters.wUuid === null || requestParameters.wUuid === undefined) {
            throw new runtime.RequiredError('wUuid','Required parameter requestParameters.wUuid was null or undefined when calling getSearchResults.');
        }

        if (requestParameters.sUuid === null || requestParameters.sUuid === undefined) {
            throw new runtime.RequiredError('sUuid','Required parameter requestParameters.sUuid was null or undefined when calling getSearchResults.');
        }

        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling getSearchResults.');
        }

        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling getSearchResults.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/workspaces/{w_uuid}/search/{s_uuid}`.replace(`{${"w_uuid"}}`, encodeURIComponent(String(requestParameters.wUuid))).replace(`{${"s_uuid"}}`, encodeURIComponent(String(requestParameters.sUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchResultPageFromJSON(jsonValue));
    }

    /**
     * Retrieve results for a search by its uuid
     */
    async getSearchResults(requestParameters: GetSearchResultsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchResultPage> {
        const response = await this.getSearchResultsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Query all searches
     */
    async getSearchesRaw(requestParameters: GetSearchesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchesResultPage>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getSearches.');
        }

        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling getSearches.');
        }

        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling getSearches.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/workspaces/{uuid}/search`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchesResultPageFromJSON(jsonValue));
    }

    /**
     * Query all searches
     */
    async getSearches(requestParameters: GetSearchesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchesResultPage> {
        const response = await this.getSearchesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a workspace by id
     */
    async getWorkspaceRaw(requestParameters: GetWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FullWorkspace>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getWorkspace.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/workspaces/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FullWorkspaceFromJSON(jsonValue));
    }

    /**
     * Retrieve a workspace by id
     */
    async getWorkspace(requestParameters: GetWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FullWorkspace> {
        const response = await this.getWorkspaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This action can only be invoked by the owner of a workspace
     * Retract an invitation to the workspace
     */
    async retractInvitationRaw(requestParameters: RetractInvitationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.wUuid === null || requestParameters.wUuid === undefined) {
            throw new runtime.RequiredError('wUuid','Required parameter requestParameters.wUuid was null or undefined when calling retractInvitation.');
        }

        if (requestParameters.iUuid === null || requestParameters.iUuid === undefined) {
            throw new runtime.RequiredError('iUuid','Required parameter requestParameters.iUuid was null or undefined when calling retractInvitation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/workspaces/{w_uuid}/invitations/{i_uuid}`.replace(`{${"w_uuid"}}`, encodeURIComponent(String(requestParameters.wUuid))).replace(`{${"i_uuid"}}`, encodeURIComponent(String(requestParameters.iUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This action can only be invoked by the owner of a workspace
     * Retract an invitation to the workspace
     */
    async retractInvitation(requestParameters: RetractInvitationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.retractInvitationRaw(requestParameters, initOverrides);
    }

    /**
     * Search through a workspaces\' data
     */
    async searchRaw(requestParameters: SearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UuidResponse>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling search.');
        }

        if (requestParameters.searchWorkspaceRequest === null || requestParameters.searchWorkspaceRequest === undefined) {
            throw new runtime.RequiredError('searchWorkspaceRequest','Required parameter requestParameters.searchWorkspaceRequest was null or undefined when calling search.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/workspaces/{uuid}/search`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SearchWorkspaceRequestToJSON(requestParameters.searchWorkspaceRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UuidResponseFromJSON(jsonValue));
    }

    /**
     * Search through a workspaces\' data
     */
    async search(requestParameters: SearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UuidResponse> {
        const response = await this.searchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * You will lose access to the workspace.
     * Transfer ownership to another account
     */
    async transferOwnershipRaw(requestParameters: TransferOwnershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling transferOwnership.');
        }

        if (requestParameters.transferWorkspaceRequest === null || requestParameters.transferWorkspaceRequest === undefined) {
            throw new runtime.RequiredError('transferWorkspaceRequest','Required parameter requestParameters.transferWorkspaceRequest was null or undefined when calling transferOwnership.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/workspaces/{uuid}/transfer`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransferWorkspaceRequestToJSON(requestParameters.transferWorkspaceRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * You will lose access to the workspace.
     * Transfer ownership to another account
     */
    async transferOwnership(requestParameters: TransferOwnershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.transferOwnershipRaw(requestParameters, initOverrides);
    }

    /**
     * Mark an archived workspace as unarchived
     */
    async unarchiveWorkspaceRaw(requestParameters: UnarchiveWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling unarchiveWorkspace.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/workspaces/{uuid}/unarchive`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Mark an archived workspace as unarchived
     */
    async unarchiveWorkspace(requestParameters: UnarchiveWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.unarchiveWorkspaceRaw(requestParameters, initOverrides);
    }

    /**
     * All parameter are optional, but at least one of them must be specified.  `name` must not be empty.  You can set `description` to null to remove the description from the database. If you leave the parameter out, the description will remain unchanged.
     * Updates a workspace by its id
     */
    async updateWorkspaceRaw(requestParameters: UpdateWorkspaceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling updateWorkspace.');
        }

        if (requestParameters.updateWorkspaceRequest === null || requestParameters.updateWorkspaceRequest === undefined) {
            throw new runtime.RequiredError('updateWorkspaceRequest','Required parameter requestParameters.updateWorkspaceRequest was null or undefined when calling updateWorkspace.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/workspaces/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateWorkspaceRequestToJSON(requestParameters.updateWorkspaceRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * All parameter are optional, but at least one of them must be specified.  `name` must not be empty.  You can set `description` to null to remove the description from the database. If you leave the parameter out, the description will remain unchanged.
     * Updates a workspace by its id
     */
    async updateWorkspace(requestParameters: UpdateWorkspaceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateWorkspaceRaw(requestParameters, initOverrides);
    }

}

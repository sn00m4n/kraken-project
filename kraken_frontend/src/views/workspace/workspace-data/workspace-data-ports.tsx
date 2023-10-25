import { Api } from "../../../api/api";
import React from "react";
import WorkspaceTable from "../components/workspace-table";
import { FullHost, FullPort, SimplePort } from "../../../api/generated";

type WorkspaceDataPortsProps = {
    workspace: string;
    onSelect: (uuid: string) => void;
};

export function WorkspaceDataPorts(props: WorkspaceDataPortsProps) {
    const { workspace, onSelect } = props;
    return (
        <WorkspaceTable<FullPort>
            query={(limit, offset) => Api.workspaces.ports.all(workspace, limit, offset)}
            queryDeps={[workspace]}
            columns={3}
        >
            <div className={"workspace-data-table-header"}>
                <span>Port</span>
                <span>Host</span>
                <span>Comment</span>
            </div>
            {(port) => (
                <div className={"workspace-data-table-row"} onClick={() => onSelect(port.uuid)}>
                    <span>{port.port}</span>
                    <span>{port.host.ipAddr}</span>
                    <span>{port.comment}</span>
                </div>
            )}
        </WorkspaceTable>
    );
}

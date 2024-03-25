import React from "react";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import { Api, UUID } from "../../api/api";
import { FindingSection } from "../../api/generated";
import { AdminOnly } from "../../components/admin-guard";
import { GithubMarkdown } from "../../components/github-markdown";
import Input from "../../components/input";
import { SelectPrimitive } from "../../components/select-menu";
import { ROUTES } from "../../routes";
import ArrowLeftIcon from "../../svg/arrow-left";
import BandageIcon from "../../svg/bandage";
import BookIcon from "../../svg/book";
import FlameIcon from "../../svg/flame";
import InformationIcon from "../../svg/information";
import LibraryIcon from "../../svg/library";
import { handleApiError } from "../../utils/helper";
import { SectionSelectionTabs, useSectionsState } from "./finding-definition/sections";
import ModelEditor from "../../components/model-editor";
import { useSyncedCursors } from "../../utils/monaco-cursor";

export type EditFindingDefinitionProps = {
    uuid: string;
};

export function EditFindingDefinition(props: EditFindingDefinitionProps) {
    const [name, setName] = React.useState("");
    const [severity, setSeverity] = React.useState("Medium");
    const [cve, setCve] = React.useState("");

    const sections = useSectionsState();
    const { cursors, setEditor } = useSyncedCursors({
        target: {
            findingDefinition: {
                findingDefinition: props.uuid,
                findingSection: sections.selected,
            },
        },
        receiveCursor: (target) => {
            if (
                "findingDefinition" in target &&
                target["findingDefinition"] &&
                target.findingDefinition.findingDefinition === props.uuid
            )
                return { section: target.findingDefinition.findingSection };
        },
        deleteCursors: [props.uuid],
        hideCursors: [sections.selected],
        isCursorHidden: ({ section }) => section !== sections.selected,
    });

    /* Initial load */

    React.useEffect(() => {
        Api.knowledgeBase.findingDefinitions.get(props.uuid).then(
            handleApiError((finding) => {
                setName(finding.name);
                setSeverity(finding.severity);
                setCve(finding.cve || "");

                const target = (findingSection: FindingSection) => ({
                    findingDefinition: {
                        findingDefinition: props.uuid,
                        findingSection,
                    },
                });
                sections.Summary.set(finding.summary, target(FindingSection.Summary));
                sections.Description.set(finding.description, target(FindingSection.Description));
                sections.Impact.set(finding.impact, target(FindingSection.Impact));
                sections.Remediation.set(finding.remediation, target(FindingSection.Remediation));
                sections.References.set(finding.references, target(FindingSection.References));
            }),
        );
    }, [props.uuid]);

    return (
        <div className={"create-finding-definition-container"}>
            <div className={"pane"} style={{ flex: "row" }}>
                <ArrowLeftIcon title={"Back"} {...ROUTES.FINDING_DEFINITION_LIST.clickHandler({})} />
                <h1 className={"heading"}>Edit Finding Definition</h1>
            </div>
            <div className={"pane"}>
                <div className={"create-finding-definition-form"}>
                    <div className={"create-finding-definition-header"}>
                        <h2 className={"sub-heading"}>Name</h2>
                        <h2 className={"sub-heading"}>Severity</h2>
                        <h2 className={"sub-heading"}>CVE</h2>
                        <Input maxLength={255} value={name} onChange={setName} />
                        <SelectPrimitive
                            value={severity}
                            options={["Okay", "Low", "Medium", "High", "Critical"]}
                            onChange={(value) => setSeverity(value || severity)}
                        />
                        <Input maxLength={255} value={cve} onChange={setCve} />
                    </div>

                    <div>
                        <h2 className={"sub-heading"}>
                            <InformationIcon />
                            Summary
                        </h2>
                        <div>
                            {sections.Summary.value.length === 0
                                ? null
                                : sections.Summary.value.split("\n\n").map((line) => <p>{line}</p>)}
                        </div>
                    </div>

                    <div>
                        <h2 className={"sub-heading"}>
                            <BookIcon />
                            Description
                        </h2>
                        <GithubMarkdown>{sections.Description.value}</GithubMarkdown>
                    </div>

                    <div>
                        <h2 className={"sub-heading"}>
                            <FlameIcon />
                            Impact
                        </h2>
                        <GithubMarkdown>{sections.Impact.value}</GithubMarkdown>
                    </div>

                    <div>
                        <h2 className={"sub-heading"}>
                            <BandageIcon />
                            Remediation
                        </h2>
                        <GithubMarkdown>{sections.Remediation.value}</GithubMarkdown>
                    </div>

                    <div>
                        <h2 className={"sub-heading"}>
                            <LibraryIcon />
                            References
                        </h2>
                        <GithubMarkdown>{sections.References.value}</GithubMarkdown>
                    </div>

                    <AdminOnly>
                        <DeleteButton finding={props.uuid} name={name} />
                    </AdminOnly>
                </div>
                <div className={"create-finding-definition-editor"}>
                    <SectionSelectionTabs
                        sections={sections}
                        others={{
                            [FindingSection.Summary]: cursors.some(
                                ({ data: { section } }) => section === FindingSection.Summary,
                            ),
                            [FindingSection.Description]: cursors.some(
                                ({ data: { section } }) => section === FindingSection.Description,
                            ),
                            [FindingSection.Impact]: cursors.some(
                                ({ data: { section } }) => section === FindingSection.Impact,
                            ),
                            [FindingSection.Remediation]: cursors.some(
                                ({ data: { section } }) => section === FindingSection.Remediation,
                            ),
                            [FindingSection.References]: cursors.some(
                                ({ data: { section } }) => section === FindingSection.References,
                            ),
                        }}
                    />
                    <ModelEditor model={sections[sections.selected].model} setEditor={setEditor} />
                    {cursors.map(({ cursor, data }) =>
                        cursor.render(<div className={"cursor-label"}>{data.displayName}</div>),
                    )}
                </div>
            </div>
        </div>
    );
}

function DeleteButton({ finding, name }: { finding: UUID; name: string }) {
    const [open, setOpen] = React.useState(false);

    return (
        <Popup
            modal
            nested
            open={open}
            onClose={() => setOpen(false)}
            trigger={
                <div>
                    <button onClick={() => setOpen(true)} className="button danger" type="button">
                        Delete this Finding
                    </button>
                </div>
            }
        >
            <div className="popup-content pane" style={{ width: "78ch" }}>
                <h1 className="heading neon">Are you sure you want to delete the finding definition "{name}"?</h1>
                <div>
                    <p>The following findings will be deleted due to this:</p>
                    <ul>
                        <li>TODO</li>
                    </ul>
                </div>
                <button
                    className="button danger"
                    type="button"
                    onClick={() => {
                        toast.promise(
                            Api.knowledgeBase.findingDefinitions.admin
                                .delete(finding)
                                .then(() => ROUTES.FINDING_DEFINITION_LIST.visit({})),
                            {
                                pending: "Deleting finding definition...",
                                error: "Failed to delete finding definition!",
                                success: "Successfully deleted finding definition",
                            },
                        );
                    }}
                >
                    Delete
                </button>
                <button className="button" type="reset" onClick={() => setOpen(false)}>
                    Cancel
                </button>
            </div>
        </Popup>
    );
}

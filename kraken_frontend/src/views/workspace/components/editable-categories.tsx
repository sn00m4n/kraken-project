import React from "react";
import Creatable from "react-select/creatable";
import Popup from "reactjs-popup";
import { Api } from "../../../api/api";
import { SimpleFindingCategory, UserPermission } from "../../../api/generated";
import FindingCategory from "../../../components/finding-category";
import { selectStyles } from "../../../components/select-menu";
import USER_CONTEXT from "../../../context/user";
import { handleApiError } from "../../../utils/helper";
import CreateCategory from "./create-category";

export type EditableCategoriesProps = {
    /** List of currently set tags */
    categories: Array<SimpleFindingCategory>;

    /** Callback when the list changed */
    onChange: (categories: Array<SimpleFindingCategory>) => void;

    /** called when all tags are loaded */
    onCategoriesLoaded?: (categories: Array<SimpleFindingCategory>) => void;

    /** can be set to false to disallow creation, otherwise enabled. Creation won't show in either case if the user is not an admin. */
    allowCreate?: boolean;
};

/** A multi `<Select />` for editing a list of categories */
export default function EditableCategories(props: EditableCategoriesProps) {
    const { user } = React.useContext(USER_CONTEXT);
    const { categories, onChange } = props;
    const allowCreate = (props.allowCreate ?? true) && user.permission === UserPermission.Admin;

    // State for create new category modal
    const [newCategory, setNewCategory] = React.useState<string | null>(null);

    // Load categories from backend
    const [allCategories, setAllCategories] = React.useState<Array<SimpleFindingCategory>>([]);
    React.useEffect(() => {
        setAllCategories([]);
        Api.findingCategories.all().then(handleApiError((v) => setAllCategories(v.categories)));
    }, []);

    return (
        <>
            <Creatable<SimpleFindingCategory, true>
                placeholder="Categories"
                styles={selectStyles("default")}
                isMulti={true}
                onCreateOption={allowCreate ? setNewCategory : undefined}
                value={categories}
                onChange={(cats) => onChange([...cats])}
                options={allCategories}
                formatOptionLabel={(c) =>
                    "value" in c ? (
                        <>
                            {allowCreate ? "Create " : "Unknown category "}
                            <FindingCategory name={String(c.value)} />
                        </>
                    ) : (
                        <FindingCategory {...c} />
                    )
                }
                getOptionLabel={({ name }) => name}
                getOptionValue={({ uuid }) => uuid}
            />
            <Popup nested modal open={newCategory !== null && allowCreate} onClose={() => setNewCategory(null)}>
                <CreateCategory
                    initialName={newCategory || ""}
                    onCreated={(c) => {
                        setAllCategories((cats) => [c, ...cats]);
                        setNewCategory(null);
                        onChange([...categories, c]);
                    }}
                />
            </Popup>
        </>
    );
}

import { getHeader } from "./authUtils";
import { sendRequest } from "./sendRequest";

export async function getAutomates() {
    const opts = {
        headers: getHeader()
    };
    return sendRequest(`/automates`, opts);
}

export async function getAutomatesByWorkspace(workspace_id) {
    const opts = {
        headers: getHeader()
    };
    return sendRequest(`/automates/${workspace_id}`, opts);
}

export async function getAutomateById(workspace_id, automate_id) {
    const opts = {
        headers: getHeader()
    };
    return sendRequest(`/automates/${workspace_id}/${automate_id}`, opts);
}

export async function postAutomate(title, workspace_id, workflow, variables, secrets) {
    const opts = {
        method: "POST",
        headers: getHeader(),
        body: JSON.stringify({
            title: title,
            workspace_id: workspace_id,
            workflow: workflow,
            variables: variables,
            secrets: secrets
        })
    };
    return sendRequest(`/automates/${workspace_id}`, opts);
}

export async function putAutomate(title, workspace_id, workflow, variables, secrets) {
    const opts = {
        method: "POST",
        headers: getHeader(),
        body: JSON.stringify({
            title: title,
            workspace_id: workspace_id,
            workflow: workflow,
            variables: variables,
            secrets: secrets
        })
    };
    return sendRequest(`/automates/${workspace_id}`, opts);
}

export async function deleteAutomate(workspace_id, automate_id) {
    const opts = {
        method: "DELETE",
        headers: getHeader()
    };
    return sendRequest(`/automates/${workspace_id}/${automate_id}`, opts);
}

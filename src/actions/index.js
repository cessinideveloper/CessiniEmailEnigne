export const ActionTypes = {
    STORE_USER: "STORE_USER",
    STORE_CAMPAIGN: "STORE_CAMPAIGN",
    LOAD_CAMPAIGN: "LOAD_CAMPAIGN",
    GET_ALL_EMAIL_LIST: "GET_ALL_EMAIL_LIST",
    STORE_ALL_EMAIL_LIST: "STORE_ALL_EMAIL_LIST",
    GET_ALL_CAMPAIGNS: "GET_ALL_CAMPAIGNS",
    STORE_ALL_CAMPAIGNS: "STORE_ALL_CAMPAIGNS",
    EMAIL_LIST_ADDED: "EMAIL_LIST_ADDED",
    CAMPAIGNS_ADDED: "CAMPAIGNS_ADDED",
    DELETE_CAMPAIGN: "DELETE_CAMPAIGN",
    DELETE_EMAIL_LIST: "DELETE_EMAIL_LIST",
    CAMPAIGN_UPDATED: "CAMPAIGN_UPDATED"
};

export const storeUserRequest = (payload) => ({
    type: ActionTypes.STORE_USER,
    payload: payload,
});

export const storeCampaign = (payload) => ({
    type: ActionTypes.STORE_CAMPAIGN,
    payload: payload,
});

export const loadCampaign = (payload) => ({
    type: ActionTypes.LOAD_CAMPAIGN,
    payload: payload,
});

export const getAllEmailList = (id) => ({
    type: ActionTypes.GET_ALL_EMAIL_LIST,
    payload: id
});

export const getAllCampaigns = (id) => ({
    type: ActionTypes.GET_ALL_CAMPAIGNS,
    payload: id
});

export const storeAllEmailList = (emailist) => ({
    type: ActionTypes.STORE_ALL_EMAIL_LIST,
    payload: emailist
});

export const storeAllCampaigns = (campaigns) => ({
    type: ActionTypes.STORE_ALL_CAMPAIGNS,
    payload: campaigns
});

export const addCampaign = () => ({
    type: ActionTypes.CAMPAIGNS_ADDED,
});

export const addEmailList = (data) => ({
    type: ActionTypes.EMAIL_LIST_ADDED,
    payload: data
});

export const deleteCamp = (id) => ({
    type: ActionTypes.DELETE_CAMPAIGN,
    payload: id
});

export const deleteEmailList = (id) => ({
    type: ActionTypes.DELETE_EMAIL_LIST,
    payload: id
});

export const updateCampaign = (userId) => ({
    type: ActionTypes.CAMPAIGN_UPDATED,
    payload: userId
});
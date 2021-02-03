import {
    call, take, put, delay, fork
} from "redux-saga/effects";
import axios from 'axios';
import store from '../store/store'
import { ActionTypes, storeAllEmailList, storeAllCampaigns } from '../actions'



const fetchEmaillist = () => {
    return fetch("https://emailengine2020.herokuapp.com/newemail/").then(re => re.json())
}

const fetchCampaings = () => {
    return fetch("https://emailengine2020.herokuapp.com/newcampaign").then(re => re.json())
}

const postEmaillist = (data) => {
    return axios.post("https://emailengine2020.herokuapp.com/newemail/", data).then(re => re.data)


}

const postCampaings = (data) => {
    return fetch("https://emailengine2020.herokuapp.com/newcampaign", data).then(re => re.json())
}

export function* watchUserSignIn() {
    while (true) {
        const { payload } = yield take(ActionTypes.GET_ALL_EMAIL_LIST)
        yield fork(watchEmailListAdd)
        yield fork(watchCampAdd)
        yield fork(updateCampaigns)
        yield fork(getCampaigns, payload)
        yield call(getEmailList, payload)
    }
}



export function* watchEmailListAdd() {
    while (true) {
        console.log("watchEmailListAdd")
        const { payload } = yield take(ActionTypes.EMAIL_LIST_ADDED)
        const postData = yield call(postEmaillist, payload)
        console.log(postData)
        yield call(getEmailList, store.getState().userData.id)
    }
}

export function* watchCampAdd() {
    while (true) {
        yield take(ActionTypes.CAMPAIGNS_ADDED)
        yield call(getCampaigns, store.getState().userData.id)
    }
}

export function* getEmailList(payload) {
    const allEmailList = yield call(fetchEmaillist)
    console.log(allEmailList)
    console.log(payload)
    const filteredEmailList = allEmailList.filter(emailList => emailList.my_customer == payload)
    console.log(filteredEmailList)
    yield put(storeAllEmailList(filteredEmailList))
}

export function* getCampaigns(payload) {
    delay(300)
    const allCampaigns = yield call(fetchCampaings)
    const filteredCampaigns = allCampaigns.filter(camp => camp.my_customer == payload)
    yield put(storeAllCampaigns(filteredCampaigns))
}

export function* updateCampaigns() {
    while (true) {
        console.log("updateCampaigns ")
        const { payload } = yield take(ActionTypes.CAMPAIGN_UPDATED)
        console.log("CAMPAIGN_UPDATED ")
        const allCampaigns = yield call(fetchCampaings)
        const filteredCampaigns = allCampaigns.filter(camp => camp.my_customer === payload)
        console.log("reached here")
        yield put(storeAllCampaigns(filteredCampaigns))
    }

}






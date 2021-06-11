import { API_URL } from "../../constant";
import axios from "axios";

// get all languages api
const getLanguages = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-languages`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get all cast categories api
const getMainCastes = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-cast-categories`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get all sub cast categories api
const getSubCastes = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-sub-castes`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get all mills api
const getMills = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-mills`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get all mother tongue api
const getMotherTongue = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-mother-tongue`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get all qualifyied subject api
const getQualifiedSubject = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-qualif-test-subject`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get all religion api
const getReligion = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-religions`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get all skill programs api
const getSkillPrograms = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-skill-programs`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get all skill api
const getSkills = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-skills`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

const MasterService1 = () => {
    return {
        getLanguages, getMainCastes, getSubCastes, getMills, getMotherTongue, getQualifiedSubject, getReligion, getSkillPrograms, getSkills
    };
}

export default MasterService1;
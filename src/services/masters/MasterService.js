import { API_URL } from "../../constant";
import axios from "axios";

// get boards api
const getBoards = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-boards`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get certifications api
const getCertifications = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-certifications`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get cities api
const getCities = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-cities`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get cities api
const getCountries = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-countries`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get disiabilites api
const getDisabilities = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-disabilities`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get EducationMedium api
const getEducationMedium = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-education-medium`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get Educations api
const getEducations = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-educations`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get Funcional Area api
const getFuncionalArea = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-functional-areas`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get Institutes api
const getInstitutes = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-institutes`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get Institutes api
const getPostCategories = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-post-categories`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get QualifiGroups api
const getQualifiGroups = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-quali-groups`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get Salary Range api
const getSalaryRange = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-salary-range`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get Sectors api
const getSectors = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-sectors`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get Specialization api
const getSpecialization = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-specializations`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get States api
const getStates = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-states`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get Stream api
const getStreams = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-streams`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get Disabilities Subcategories api
const getDisabilitiesSub = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-disabilities-subcategories`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get All extrance exam api
const getEntranceExams = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-entrance-exams`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

// get all experiences api
const getExperience = function (offset, limit, search) {
    return axios({
        method: "post",
        url: `${API_URL}/get-all-experiences`,
        data: { offset, limit, search },
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, },
    })
};

const MasterService = () => {
    return {
        getBoards, getCertifications, getCities, getCountries, getDisabilities, getEducationMedium, getEducations, getFuncionalArea, getInstitutes, getPostCategories, getQualifiGroups, getSalaryRange, getSectors, getSpecialization, getStates, getStreams, getDisabilitiesSub, getEntranceExams, getExperience
    };
}

export default MasterService;
import React from 'react';
// loading essential components
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Countries = React.lazy(() => import("./views/masters/Countries"));
const States = React.lazy(() => import("./views/masters/States"));
const Cities = React.lazy(() => import("./views/masters/Cities"));
const Sectors = React.lazy(() => import("./views/masters/Sectors"));
const PostCategories = React.lazy(() => import("./views/masters/PostCategories"));
const SalaryRange = React.lazy(() => import("./views/masters/SalaryRange"));
const Institutes = React.lazy(() => import("./views/masters/Institutes"));
const Boards = React.lazy(() => import("./views/masters/Boards"));
const FunctionalAreas = React.lazy(() => import("./views/masters/FunctionalAreas"));
const QualificationGroups = React.lazy(() => import("./views/masters/QualificationGroups"));
const Streams = React.lazy(() => import("./views/masters/Streams"));
const Educations = React.lazy(() => import("./views/masters/Educations"));
const Specializations = React.lazy(() => import("./views/masters/Specializations"));
const Certifications = React.lazy(() => import("./views/masters/Certifications"));
const EducationMedium = React.lazy(() => import("./views/masters/EducationMedium"));
const Disability = React.lazy(() => import("./views/masters/Disability"));
const DisabilitiesSub = React.lazy(() => import("./views/masters/DisabilitiesSub"));
const EntranceExam = React.lazy(() => import("./views/masters/EntranceExam"));
const Experience = React.lazy(() => import("./views/masters/Experience"));
const Languages = React.lazy(() => import("./views/masters/Languages"));
const CastCategories = React.lazy(() => import("./views/masters/CastCategories"));
const SubCastes = React.lazy(() => import("./views/masters/SubCastes"));
const Mills = React.lazy(() => import("./views/masters/Mills"));
const MotherTongue = React.lazy(() => import("./views/masters/MotherTongue"));
const QualifyingSubjects = React.lazy(() => import("./views/masters/QualifyingSubjects"));
const Religions = React.lazy(() => import("./views/masters/Religions"));
const SkillPrograms = React.lazy(() => import("./views/masters/SkillPrograms"));
const Skills = React.lazy(() => import("./views/masters/Skills"));


const Profile = React.lazy(() => import("./views/Profile"));

export const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/masters/countries",
    component: Countries,
  },
  {
    path: "/masters/states",
    component: States,
  },
  {
    path: "/masters/cities",
    component: Cities,
  },
  {
    path: "/masters/sectors",
    component: Sectors,
  },
  {
    path: "/masters/post-categories",
    component: PostCategories,
  },
  {
    path: "/masters/salary-ranges",
    component: SalaryRange,
  },
  {
    path: "/masters/institutes",
    component: Institutes,
  },
  {
    path: "/masters/boards",
    component: Boards,
  },
  {
    path: "/masters/functional-areas",
    component: FunctionalAreas,
  },
  {
    path: "/masters/qualification-groups",
    component: QualificationGroups,
  },
  {
    path: "/masters/streams",
    component: Streams,
  },
  {
    path: "/masters/educations",
    component: Educations,
  },
  {
    path: "/masters/specializations",
    component: Specializations,
  },
  {
    path: "/masters/certifications",
    component: Certifications,
  },
  {
    path: "/masters/education-medium",
    component: EducationMedium,
  },
  {
    path: "/masters/disabilities",
    component: Disability,
  },
  {
    path: "/masters/disability-sub",
    component: DisabilitiesSub,
  },
  {
    path: "/masters/entrance-exam",
    component: EntranceExam,
  },
  {
    path: "/masters/experience",
    component: Experience,
  },
  {
    path: "/masters/language",
    component: Languages,
  },
  {
    path: "/masters/caste-category",
    component: CastCategories,
  },
  {
    path: "/masters/sub-caste-category",
    component: SubCastes,
  },
  {
    path: "/masters/mills",
    component: Mills,
  },
  {
    path: "/masters/mother-tongue",
    component: MotherTongue,
  },
  {
    path: "/masters/qualifying-subject",
    component: QualifyingSubjects,
  },
  {
    path: "/masters/religion",
    component: Religions,
  },
  {
    path: "/masters/skill-programs",
    component: SkillPrograms,
  },
  {
    path: "/masters/skills",
    component: Skills,
  },
];

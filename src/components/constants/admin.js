export const ADMIN_DASHBOARD_MODE_CREATE = "ADMIN_DASHBOARD_MODE_CREATE"
export const ADMIN_DASHBOARD_MODE_READ = "ADMIN_DASHBOARD_MODE_READ"
export const ADMIN_DASHBOARD_MODE_UPDATE = "ADMIN_DASHBOARD_MODE_UPDATE"
// events
// export const EVENT_FORM_TEMPLATE = {
//     name: "",
//     organization: "",
//     skills: [],
//     month: "",
//     day: "",
//     description: ""
// }
export const EVENT_FORM_TEMPLATE = {
    "volunteers": [],
    "_id": "65be2f3742113c61cfd10ace",
    "name": "1800",
    "slug": "1800",
    "startDate": "2024-12-10T00:00:00.000Z",
    "endDate": "2024-12-17T00:00:00.000Z",
    "description": "     ",
    "maxHoursGiven": 28,
    "interest": ["Category 1"],
    "skills": [],
    "isCompleted": false,
    "createdAt": "2024-02-03T12:19:03.627Z",
    "updatedAt": "2024-02-03T14:48:01.632Z",
    "__v": 0
}
// list of 
export const INTERESTS_LIST = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"]
export const SKILLS_LIST = ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"]

export const EVENT_ATTENDANCE_REQUEST = "EVENT_ATTENDANCE_REQUEST";
export const EVENT_ATTENDANCE_SUCCESS = "EVENT_ATTENDANCE_SUCCESS";
export const EVENT_ATTENDANCE_FAIL = "EVENT_ATTENDANCE_FAIL";
export const EVENT_ATTENDANCE_RESET = "EVENT_ATTENDANCE_RESET";

export const MARK_EVENT_ATTENDANCE_REQUEST = "MARK_EVENT_ATTENDANCE_REQUEST";
export const MARK_EVENT_ATTENDANCE_SUCCESS = "MARK_EVENT_ATTENDANCE_SUCCESS";
export const MARK_EVENT_ATTENDANCE_FAIL = "MARK_EVENT_ATTENDANCE_FAIL";
export const MARK_EVENT_ATTENDANCE_RESET = "MARK_EVENT_ATTENDANCE_RESET";

export const GENERATE_EVENT_QR_REQUEST = "GENERATE_EVENT_QR_REQUEST";
export const GENERATE_EVENT_QR_SUCCESS = "GENERATE_EVENT_QR_SUCCESS";
export const GENERATE_EVENT_QR_FAIL = "GENERATE_EVENT_QR_FAIL";
export const GENERATE_EVENT_QR_RESET = "GENERATE_EVENT_QR_RESET";
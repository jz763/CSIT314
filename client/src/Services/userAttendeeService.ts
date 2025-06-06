import httpCommon from "../http-common"
import UserAttendeeData from "../Type/UserAttendeeEntity"


//Create userAttendee 
const createUserAttendee = (data: UserAttendeeData) =>{
    return httpCommon.post<UserAttendeeData>("/createUserAttendee", data);
}

//Read all userAttendes
const getAllUserAttendees = () =>{
    return httpCommon.get<Array<UserAttendeeData>>("/getAllTickets");
}

//Read specific userAttendee 
const getUserAttendee = (id: any) =>{
    return httpCommon.get<UserAttendeeData>("/getUserAttendeeById/${id}");
}

//Update userAttendee 
const updateUserAttendee = (id: any, data: UserAttendeeData) =>{
    return httpCommon.put<any>("/updateUserAttendee/${id}", data);
}

//Delete ticket 
const deleteUserAttendee = (id: any) =>{
    return httpCommon.delete<any>("/deleteUserAttendee/${id}");
}

const UserAttendeeService = {
    getAllUserAttendees,
    getUserAttendee,
    createUserAttendee,
    updateUserAttendee,
    deleteUserAttendee
}

export default UserAttendeeService;
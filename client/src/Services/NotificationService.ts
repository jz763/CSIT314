import httpCommon from "../http-common"
import NotificationData from "../Type/NotificationEntity"


//Create Notification 
const createNotification = (data: NotificationData) =>{
    return httpCommon.post<NotificationData>("/createNotification", data);
}

//Read all Notifications
const getAllNotifications = () =>{
    return httpCommon.get<Array<NotificationData>>("/getAllNotifications");
}

//Read specific Notification 
const getNotification = (id: any) =>{
    return httpCommon.get<NotificationData>("/getNotificationById/${id}");
}

//Update Notification 
const updateNotification = (id: any, data: NotificationData) =>{
    return httpCommon.put<any>("/updateNotification/${id}", data);
}

//Delete Notification 
const deleteNotification = (id: any) =>{
    return httpCommon.delete<any>("/deleteNotification/${id}");
}

const NotificationService = {
    getAllNotifications,
    getNotification,
    createNotification,
    updateNotification,
    deleteNotification
}

export default NotificationService;
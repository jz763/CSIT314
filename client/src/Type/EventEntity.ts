export default interface EventData{
    id?:any,
    eventEntityName: string,
    eventEntityDate: Date,
    eventEntityTime: TimeRanges,
    eventEntityLocation: string,
    eventEntityAttenddes: Array<string>
}
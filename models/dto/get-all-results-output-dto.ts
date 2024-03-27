import { Result } from "../Result";

export interface GetAllResultsOutputDto extends Result {
    courseName: string,
    studentName: string
}
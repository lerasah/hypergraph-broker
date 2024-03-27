export interface CreatedResponseDto<T> {
    msg: string,
    id: string,
    record: T
}
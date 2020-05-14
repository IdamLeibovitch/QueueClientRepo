
export interface Patient {
    id: number; 
    name: string;
    createdAt: Date;
    status: Status
}

export enum Status {
    Awaiting,
    InProgress,
    Completed
}
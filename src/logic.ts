export type Payload = {
    message: string
}

export function getTestPayload(): Payload {
    return { message: 'changed the message for learning purposes' }
}

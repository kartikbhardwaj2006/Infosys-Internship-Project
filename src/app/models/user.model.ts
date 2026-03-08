/**
 * User model for FlowBoard authentication (LocalStorage-based, demo only).
 */
export interface User {
    id: string;
    email: string;
    password: string;
    name?: string;
    bio?: string;
}

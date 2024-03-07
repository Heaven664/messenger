export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface InfoUpdateRequest {
  id: string;
  name: string;
  email: string;
  residency: string;
}

export interface LastSeenUpdateRequest {
  id: string;
  lastSeenPermission: boolean;
}

export interface addContactRequest {
  email: string;
  friendEmail: string;
}

export interface removeContactRequest {
  userEmail: string;
  friendEmail: string;
}

// Automatically generate from mongo schema

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

// Automatically generate from mongo schema

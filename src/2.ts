interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// We only want to show the id and name publicly
type PublicUser = Pick<User, "id" | "name">;
// This creates a new type with just those two properties (id and name) 🔑

// We want everything EXCEPT the password
type UserWithoutPassword = Omit<User, "password">;
// This creates a type with id, name, and email (no password) 🔒

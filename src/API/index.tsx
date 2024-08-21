/** @format */
export interface CustomersDataType {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
}

// export async function getCustomers(): Promise<CustomersDataType[]> {
//   const responce = await fetch("https://dummyjson.com/users");
//   const data = await responce.json();
//   return data.users.map((user: any) => ({
//     id: user.id,
//     firstName: user.firstName,
//     lastName: user.lastName,
//     age: user.age,
//     gender: user.gender,
//     email: user.email,
//     phone: user.phone,
//     username: user.username,
//     password: user.password,
//     birthDate: user.birthDate,
//     image: user.image,
//   }));
// }

export const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};

import User from "../../app/models/UserModel";
  
export async function getUsers() {
  const users = await User.findAll(
    {
      attributes: [
        'name',
        'email'
      ]
    }
  );
  return users
}

export async function saveUser(_, { input }) {
  const user = await User.create(input)
  return user
}

// export async function deleteUser(_, { id }) {
//   const del = await Comment.findByIdAndDelete(id)
//   return del
// }
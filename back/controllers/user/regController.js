export const getUserProfile = (req, res) => {
  const user = {
    name: 'Ilya',
    age: 20
  }

  res.json(user)
}

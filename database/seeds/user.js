import User from '../models/UserModel'

export default async function () {
  try {
    const userCount = await User.countDocuments()
    if (userCount > 0) return

    const dummyUser = new User({
      username: 'test',
      password: 'test',
      country: 'BG',
    })
    await User.create(dummyUser)
  } catch (err) {
    console.log('Something went wrong seeding the database!')
    throw err
  }
}

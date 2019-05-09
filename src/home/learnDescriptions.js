export const introDescription = 'Learn a few basics about wheeling, including how they work, how much they cost, how hard they are to ride etc. This informational session is followed by short test rides around the arena on our getting-started wheels.'
export const beginnerDescription = 'This class takes place in a paved arena and provides more detail than the discovery class about how the wheels work, safety issues, road considerations etc. This is followed by an more intensive session on our training wheels which should have you riding short distances hand-free by the end of it.'
export const advancedDescription = 'Once you have some experince with basic riding and turning, this class gives you more technical training, including a turning course, navigating obstacles, as well as providing more information about general wheel use -- battery management, riding inclement weather etc.'
export const roadDescription = 'Road excursions happen most weekends; tour the city with our experienced guides while practicing using the wheel in real world circumstances. After a few of these you will have the experience and knowledge to take your wheel out on your own adventures!'

export const introCourse = ({
  title: 'Discover',
  desc: introDescription,
  price: 5
})

export const beginCourse = ({
  title: 'Beginner Skills',
  desc: beginnerDescription,
  price: 10
})

export const advancedCourse = ({
  title: 'Advanced Skills',
  desc: advancedDescription,
  price: 10
})

export const roadCourse = ({
  title: 'Road Skills',
  desc: roadDescription,
  price: 5
})


export const courses = [
  introCourse,
  beginCourse,
  advancedCourse,
  roadCourse
]


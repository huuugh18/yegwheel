import React from 'react';

const LearnItems = () => <HomeSectionContent id="home-learn-container"> {
  courses.map((course, i) => {
    const {title, desc} = course
    return <LearnCard key={`c${i}`} header={title} price={10} description={desc} />
  })
}</HomeSectionContent>

export default LearnItems

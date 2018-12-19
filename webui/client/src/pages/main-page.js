import React from 'react'
import { connect } from 'redux-bundler-react'

import ReleasesContainedr from '../components/releases-container'
import SunburstContainer from '../components/sunburst-container'
import TestTagsList from '../components/test-tags-list'
import ActiveTestsList from '../components/active-tests-list'
import ActiveTestSequence from '../components/active-test-sequence'

function MainPage () {
  return (
      <main id='main-splash' className='min-vh-80 pa4 flex flex-column'>
      <h2>You are doing a good job.</h2>
      <ReleasesContainedr />
      <SunburstContainer />
      <TestTagsList />
      <ActiveTestsList />
      <ActiveTestSequence />
      </main>
  )
}

export default connect(
  MainPage
)

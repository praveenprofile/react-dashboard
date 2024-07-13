import React, { Suspense } from 'react'


// routes config
import routes from '../routes'

const AppContent = () => {
  return (
<>
<section className='main_dashboard'>
  <div className='container'>
    <div className='row'>
      <div className='col-md-12'>
          <h1>Hello Dashboard</h1>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default React.memo(AppContent)

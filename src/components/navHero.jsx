import React from 'react'

function NavHero(props) {
  return (
    <>
        {/* Hero section */}
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
                <h1 className="display-3 text-white mb-3 animated slideInDown">{props.title}</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">{props.title}</li>
                    </ol>
                </nav>
            </div>
        </div>
        {/* Hero section ends */}
    </>
  )
}

export default NavHero
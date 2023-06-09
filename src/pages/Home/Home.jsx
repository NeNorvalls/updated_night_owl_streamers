import React from 'react'
import image12 from '../../images/12.png'
import image5 from '../../images/5.png'
import imagejaz from '../../images/jaz.jpg'
import image18 from '../../images/18.jpg'
import image17 from '../../images/17.jpg'
import image7 from '../../images/7.jpg'
import imagetin from '../../images/tin.jpg'
import imagegallery5 from '../../images/gallery5.jpg'
const Home = () => {
  return (
    <div>
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-md-12">
            <h1 className="primary-text">Features</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid img-responsive"
              src={image12}
              alt="Responsive"
            />
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid img-responsive"
              src={image5}
              alt="Red Apple"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="container-fluid my-4">
              <h2 className="primary-text">Online Friendlist</h2>
              <div className="row">
                <div className="col-md-12">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="username">
                          <h5 className="primary-text">Beth Simona</h5>
                          <img
                            className="img-fluid img-thumbnail"
                            src={imagejaz}
                            alt="Avatar"
                            style={{ width: '200px', height: '200px' }}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="username">
                          <h5 className="primary-text">Joyce Rubic</h5>
                          <img
                            className="img-fluid img-thumbnail"
                            src={image18}
                            alt="Avatar"
                            style={{ width: '200px', height: '200px' }}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="username">
                          <h5 className="primary-text">Marie Sletten</h5>
                          <img
                            className="img-fluid img-thumbnail"
                            src={image17}
                            alt="Avatar"
                            style={{ width: '200px', height: '200px' }}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="username">
                          <h5 className="primary-text">Dominic Fetter</h5>
                          <img
                            className="img-fluid img-thumbnail"
                            src={image7}
                            alt="Avatar"
                            style={{ width: '200px', height: '200px' }}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="username">
                          <h5 className="primary-text">Josie Palma</h5>
                          <img
                            className="img-fluid img-thumbnail"
                            src={imagetin}
                            alt="Avatar"
                            style={{ width: '200px', height: '200px' }}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="username">
                          <h5 className="primary-text">Lima Emper</h5>
                          <img
                            className="img-fluid img-thumbnail"
                            src={imagegallery5}
                            alt="Avatar"
                            style={{ width: '200px', height: '200px' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="container mt-4 mb-5 my-4">
              <div className="d-flex justify-content-center row">
                <div className="col-md-12">
                  <div className="feed p-2">
                    <h2 className="primary-text">New Post</h2>
                    <div className="bg-white border mt-2 my-4">
                      <div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white">
                          <div className="d-flex flex-row align-items-center feed-user-img">
                            <img
                              className="img-fluid img-thumbnail"
                              src={image18}
                              alt="Avatar"
                              style={{ width: '80px', height: '80px' }}
                            />
                            <h5 className="ml-2">John Doe</h5>
                          </div>
                          <div>
                            <span className="text-muted">3 hours ago</span>
                          </div>
                        </div>
                        <div className="p-2">
                          <p className="primary-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec convallis ligula eget tortor condimentum
                            lacinia.
                          </p>
                        </div>
                        <div className="p-2">
                          <button
                            className="btn btn-primary"
                            style={{ marginRight: '3rem' }}
                          >
                            Like
                          </button>
                          <button className="btn btn-secondary">Comment</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border mt-2 my-4">
                      <div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white">
                          <div className="d-flex flex-row align-items-center feed-user-img">
                            <img
                              className="img-fluid img-thumbnail"
                              src={image18}
                              alt="Avatar"
                              style={{ width: '80px', height: '80px' }}
                            />
                            <h5 className="ml-2">Jane Smith</h5>
                          </div>
                          <div>
                            <span className="text-muted">5 hours ago</span>
                          </div>
                        </div>
                        <div className="p-2">
                          <p className="primary-text">
                            Fusce eu felis placerat, lacinia eros vel, posuere
                            dui. Nam accumsan augue vel commodo malesuada.
                            Curabitur aliquam, odio vitae auctor vulputate,
                            sapien nibh consectetur mi, vel tristique urna nulla
                            ut libero.
                          </p>
                        </div>
                        <div className="p-2">
                          <button
                            className="btn btn-primary"
                            style={{ marginRight: '3rem' }}
                          >
                            Like
                          </button>
                          <button className="btn btn-secondary">Comment</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border mt-2 my-4">
                      <div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white">
                          <div className="d-flex flex-row align-items-center feed-user-img">
                            <img
                              className="img-fluid img-thumbnail"
                              src={image18}
                              alt="Avatar"
                              style={{ width: '80px', height: '80px' }}
                            />
                            <h5 className="ml-2">Jane Smith</h5>
                          </div>
                          <div>
                            <span className="text-muted">5 hours ago</span>
                          </div>
                        </div>
                        <div className="p-2">
                          <p className="primary-text">
                            Fusce eu felis placerat, lacinia eros vel, posuere
                            dui. Nam accumsan augue vel commodo malesuada.
                            Curabitur aliquam, odio vitae auctor vulputate,
                            sapien nibh consectetur mi, vel tristique urna nulla
                            ut libero.
                          </p>
                        </div>
                        <div className="p-2">
                          <button
                            className="btn btn-primary"
                            style={{ marginRight: '3rem' }}
                          >
                            Like
                          </button>
                          <button className="btn btn-secondary">Comment</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border mt-2 my-4">
                      <div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white">
                          <div className="d-flex flex-row align-items-center feed-user-img">
                            <img
                              className="img-fluid img-thumbnail"
                              src={image18}
                              alt="Avatar"
                              style={{ width: '80px', height: '80px' }}
                            />
                            <h5 className="ml-2">Jane Smith</h5>
                          </div>
                          <div>
                            <span className="text-muted">5 hours ago</span>
                          </div>
                        </div>
                        <div className="p-2">
                          <p className="primary-text">
                            Fusce eu felis placerat, lacinia eros vel, posuere
                            dui. Nam accumsan augue vel commodo malesuada.
                            Curabitur aliquam, odio vitae auctor vulputate,
                            sapien nibh consectetur mi, vel tristique urna nulla
                            ut libero.
                          </p>
                        </div>
                        <div className="p-2">
                          <button
                            className="btn btn-primary"
                            style={{ marginRight: '3rem' }}
                          >
                            Like
                          </button>
                          <button className="btn btn-secondary">Comment</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border mt-2 my-4">
                      <div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white">
                          <div className="d-flex flex-row align-items-center feed-user-img">
                            <img
                              className="img-fluid img-thumbnail"
                              src={image18}
                              alt="Avatar"
                              style={{ width: '80px', height: '80px' }}
                            />
                            <h5 className="ml-2">Jane Smith</h5>
                          </div>
                          <div>
                            <span className="text-muted">5 hours ago</span>
                          </div>
                        </div>
                        <div className="p-2">
                          <p className="primary-text">
                            Fusce eu felis placerat, lacinia eros vel, posuere
                            dui. Nam accumsan augue vel commodo malesuada.
                            Curabitur aliquam, odio vitae auctor vulputate,
                            sapien nibh consectetur mi, vel tristique urna nulla
                            ut libero.
                          </p>
                        </div>
                        <div className="p-2">
                          <button
                            className="btn btn-primary"
                            style={{ marginRight: '3rem' }}
                          >
                            Like
                          </button>
                          <button className="btn btn-secondary">Comment</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border mt-2 my-4">
                      <div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white">
                          <div className="d-flex flex-row align-items-center feed-user-img">
                            <img
                              className="img-fluid img-thumbnail"
                              src={image18}
                              alt="Avatar"
                              style={{ width: '80px', height: '80px' }}
                            />
                            <h5 className="ml-2">Jane Smith</h5>
                          </div>
                          <div>
                            <span className="text-muted">5 hours ago</span>
                          </div>
                        </div>
                        <div className="p-2">
                          <p className="primary-text">
                            Fusce eu felis placerat, lacinia eros vel, posuere
                            dui. Nam accumsan augue vel commodo malesuada.
                            Curabitur aliquam, odio vitae auctor vulputate,
                            sapien nibh consectetur mi, vel tristique urna nulla
                            ut libero.
                          </p>
                        </div>
                        <div className="p-2">
                          <button
                            className="btn btn-primary"
                            style={{ marginRight: '3rem' }}
                          >
                            Like
                          </button>
                          <button className="btn btn-secondary">Comment</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

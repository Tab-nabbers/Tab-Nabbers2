import React from "react";
// import "./DashboardComp.css";
import './Test.css';


const DashboardComp = props => (
    <div className="home-list">
        {/* =============== */}
        {/* <div className="button-style" data-uk-grid>
  <div className="uk-width-1-1">
      <button className="uk-button uk-button-default uk-button-large">Add Home</button>
  </div>
</div> */}

        <ul className="uk-subnav uk-subnav-divider" data-uk-margin>
            <li><a href="#">Add Home</a></li>
            <li><a href="#">Button 2</a></li>
            <li><a href="#">Button 3</a></li>
        </ul>


        {/* =============== */}

        <div data-uk-slider="center: true">
            <div className="uk-position-relative uk-visible-toggle uk-light">
                <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://getuikit.com/docs/images/light.jpg" alt="" />
                            </div>
                            <div className="uk-card-body">
                                <p>Name: {"props.name"}</p>
                                <p>Address:</p> {"props.address"}
                                <p>Price:</p> {"props.price"}
                                <p>Matches:</p> {"props.match"}
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Read more</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://getuikit.com/docs/images/light.jpg" alt="" />
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Name: {"props.name"}</h3>
                                <p>Address:</p> {"props.address"}
                                <p>Price:</p> {"props.price"}
                                <p>Matches:</p> {"props.match"}
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Read more</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://getuikit.com/docs/images/light.jpg" alt="" />
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Name: {"props.name"}</h3>
                                <p>Address:</p> {"props.address"}
                                <p>Price:</p> {"props.price"}
                                <p>Matches:</p> {"props.match"}
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Read more</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://getuikit.com/docs/images/light.jpg" alt="" />
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Name: {"props.name"}</h3>
                                <p>Address:</p> {"props.address"}
                                <p>Price:</p> {"props.price"}
                                <p>Matches:</p> {"props.match"}
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Read more</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://getuikit.com/docs/images/light.jpg" alt="" />
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Name: {"props.name"}</h3>
                                <p>Address:</p> {"props.address"}
                                <p>Price:</p> {"props.price"}
                                <p>Matches:</p> {"props.match"}
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Read more</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://getuikit.com/docs/images/light.jpg" alt="" />
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Name: {"props.name"}</h3>
                                <p>Address:</p> {"props.address"}
                                <p>Price:</p> {"props.price"}
                                <p>Matches:</p> {"props.match"}
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Read more</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

            </div>

            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

        </div>

    </div>

);

export default DashboardComp;
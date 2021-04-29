import React, {useEffect, useState} from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Container, Row, Col } from "reusecore/Layout";
import { useHistory } from "react-router-dom";

import PageHeader from "reusecore/PageHeader";
import Sidebar from "sections/Blog-sidebar";

import { BlogPageWrapper } from "./blogGrid.style";
import {BACKEND_URL} from "../../Constant";

const BlogPage = ({ admin, user }) => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const callBlogPage = async () => {
    try {
      const res = await fetch(BACKEND_URL+"/user/reports", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      console.log(res);
      const data = await res.json();

      if (res.status !== 200) {
        // throw new Error(res.error);
      }
    } catch (err) {
      //console.log(err);
      // window.open("/login");
    }
  };

  const [userD, setUserD] = useState(user)

  useEffect(() => {
    callBlogPage().then(r => {});
  }, []);

  useEffect(() => {
    if (userD === null){
      user !== null ? setUserD(user): setUserD(localStorage.getItem("user"))
    }
  }, [])

  useEffect(() => {console.log(userD)})

  return (
    <BlogPageWrapper>
      <PageHeader
        title={
          userD !== null ? (admin ? userD.name+"| Your area latest report" : userD.name+" | Your latest report"):""
        }
        areaName={userD !== null ? "PinCode: "+userD.pincode : "Hauz Khas"}
        admin={admin}
      />

      <div className="blog-page-wrapper">
        <Container>
          <Row>
            {
              <Col xs={9}>
                {
                  ( (country === "India" && region === "Delhi") || (country === "" && region === "") )&&<div className="blog-grid-wrapper">
                    <Row>
                      <Col xs={12} sm={4}>
                        <div className="post-block">
                          <div className="post-thumb-block">
                            <a>
                              <img src={"Sindhi-market.jpeg"} alt="img" />
                            </a>
                          </div>
                          <div className="post-content-block">
                            {/*<div className='post-meta-block'>*/}
                            {/*<span>In: </span>*/}
                            {/*<Link href="/blog-single">*/}
                            {/*  <a>Discussion</a>*/}
                            {/*</Link>*/}
                            {/*<span className='divider'>/</span>*/}
                            {/*<span>15 Sep 2020</span>*/}
                            {/*</div>*/}
                            {admin && (
                                <h2 className="post-title">
                                  <a>Nikhil Rawat</a>
                                </h2>
                            )}
                            <p className="post-entry">
                              Date: 15 Sep 2020 Location: SDA, Hauz Khas
                            </p>
                            {admin && (
                                <p className="post-entry">
                                  Contact Number : 8503936914 Relative Number :
                                  999898987
                                </p>
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} sm={4}>
                        <div className="post-block">
                          <div className="post-thumb-block">
                            <a>
                              <img src={"/download.jpeg"} alt="img" />
                            </a>
                          </div>
                          <div className="post-content-block">
                            {/*<div className='post-meta-block'>*/}
                            {/*<span>In: </span>*/}
                            {/*<Link href="/blog-single">*/}
                            {/*  <a>Discussion</a>*/}
                            {/*</Link>*/}
                            {/*<span className='divider'>/</span>*/}
                            {/*<span>15 Sep 2020</span>*/}
                            {/*</div>*/}
                            {admin && (
                                <h2 className="post-title">
                                  <a>Shubham Sahu</a>
                                </h2>
                            )}
                            <p className="post-entry">
                              Date: 15 Sep 2020 Location: SDA, Hauz Khas
                            </p>
                            {admin && (
                                <p className="post-entry">
                                  Contact Number : 8503936914 Relative Number :
                                  999898987
                                </p>
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} sm={4}>
                        <div className="post-block">
                          <div className="post-thumb-block">
                            <a>
                              <img src={"/download.jpeg"} alt="img" />
                            </a>
                          </div>
                          <div className="post-content-block">
                            {/*<div className='post-meta-block'>*/}
                            {/*<span>In: </span>*/}
                            {/*<Link href="/blog-single">*/}
                            {/*  <a>Discussion</a>*/}
                            {/*</Link>*/}
                            {/*<span className='divider'>/</span>*/}
                            {/*<span>15 Sep 2020</span>*/}
                            {/*</div>*/}
                            {admin && (
                                <h2 className="post-title">
                                  <a>Shubham Sahu</a>
                                </h2>
                            )}
                            <p className="post-entry">
                              Date: 15 Sep 2020 Location: SDA, Hauz Khas
                            </p>
                            {admin && (
                                <p className="post-entry">
                                  Contact Number : 8503936914 Relative Number :
                                  999898987
                                </p>
                            )}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                }
              </Col>
            }
            {
              admin && <Col xs={3}>
                <Sidebar country={country} setCountry={setCountry} region={region} setRegion={setRegion}></Sidebar>
              </Col>
            }
          </Row>
        </Container>
      </div>
    </BlogPageWrapper>
  );
};

// BlogPage style props
BlogPage.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  lg: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.object,
};

export default BlogPage;

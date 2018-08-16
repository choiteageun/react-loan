import React from 'react'
import "./Consultation.css"

class Consultation extends React.Component{
  render(){
    return (
      <section className="consultation">
          <div className="container flex">
              <div className="consulInput">
                  <ul style={{padding:0}}>
                      <div className="consulTitle">
                          <span>전문가에게 상담신청</span>
                      </div>
                      <li className="flex" style={{marginTop: '10px'}}>
                          <label className="inputName">이름</label>
                          <input type="text" className="focusOutline inputText" placeholder="이름을 입력해주세요"/>
                      </li>
                      <li className="flex" style={{marginTop: '10px'}}>
                          <label className="inputName">연락처</label>
                          <input type="text" className="focusOutline inputText" placeholder="연락처를 입력해주세요"/>
                      </li>
                      <li className="flex" style={{marginTop: '10px'}}>
                          <label className="inputName">대출금액</label>
                          <input type="text" className="focusOutline inputText" placeholder="대출금액 입력해주세요"/>
                      </li>
                      <li className="flex mt-3">
                          <label className="inputName">문의내용</label>
                          <textarea className="focusOutline inputText" rows="3" style={{resize:'none',lineHeight:'1.2rem'}}></textarea>
                      </li>
                      <div className="was-validated" style={{textAlign:'center',marginTop:'5px'}}>
                          <label className="custom-control custom-checkbox"style={{paddingLeft:0, paddingRight: '1.5rem'}}>
                              <input type="checkbox" className="custom-control-input" required/>
                              <span className="custom-control-indicator" style={{left:'auto',right:0}}></span>
                              <span className="custom-control-description">개인정보 취급방침 동의</span>
                          </label>
                      </div>
                      <div className="center mt-3">
                          <button className="btn btn-primary btn-lg" style={{width: '220px'}}>상담신청</button>
                      </div>
                      
                      
                      {/* <form className="was-validated">
                          <label className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" required>
                              <span className="custom-control-indicator"></span>
                              <span className="custom-control-description">Check this custom checkbox</span>
                          </label>
                      </form> */}
                      
                  </ul>
              </div>
              <div className="inSlide">
                  <div id="carouselExampleIndicators" className="carousel slide h-100" data-ride="carousel">
                      <ol className="carousel-indicators">
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      </ol>
                      <div className="carousel-inner">
                          <div className="carousel-item active">
                              <div className="d-block w-100" style={{height:'400px',backgroundColor:'rgba(0,0,0,0.6)'}}>
                                  <div className="slideContent">
                                      <h3 style={{marginBottom:'150px'}}>신뢰를 바탕으로 합니다.</h3>
                                      <p>신뢰를 바탕으로 합니다.신뢰를 바탕으로 합니다.신뢰를 바탕으로 합니다.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="carousel-item">
                              <div className="d-block w-100" style={{height:'400px',backgroundColor:'rgba(0,0,0,0.6)'}}>
                                  <div className="slideContent">
                                      <h3 style={{marginBottom:'150px'}}>신뢰를 바탕으로 합니다.</h3>
                                      <p>신뢰를 바탕으로 합니다.신뢰를 바탕으로 합니다.신뢰를 바탕으로 합니다.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="carousel-item">
                              <div className="d-block w-100" style={{height:'400px',backgroundColor:'rgba(0,0,0,0.6)'}}>
                                  <div className="slideContent">
                                      <h3 style={{marginBottom:'150px'}}>신뢰를 바탕으로 합니다.</h3>
                                      <p>신뢰를 바탕으로 합니다.신뢰를 바탕으로 합니다.신뢰를 바탕으로 합니다.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="sr-only">이전</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="sr-only">다음</span>
                      </a>
                  </div>
                  
              </div>
          </div>
      </section>
    )
  }
}

export default Consultation
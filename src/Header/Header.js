import React from 'react'
import "./Header.css"

class Header extends React.Component{
  render(){
    return (
      <section className="nav">
          <div className="container flex">
              {/* 회사명과 로고 */}
              <div className="logo" style={ {flex: 1, height:'100%' } }>
                  <span>YoungCapital</span>
              </div>
              {/* 메뉴 */}
              <div className="topMenu flex">
                  <button type="button" className="btn btn-outline-dark">대출상품</button>
                  <button type="button" className="btn btn-outline-dark">대출안내</button>
                  <button type="button" className="btn btn-outline-dark">대출신청</button>
                  <button type="button" className="btn btn-outline-dark">대출한도조회</button>
                  <button type="button" className="btn btn-outline-dark">고객만족센터</button>
                  <button type="button" className="btn btn-outline-dark">회사소개</button>
              </div>
          </div>
      </section>
    )
  }
}
export default Header
import React from 'react'
import Linkcard from './Linkcard'
import stockbook from '../../assetes/images/stockbook.jpg'
import handheld2 from '../../assetes/images/handheld2.jpg'
import hardsoft from '../../assetes/images/hardsoft.jpg'
import Static from '../../assetes/images/static.jpg'
import rt from '../../assetes/images/rt.jpg'

const DashboardHome = () => {
  return (
<div className="container text-center m-3 p-2">
  <div className="row ">
    <div className="col m-3">
    <Linkcard myImage={Static} title={"Static Mobile"} text={3}/>
    </div>
    <div className="col m-3">
    <Linkcard myImage={handheld2} title={"Hand Held Set"} text={5}/>
    </div>
    <div className="col m-3">
    <Linkcard myImage={rt} title={"RT Related Component"} text={6}/>
    </div>
    <div className="col m-3">
    <Linkcard myImage={hardsoft} title={"computer Hardware and Software"} text={10}/>
    </div>
    <div className="col m-3">
    <Linkcard myImage={stockbook} title={"Stock Book"} text={3}/>
    </div>
    <div className="col m-3">
    <Linkcard myImage={rt} title={"Vendor"} text={6}/>
    </div>
  </div>
</div>
  )
}

export default DashboardHome
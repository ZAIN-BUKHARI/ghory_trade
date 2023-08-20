import React from 'react'

const AdminTable = (props) => {
  return (
    <>
    <div className="table-row">
            <div className="table-cell first-cell">
                <p>{props.title}</p>
            </div>
            <div className="table-cell">
                <p>{props.desc}</p>
            </div>
        </div>
        <style>{`
.table-box
{
    // margin: 50px auto;
    // background: linear-gradient(135deg, #71b7e6, #9b59b6);

}

.table-row{
    display: table;
    width: 80%;
    margin: 10px auto;
    font-family: sans-serif;
    // background: transparent;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    padding: 12px 0;
    color: #555;
    font-size: 13px;
    box-shadow: 0 1px 4px 0px rgba(0,0,50,0.3);
}
.table-head{
    background: #8665f7;
    box-shadow: none;
    color: #fff;
    font-weight: 600;
}
.table-head .table-cell{
    border-right: none;
}
.table-cell{
    display: table-cell;
    width: 20%;
    text-align: center;
    padding: 4px 0;
    border-right: 1px solid #d6d4d4;
    vertical-align: middle;
}
.first-cell{
    text-align: left;
    padding-left: 10px;
}
.last-cell{
    border-right: none;
}
a{
    text-decoration: none;
    color: #555;
}

@media only screen and (max-width: 600px) {
  .table-row {
    font-size: 11px;
  }
}`}</style>
        </>
  )
}

export default AdminTable
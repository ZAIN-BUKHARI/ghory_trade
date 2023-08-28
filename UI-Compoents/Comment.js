import React from 'react'

const Comment = () => {
  return (
    <>
    <style>{`
.main{
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 150px;
    background-color:#36454F !important;
    color:white !important;
}

.full-boxer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color:#36454F !important;

}

.box-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#36454F !important;

    margin-bottom: 20px;
}

.comment-box:hover{
    margin-top: 12px;
}

.comment-box{
    width: 500px;
    padding: 20px;
    margin: 15px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 3px 3px 25px rgba(0,0,0,0.3);
    background-color:#36454F !important;

}

.Profile{
    display: flex;
    align-items: center;
}

.profile-image{
    width: 70px;
    height: 70px;
    box-shadow: 2px 2px 30px rgba(0,0,0,0.3);
    overflow: hidden;
    border-radius: 50%;
    margin-right: 10px;
}

.profile-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.Name{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}

.Name strong{
    color:white !important;

    font-size: 18px;
}

.Name span{
    color: gray;
    margin-top: 2px;
}

.comment p{
    color:white !important;

}`}</style>
     <section className="main">
        <div className="full-boxer">
            <div className="comment-box">
                <div className="box-top">
                    <div className="Profile">
                        <div className="profile-image">
                            <img src="images/alson.jpg"/>
                        </div>
                        <div className="Name">
                            <strong>Ranidi Lochana</strong>
                            <span>@Ranidi Lochana</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <p>
                        I invest $5000 and yeah they are actually giving profit on daily basis.
                        profite depends upon your investment.The more you put the more you get
                    </p>
                </div>
            </div>

            <div className="comment-box">
                <div className="box-top">
                    <div className="Profile">
                        <div className="profile-image">
                            <img src="images/alex.jpg"/>
                        </div>
                        <div className="Name">
                            <strong>Senuda Dilwan</strong>
                            <span>@senuda dilwan</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <p>
                    Individuals who have had successful campaigns might express gratitude for the opportunity to access funding that might have been otherwise difficult to secure..
                    </p>
                </div>
            </div>

            <div className="comment-box">
                <div className="box-top">
                    <div className="Profile">
                        <div className="profile-image">
                            <img src="images/jeet.jpg"/>
                        </div>
                        <div className="Name">
                            <strong>Rumali fernando</strong>
                            <span>@Rumali fernando</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <p>
                    Supporters may feel empowered by their ability to contribute directly to projects and causes they believe in, bypassing traditional gatekeepers.
                    </p>
                </div>
            </div>

            {/* <div className="comment-box">
                <div className="box-top">
                    <div className="Profile">
                        <div className="profile-image">
                            <img src="image/4.png"/>
                        </div>
                        <div className="Name">
                            <strong>Midinu Thiranjana</strong>
                            <span>@Midinu Thiranjana</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div> */}
        </div>
    </section>
    </>
  )
}

export default Comment
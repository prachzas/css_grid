import React, { Component } from 'react';
import '../components/Mylist.css'
class Mylist extends Component {
    render() {
        return (
            <div>
                <h1>My List</h1>
            <div className="mylist">
                <div className="card1">
                    < img src={require("../images/johnwick.jpg")} alt="johnwick"/>
                    <p>John Wick 2019</p>
                </div>
                <div className="card2">
                    < img src={require("../images/leapyear.jpg")} alt="leap year"/>
                    <p>Leap year 2010</p>
                </div>
                <div className="card3">
                    < img src={require("../images/ironman.jpg")} alt="ironman3"/>
                    <p>Iron man 3 2013</p>
                </div>
                <div className="card4">
                    < img src={require("../images/The_Proposal.jpg")} alt="theproposal2005"/>
                    <p>The Proposal 2005</p>
                </div>
                <div className="card5">
                    < img src={require("../images/mySassyGirl.jpg")} alt="mySassyGirl"/>
                    <p>mySassyGirl</p>
                </div>
                <div className="card6">
                    < img src={require("../images/civilwar.jpg")} alt="civilWar"/>
                    <p>Civil War 2013</p>
                </div>
                <div className="card7">
                    < img src={require("../images/meBeforeYou.jpg")} alt="myBeforeYou"/>
                    <p>Me befroe you 2016</p>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Mylist;
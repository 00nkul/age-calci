import React from 'react'
import './App.css'
import { useState } from 'react'


function App() {

    let today = new Date();
    let todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const [dob, setDob] = useState(todayDate)
    const [msg, setMsg] = useState('')
    const [difference, setDifference] = useState({
        inDays: 0,
        inWeeks: 0,
        inMonths: 0,
        inYears: 0
    })



    const calculateTimimg = d => {
        let months = 0, years = 0, days = 0, weeks = 0;
        while (d) {
            if (d >= 365) {
                years++;
                d -= 365;
            } else if (d >= 30) {
                months++;
                d -= 30;
            } else if (d >= 7) {
                weeks++;
                d -= 7;
            } else {
                days++;
                d--;
            }
        };
        // return {
        //     years, months, weeks, days
        // };

        return ` ${years} years ${months} months and ${days} days`
    };
    //  console.log(calculateTimimg(days));
    function findAge() {

        var date1 = new Date(dob);
        var date2 = new Date(todayDate);

        var DateDiff = {

            inDays: function (d1, d2) {
                var t2 = d2.getTime();
                var t1 = d1.getTime();

                return parseInt((t2 - t1) / (24 * 3600 * 1000));
            },

            inWeeks: function (d1, d2) {
                var t2 = d2.getTime();
                var t1 = d1.getTime();

                return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
            },

            inMonths: function (d1, d2) {
                var d1Y = d1.getFullYear();
                var d2Y = d2.getFullYear();
                var d1M = d1.getMonth();
                var d2M = d2.getMonth();

                return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
            },

            inYears: function (d1, d2) {
                return d2.getFullYear() - d1.getFullYear();
            }
        }

        setDifference({
            inDays: DateDiff.inDays(date1, date2),
            inMonths: DateDiff.inMonths(date1, date2),
            inWeeks: DateDiff.inWeeks(date1, date2),
            inYears: DateDiff.inYears(date1, date2)
        })

        // console.log(difference.inYears)
        // console.log(difference.inWeeks)
        // console.log(difference.inDays)

        setMsg('Wish you long life ✨✨')

    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <h3 className='text-center m-3 display-4' > ✨✨ Age Calculator ✨✨</h3>
                    <hr />
                    <div className="col-md-6 mt-5">
                        <div className="mb-3">
                            <input type="date" className="form-control" placeholder='Enter Date of Birth here ' onChange={(e) => { setDob(e.target.value) }} />
                        </div>

                        <button className='btn btn-success mt-2 w-100' onClick={findAge} >Find</button>
                    </div>
                    <div className="col-md-6 mt-5">
                        <h3>You are ⏳⏳ {calculateTimimg(difference.inDays)} old</h3>

                        <div className="date-card">
                            <h3>You are on 🌏 earth from {difference.inYears} years</h3>
                        </div>
                        <div className="date-card">
                            <h3>Number of months you spent {difference.inMonths}</h3>
                        </div>
                        <div className="date-card">
                            <h3>You have  spent  {difference.inDays} days here 🌏🙌</h3>
                        </div>
                    </div>
                    <hr className='mt-3'/>
                    <h2 className="text-center m-3">{ msg}</h2>
                </div>
            </div>
        </>
    )
}

export default App
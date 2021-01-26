import React, {useState, useEffect} from 'react';
import CardCovid from '../components/CardCovid'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../config/redux/actions/count';
import { setUser } from '../config/redux/actions/user';
import { getSummaryCovid } from '../config/redux/actions/covid';

const Home = (props) => {
    const [username, setUsername] = useState('')
    const stateRedux = useSelector(state => state)
    const { count } = stateRedux.count
    const { name } = stateRedux.user
    const dataCovid = stateRedux.covid.allStatus
    const dispatch = useDispatch()
    const handleDetail = () => {
        props.history.push({ 
            pathname: '/detail-covid',
            state: 'Hello hanif'
           });
    }
    useEffect(() => {
        dispatch(getSummaryCovid())
    }, []);
    return (
        <div>
            <header>
                <h2>Welcome to the covid monitoring web here provides information related to corona virus disease data</h2>
                <hr className="my-5"/>
                <div className="btn btn-danger" href="#section2">List Data Covid</div>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-md-12" id="section2">
                        <CardCovid data={dataCovid}/>
                        {count}
                        <br/>
                        {name}
                        <div className="btn btn-primary" onClick={ () => dispatch(increment())}>Increment</div>
                        <div className="btn btn-danger" onClick={ () => count > 0 && dispatch(decrement())}>Decrement</div>
                        <input type="text" value={username} onChange={ (e) => setUsername(e.target.value)}/>
                        <div className="btn btn-info" onClick={() => {
                            setUsername('')
                            dispatch(setUser(username))}
                        }>Submit</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                <th scope="col">No</th>
                                <th scope="col">Code</th>
                                <th scope="col">Country</th>
                                <th scope="col">Total Cases</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onClick={()=> handleDetail() } className="list-country">
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

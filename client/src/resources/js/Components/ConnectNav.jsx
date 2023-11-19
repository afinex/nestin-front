import {useSelector} from 'react-redux';
import {Card, Avatar} from 'antd';
import moment from 'moment';

const {Meta} = Card;

const ConnectNav = () =>{
    const {auth} = useSelector((state) => ({...state}));
    const {user} = auth;

    return(
        <div className='d-flex justify-content-around'>
            <Card>
                <Meta avatar={<Avatar>{user.name[0]}</Avatar>} title={user.name} description={`Joined from ${moment(user.created_at).fromNow()}`}/>
            </Card>

            { auth && user && user.stripe_seller && user.stripe_seller.charges_enabled &&  (
            <>
                <div>Pending Balance</div>
                <div>Payout Setting</div>
            </>
            )}
        </div>
        
    )
}

export default ConnectNav;
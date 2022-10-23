import { FriendListItem } from "components/FriendListItem/FriendListItem";
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, isOnline, avatar, name }) =>
                (<FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name} />)
            )}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
        })
    ),
};



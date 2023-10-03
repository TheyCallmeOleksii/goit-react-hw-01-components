import css from './FriendList.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <span
        className={`${css.iconCircle} ${
          friend.isOnline ? css.favouritegreen : css.favouritered
        }`}
      ></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
};

export const Friend = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map((friend, index) => (
        <FriendListItem key={index} friend={friend} />
      ))}
    </ul>
  );
};

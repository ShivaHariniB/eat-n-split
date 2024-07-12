const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />;
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friends friends={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friends({ friends }) {
  return (
    <li>
      <img src={friends.image} alt={friends.name} />
      <h3>{friends.name}</h3>
      {friends.balance < 0 && (
        <p className="red">
          You owe {friends.name} ${Math.abs(friends.balance)}
        </p>
      )}
      {friends.balance > 0 && (
        <p className="green">
          {friends.name} owes you ${Math.abs(friends.balance)}
        </p>
      )}
      {friends.balance === 0 && <p>You and {friends.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}
function Button({ children }) {
  return <button className="button">{children}</button>;
}
function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👩🏼‍🤝‍👩🏼 Friend name</label>
      <input type="text"></input>
      <label>📷 Image URL</label>
      <input type="text"></input>
      <Button>Add</Button>
    </form>
  );
}

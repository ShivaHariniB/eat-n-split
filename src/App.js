import { useState } from "react";

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

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <FormSplitBill />
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
function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH X</h2>

      <label>💰 Bill value</label>
      <input type="number"></input>
      <label>🧒🏻 Your expense</label>
      <input type="number"></input>

      <label>👩🏼‍🤝‍👩🏼 x's expense</label>
      <input type="number"></input>

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

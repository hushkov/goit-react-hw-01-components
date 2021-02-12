import TransactionHistory from 'Components/TransactionHistory/TransactionHistory';
import FriendList from 'Components/FriendList/FriendList';
import Statistics from 'Components/Statistics/Statistics';
import Profile from 'Components/Profile/Profile';
import statisticalData from 'db/statistical-data.json';
import transactions from 'db/transactions.json';
import friends from 'db/friends.json';
import user from 'db/user.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;

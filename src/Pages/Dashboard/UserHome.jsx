import useAuth from "../../hooks/useAuth";


const UserHome = () => {
  const {user} = useAuth();

  return (
    <div>
      <h2 className="font-bold text-xl">Hi! Welcome {user?.displayName ? user?.displayName : 'Back'}</h2>
    </div>
  );
};

export default UserHome;
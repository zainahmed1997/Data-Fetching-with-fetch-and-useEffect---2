
const GithubUser = ({ username, user }) => {
  return (
    <li>
      <h3>{username=user.login}</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </li>
  );
};

export default GithubUser;

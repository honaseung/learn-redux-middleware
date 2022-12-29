const Sample = ({ loadingPosts, loadingUsers, posts, users }) => {
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPosts && "로딩 중..."}
        {!loadingPosts && posts && (
          <div>
            <h3>{posts.title}</h3>
            <h3>{posts.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>사용자 목록</h1>
        {loadingUsers && "로딩 중..."}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;

const Page = (props) => {
  const { item } = props;
  return (
    <div>
      <h1>Hi page</h1>
      {item.map(({ name, age, city }, index) => {
        return (
          <div key={index}>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{city}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Page;

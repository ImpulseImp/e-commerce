import './categories.style.scss';

const Categories = (props) => {
  const { item } = props;
  return (
    <div className='categories-container'>
      {item.map(({ title, id, imageUrl }) => {
        return (
          // <div className='category-container' key={id}>
          //   <div className='bacbackground-image'>
          //     <div className='category-body-container'>
          //       <h1>{title}</h1>
          //       <p>Shop now</p>
          //     </div>
          //   </div>
          // </div>
          <div className='category-container' key={id}>
            <div
              className='background-image'
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            />
            <div className='category-body-container'>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Categories;

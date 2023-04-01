import CategoryItem from './CategoryItem';
const Categories = ({ category }) => {
  return (
    <div className='categories-container'>
      {category.map((item) => {
        return <CategoryItem {...item} key={item.id} />;
      })}
    </div>
  );
};
export default Categories;
